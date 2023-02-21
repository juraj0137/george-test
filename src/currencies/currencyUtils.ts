import { COUNTRY_LIST } from './_data/countryList';
import { ExchangeRate, ExchangeRatesResponse } from './api/getExchangeRates';
import { CurrenciesState } from './hooks/useCurrencies';

type CountryCurrencyPair = {
  countryName: string;
  countryCode: string;
  currencyCode: string;
}

/**
 * Returns a list of countries where the given currency is used.
 * @param currencyCode
 */
export const getCountriesByCurrency = (currencyCode: string): CountryCurrencyPair[] => {
  return COUNTRY_LIST
    .filter(entry => entry.currencyCode === currencyCode)
    .map(entry => {
      const usage: CountryCurrencyPair = {
        countryCode: entry.countryCode,
        countryName: entry.countryName,
        currencyCode: currencyCode,
      };
      return usage;
    });
};

export type CurrencyDetail = {
  currency: string;
  currencyName?: string;
  exchangeRate?: number;
  countryCodes?: string[];
  countryNames?: string[];
}

const parseNumber = (input: unknown) => {
  switch (typeof input) {
    case 'number':
      return input;
    case 'string':
      return parseFloat(input);
    default:
      return NaN;
  }
};

const parseExchangeRate = (rates?: ExchangeRate): number | undefined => {
  if (!rates) {
    return undefined;
  }

  let { middle, buy, sell } = rates;
  if (middle) {
    return parseNumber(middle);
  } else if (buy && sell) {
    return (parseNumber(buy) + parseNumber(sell)) / 2;
  } else {
    return undefined;
  }
};

/**
 * Transforms and enhances a response from API with country names
 * @param response
 */
export const transformCurrencyExchangeRatesResponse = (response: ExchangeRatesResponse): CurrenciesState => {

  const transformCurrencyDetail = (response: ExchangeRatesResponse['fx'][0]): CurrencyDetail => {
    const countries = getCountriesByCurrency(response.currency);

    return {
      currency: response.currency,
      currencyName: response.nameI18N,
      countryCodes: countries.map(country => country.countryCode),
      countryNames: countries.map(country => country.countryName),
      exchangeRate: parseExchangeRate(response.exchangeRate)
    }
  };

  return {
    baseCurrency: response.baseCurrency,
    currencies: response.fx.map(transformCurrencyDetail)
  };
};


/**
 * Tests whether the given currency detail contains searched term
 * @param currency
 * @param search
 */
export const currencyFilterFunction = (currency: CurrencyDetail, search: string): boolean => {
  const candidates = [currency.currencyName, currency.currency];
  if (currency.countryNames) {
    candidates.push(...currency.countryNames);
  }
  if (currency.countryCodes) {
    candidates.push(...currency.countryCodes);
  }
  return candidates.some(candidate => candidate && candidate.toLowerCase().includes(search.toLowerCase()))
};
