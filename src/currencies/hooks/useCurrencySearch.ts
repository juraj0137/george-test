import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { CurrencyDetail, currencyFilterFunction } from '../currencyUtils';

const QUERY_PARAM_KEY = 'q';

export const useCurrencySearch = (currencies: CurrencyDetail[]) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get(QUERY_PARAM_KEY) || '';

  const updateSearch = useCallback((searchTerm: string) => {
    let search;
    if (searchTerm) {
      search = {
        [QUERY_PARAM_KEY]: searchTerm
      }
    } else {
      search = undefined;
    }

    setSearchParams(search);
  }, [setSearchParams]);

  const filteredCurrencies = useMemo(() => searchValue.trim().length === 0
    // dont filter when search contains only blank characters or is empty
    ? currencies
    : currencies.filter(currency => currencyFilterFunction(currency, searchValue.trim()))
    , [searchValue, currencies]);

  return {
    currencies: filteredCurrencies,
    updateSearch,
    searchValue
  };
};