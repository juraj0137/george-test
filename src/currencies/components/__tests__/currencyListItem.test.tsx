import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { CurrencyListItem } from '../CurrencyListItem'

afterEach(() => cleanup());

test('should render CurrencyListItem', async () => {
  const countries = ['Slovakia', 'Austria', 'Germany', 'Australia'];
  const currencyCode = 'EUR';
  const currencyName = 'Euro';

  const { baseElement } = render(<CurrencyListItem
    countryNames={countries}
    currency={currencyCode}
    currencyName={currencyName}
    baseCurrencyCode={'EUR'}
  />);

  expect(screen.getByText(countries.join(', '))).toBeInTheDocument();
  expect(baseElement).toHaveTextContent(`${currencyCode} (${currencyName})`);
});
