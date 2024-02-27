import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from "./components/Counter";

describe( 'Counter', () => {
  test('Counter initial value is set by prop', () => {
    const { container } = render(<Counter value={0}></Counter>);
    const counterValue = container.querySelector('.counter__input').value;
    expect(counterValue).toBe('0');
  });
  test('Counter decrements on - button click', () => {
    render(<Counter value={1}></Counter>);
    userEvent.click(screen.getByText(/-/i));
    const counterValue = screen.getByTestId('counter__input').value;
    expect(counterValue).toBe('0');
  });
  test('Counter increments on + button click', () => {
    render(<Counter value={1}></Counter>);
    userEvent.click(screen.getByText(/\+/i));
    const counterValue = screen.getByTestId('counter__input').value;
    expect(counterValue).toBe('2');
  });
});