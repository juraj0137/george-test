import { Alert, Box, CircularProgress, Container, Typography } from '@mui/material';
import React from 'react';
import { SearchBar } from '../common/components/searchBar/SearchBar';
import { useCurrencies } from './hooks/useCurrencies';
import { useCurrencySearch } from './hooks/useCurrencySearch';
import { CurrencyListItem } from './components/CurrencyListItem';

export const Currencies = () => {

  const { data, isLoading, error } = useCurrencies();
  const { currencies, searchValue, updateSearch } = useCurrencySearch(data?.currencies || []);

  const renderContent = () => {

    if (isLoading) {
      return <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
        <CircularProgress/>
      </Box>;
    }

    if (error) {
      return <Alert severity="error">{error}</Alert>;
    }

    if (currencies.length === 0) {
      return <Typography variant={'h4'} sx={{ textAlign: 'center', my: 8 }}>No entries</Typography>
    }

    return currencies.map((currency) => {
      // determine flag if currency is used in single country
      const flag = currency.countryCodes?.length === 1 ? currency.countryCodes[0] : undefined;

      return <CurrencyListItem
        currency={currency.currency}
        currencyName={currency.currencyName}
        flag={flag}
        countryNames={currency.countryNames || []}
        exchangeRate={currency.exchangeRate}
        baseCurrencyCode={data?.baseCurrency || ''}
        key={currency.currency}
      />
    });
  };

  return (
    <>
      <SearchBar placeholder="Search for currency" value={searchValue} onChange={updateSearch}/>
      <Container>
        {renderContent()}
      </Container>
    </>
  )
};