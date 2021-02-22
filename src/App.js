import React, {  useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import ToDoContainer from './components/ToDoContainer';
import InputBlock from './components/InputBlock';
import StatusFilters from './components/StatusFilters';

const messagesInit = [
    {
        id: 0,
        text: 'first',
        star: false,
        like: false,
    },
    {
        id: 1,
        text: 'second',
        star: false,
        like: false,
    },
    {
        id: 2,
        text: 'third',
        star: false,
        like: false,
    },
    {
        id: 3,
        text: 'forth',
        star: false,
        like: false,
    },
];

function App() {
    const [messages, setMessages] = useState(messagesInit);
    const [searchMessages, setSearchMessages] = useState(messages);
    const [likedMessages, setLikedMessages] = useState(searchMessages);
    const [all, setAll] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [isLiked, setLiked] = useState(false);
    const [user] = useState('Nata');


    const handleStarClick = (id, badge) => {
        const arr = [...messages];
        arr.forEach((elem) => {
            if(elem.id === id) {
                switch (badge) {
                case 'star':
                    elem.star = !elem.star;
                    break;
                case 'like':
                    elem.like = !elem.like;
                    break;
                }
            }
        });
        setMessages([...arr]);
    };

    const handleDeleteClick = (id) => {
        const arr = [...messages];
        const newArr = arr.filter((elem) => elem.id !== id);
        console.log(newArr);
        setMessages([...newArr]);
    };

    const handleNewMessage = (text) => {
        const arr = [...messages];

        const newArr = [...arr, {
            id: arr.length,
            text: text,
            star: false,
            like: false,
        }];
        setMessages([...newArr]);
        // setSearchMessages([...newArr]);
        // setLikedMessages([...newArr]);
    };

    const handleSearchResult = (search) => {
        setAll(false);
        setSearchValue(search);
        const arr = [...messages];
        const newArr = arr.filter((elem) => elem.text.includes(search));
        setSearchMessages([...newArr]);
        setLikedMessages([...newArr]);
    };

    const handleCheckOutput = () => {
        if (all) {
            return [...messages];
        } else if(!isLiked) {
            return [...searchMessages];
        }  else {
            return [...likedMessages];
        }
    };

    useEffect(() => {
        if(isLiked) {
            let arr = [];
            arr = [...likedMessages];

            const newArr = arr.filter((item) => item.like);
            setLikedMessages([...newArr]);
            setAll(false);
        }
    }, [isLiked, searchValue]);

    useEffect(() => {
        setSearchMessages([...messages]);
        setLikedMessages([...messages]);
    }, [messages]);

    return (
        <div className="app">
            <Header 
                user={user}
                messages={messages}
            />
            <div className='search-panel d-flex'>
                <Search 
                    searchResult={handleSearchResult} 
                    searchValue={searchValue}
                />
                <StatusFilters 
                    clickLiked={() => setLiked(!isLiked)}
                    clickAll={() => {
                        setAll(true);
                        setSearchValue('');
                        setSearchMessages([...messages]);
                        setLikedMessages([...messages]);
                    }}/>
            </div>
            
            <ToDoContainer 
                clickDelete={handleDeleteClick} 
                messages={handleCheckOutput()} 
                clickNotes={handleStarClick} 
            />
            <InputBlock clickNew={handleNewMessage} />
        </div>
    );
}

export default App;
