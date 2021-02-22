import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import InputBlock from './components/InputBlock';

afterEach(cleanup);

test('renders Search element', () => {
    render(<App />);
    const searchInput = screen.getByTestId('search');
    expect(searchInput).toBeInTheDocument(true);

    fireEvent.change(searchInput, {target: {value: 'probe'}});
    expect(searchInput).toHaveValue('probe');
});

test('renders All button', () => {
    render(<App />);
    const searchAll = screen.getByTestId('searchAll');
    expect(searchAll).toBeInTheDocument(true);
    fireEvent.click(searchAll);
});

test('renders Liked button', () => {
    render(<App />);
    const searchLiked = screen.getByTestId('searchLiked');
    expect(searchLiked).toBeInTheDocument(true);
    fireEvent.click(searchLiked);
});

test('renders inputBlock element', () => {
    render(<App />);
    const newInput = screen.getByTestId('newInput');
    expect(newInput).toBeInTheDocument(true);

    fireEvent.change(newInput, {target: {value: 'probe'}});
    expect(newInput).toHaveValue('probe');
});

test('renders form element', () => {
    render(<App />);
    const form = screen.getByTestId('form');
    expect(form).toBeInTheDocument(true);
});

test('clears form after submit', () => {
    const clickNew = jest.fn();
    const {getByTestId} = render(<InputBlock clickNew={clickNew} />);
    const formButton = getByTestId('form-button');
    fireEvent.click(formButton);
    expect(clickNew).toBeCalled();
});

test('Renders submit button', () => {
    render(<App />);
    const formButton = screen.getByTestId('form-button');
    expect(formButton).toBeInTheDocument(true);
})

test("renders post's text", () => {
    render(<App />);
    const postText = screen.getAllByTestId('postText');
    postText.forEach((text) => expect(text).toBeInTheDocument(true));
});

test("renders star's button", () => {
    render(<App />);
    const postStar = screen.getAllByTestId('postStar');
    postStar.forEach((star) => expect(star).toBeInTheDocument(true));
});

test("renders delete's button", () => {
    render(<App />);
    const postDelete = screen.getAllByTestId('postDelete');
    postDelete.forEach((delBtn) => expect(delBtn).toBeInTheDocument(true));
});

test('Deletes post upon delete button clicked', () => {
    render(<App />);
    const postDelete = screen.getAllByTestId('postDelete');
    const postText = screen.getAllByTestId('postText');
    fireEvent.click(postDelete[0]);
    expect(postText[0]).not.toBeInTheDocument();
});

test("renders like", () => {
    render(<App />);
    const postText = screen.getAllByTestId('postText');
    const postLike = screen.queryAllByTestId('postLike');
    fireEvent.click(postText[0]);
    expect(postLike[0]).toBeInTheDocument();
});