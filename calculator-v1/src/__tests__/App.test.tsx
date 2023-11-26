import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import App from '../App';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});

describe('Calculator App tests', () => {
  test('Renders calculator', () => {
    render(<App />);

    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('0');

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBe(19);

    for (let i = 0; i < 10; i++) {
      expect(screen.getByRole('button', { name: `${i}` })).toBeInTheDocument();
    }
    expect(screen.getByRole('button', { name: 'AC' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'C' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '*' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '÷' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '.' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '=' })).toBeInTheDocument();
  });

  test('Does addition correctly', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByTestId('output')).toHaveTextContent('15');
  });
});
