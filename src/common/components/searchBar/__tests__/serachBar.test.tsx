import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from '../SearchBar';

afterEach(() => cleanup());

test('should render SearchBar with placeholder', async () => {
  const placeholder = 'placeholder text';
  render(<SearchBar onChange={() => null} value={''} placeholder={placeholder}/>);
  expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
});

test('should react to user typing', async () => {
  const onFilterChange = jest.fn();
  const newFilterValue = 'test value';
  render(<SearchBar onChange={onFilterChange} value={''} placeholder={'placeholder'}/>);
  const input = await screen.getByPlaceholderText('placeholder');
  fireEvent.change(input, { target: { value: newFilterValue } });
  expect(onFilterChange).toHaveBeenCalledWith(newFilterValue);
});