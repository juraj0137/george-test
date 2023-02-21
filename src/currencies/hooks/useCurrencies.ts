import { getExchangeRates } from '../api/getExchangeRates';
import { useEffect, useState } from 'react';
import { CurrencyDetail, transformCurrencyExchangeRatesResponse } from '../currencyUtils';

export type CurrenciesState = {
  baseCurrency: string;
  currencies: CurrencyDetail[];
};

export const useCurrencies = () => {
  const [data, setData] = useState<CurrenciesState>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    getExchangeRates()
      .then(value => setData(transformCurrencyExchangeRatesResponse(value)))
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));

  }, []);

  return {
    data,
    isLoading,
    error
  };
};