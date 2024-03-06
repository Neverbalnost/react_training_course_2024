import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import {act} from "react-dom/test-utils";
import GenreMenu from "./components/GenreMenu";

describe('Counter tests', () => {
    test('Counter initial value is set by prop', () => {
        render(<Counter value={0}></Counter>);
        expect(screen.getByTestId('counter__input').value).toBe('0');
    });
    test('Counter value is changed when typing in an input', () => {
        render(<Counter value={0}></Counter>);
        const counterInput = screen.getByTestId('counter__input');
        act(() => {
            userEvent.clear(counterInput);
            userEvent.type(counterInput, '42');
        });
        expect(counterInput.value).toBe('42');
    });
    test('Counter decrements on - button click', () => {
        render(<Counter value={0}></Counter>);
        const counterInput = screen.getByTestId('counter__input');
        act(() => {
            userEvent.click(screen.getByTestId('counter__minus'));
        });
        expect(counterInput.value).toBe('-1');
    });
    test('Counter increments on + button click', () => {
        render(<Counter value={0}></Counter>);
        const counterInput = screen.getByTestId('counter__input');
        act(() => {
            userEvent.click(screen.getByTestId('counter__plus'));
        });
        expect(counterInput.value).toBe('1');
    });
});

describe('Search tests', () => {
    test('Search initial value is set by prop', () => {
        const {container} = render(<SearchForm value={'Random stuff about dinosaurs'}></SearchForm>);
        const counterValue = container.querySelector('.search__input').value;
        expect(counterValue).toBe('Random stuff about dinosaurs');
    });
    test('Search triggered on button click', () => {
        const mockCallback = jest.fn();
        render(<SearchForm value={'Random stuff about dinosaurs'}
                                               callback={(prompt) => mockCallback(prompt)}></SearchForm>);
        userEvent.click(screen.getByTestId('search__button'));
        expect(mockCallback).toBeCalledWith('Random stuff about dinosaurs');
    });
    test('Search triggered on enter', () => {
        const mockCallback = jest.fn();
        const {container} = render(<SearchForm value={'Random stuff about dinosaurs'}
                                               callback={(prompt) => mockCallback(prompt)}></SearchForm>);
        userEvent.type(container.querySelector('.search__input'), '{enter}');
        expect(mockCallback).toBeCalledWith('Random stuff about dinosaurs');
    });
});

describe('Genres tests', () => {
    test('Component renders all genres passed in props', () => {
        const genres=['thriller', 'comedy', 'adventure', 'anime'];
        const {container} = render(<GenreMenu genres={genres} value={0}></GenreMenu>);
        expect(container.querySelectorAll('.genre').length).toBe(genres.length);
    });

    test('Component highlights a selected genre passed in props', () => {
        const genres=['thriller', 'comedy', 'adventure', 'anime'];
        const selectedIndex = 1;
        const {container} = render(<GenreMenu genres={genres} value={selectedIndex} callback={(index) => mockCallback(index)}></GenreMenu>);
        expect(container.querySelector('.genre--chosen button').textContent).toBe(genres[selectedIndex]);
    });

    test('After a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
        const mockCallback = jest.fn();
        const genres=['thriller', 'comedy', 'adventure', 'anime'];
        const selectedIndex = 2;
        const {container} = render(<GenreMenu genres={genres} value={0} callback={(index) => mockCallback(index)}></GenreMenu>);
        act(() => {
            userEvent.click(container.querySelectorAll('.genre button')[selectedIndex]);
        });
        expect(mockCallback).toBeCalledWith(selectedIndex);
    });
});