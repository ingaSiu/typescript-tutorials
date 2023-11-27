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
  beforeEach(() => {
    render(<App />);
  });

  test('Renders calculator', () => {
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
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByTestId('output')).toHaveTextContent('15');
  });

  test('Does subtraction correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '-' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByTestId('output')).toHaveTextContent('5');
  });

  test('Does multiply correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '*' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByTestId('output')).toHaveTextContent('50');
  });

  test('Does divide correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '÷' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByTestId('output')).toHaveTextContent('2');
  });

  test('Does delete the last number correctly', () => {
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: 'C' }));

    expect(screen.getByTestId('output')).toHaveTextContent('1');
  });

  test('Does clear all operation correctly', () => {
    const plusButton = screen.getByRole('button', { name: '+' });

    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));

    fireEvent.click(plusButton);
    fireEvent.click(screen.getByRole('button', { name: '3' }));

    expect(plusButton).toHaveStyle({ borderColor: '#fff' });

    fireEvent.click(screen.getByRole('button', { name: 'AC' }));

    const output = screen.getByTestId('output');
    expect(output).toHaveTextContent('0');
    expect(plusButton).not.toHaveStyle({ borderColor: '#fff' });
  });

  test('Does chain operations correctly', () => {
    const output = screen.getByTestId('output');

    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '0' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '5' }));

    expect(output).toHaveTextContent('5');
    fireEvent.click(screen.getByRole('button', { name: '+' }));

    expect(output).toHaveTextContent('15');
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '9' }));

    expect(output).toHaveTextContent('19');
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(output).toHaveTextContent('34');
  });
});
