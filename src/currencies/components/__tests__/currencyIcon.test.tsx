import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { CurrencyIcon } from '../CurrencyIcon';

afterEach(() => cleanup());

test('should render CurrencyIcon with given flag', async () => {
  render(<CurrencyIcon alt={'alt text'} src={'sk'}/>);
  expect(screen.getByAltText('alt text')).toBeInTheDocument();
});
