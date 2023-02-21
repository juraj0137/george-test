export interface ExchangeRate {
  buy: string | number;
  middle: string | number;
  sell?: string | number;
  indicator: number;
  lastModified: string;
}

interface Fx {
  currency: string;
  precision: number;
  nameI18N?: string;
  exchangeRate?: ExchangeRate;
  banknoteRate?: ExchangeRate;
  flags?: string[];
  denominations?: number[];
}

export interface ExchangeRatesResponse {
  institute: number;
  lastUpdated: string;
  comparisonDate: string;
  baseCurrency: string;
  fx: Fx[];
}

export const getExchangeRates = (): Promise<ExchangeRatesResponse> => {
  const URL = 'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343';
  return fetch(URL)
    .then(response => response.json())
    .catch(() => 'Can not load data');
};