import React from 'react';
import { cleanup } from '@testing-library/react';
import { CurrencyDetail, currencyFilterFunction, getCountriesByCurrency } from '../currencyUtils';

afterEach(() => cleanup());

const currencyDetail: CurrencyDetail = {
  countryNames: ['Slovakia', 'Austria', 'Germany'],
  countryCodes: ['SVK', 'AUT', 'GER'],
  currency: 'EUR_CurrencyCode',
  currencyName: 'Euro',
};

test('currencyUtils#getCountriesByCurrency should return all countries for given currency', async () => {
  expect(getCountriesByCurrency('CZK')).toEqual([{
    countryCode: 'CZ',
    countryName: 'Czech Republic',
    currencyCode: 'CZK',
  }])
});

test('currencyUtils#getCountriesByCurrency should return empty list for non-existing currency', async () => {
  expect(getCountriesByCurrency('non-existing')).toEqual([])
});

test('currencyUtils#currencyFilterFunction should properly match currency code', async () => {
  expect(currencyFilterFunction(currencyDetail, 'EUR_CurrencyCode')).toBeTruthy();
});

test('currencyUtils#currencyFilterFunction should properly match country name', async () => {
  expect(currencyFilterFunction(currencyDetail, 'slova')).toBeTruthy();
});

test('currencyUtils#currencyFilterFunction should properly match country code', async () => {
  expect(currencyFilterFunction(currencyDetail, 'aut')).toBeTruthy();
});

