import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

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
  });
});
