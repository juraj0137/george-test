import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { CurrencyIcon } from './CurrencyIcon';

type CurrencyListItemProps = {
  currency: string;
  countryNames: string[];
  baseCurrencyCode: string;
  currencyName?: string;
  flag?: string;
  exchangeRate?: number;
}

export const CurrencyListItem = ({
                                   currency,
                                   currencyName,
                                   exchangeRate,
                                   flag,
                                   countryNames,
                                   baseCurrencyCode
                                 }: CurrencyListItemProps) => {

  const countryNamesJoined = countryNames.join(', ');
  const exchangeRateText = exchangeRate
    ? exchangeRate?.toFixed(2) + ' ' + baseCurrencyCode
    : '';

  return (
    <ListItem secondaryAction={exchangeRateText}>
      <ListItemIcon>
        {flag
          ? <CurrencyIcon alt={currency} src={`/flags/${flag}.png`}/>
          : null}
      </ListItemIcon>
      <ListItemText
        primary={
          <>
            {currency}
            {currencyName ? <Typography component={'small'}> ({currencyName})</Typography> : null}
          </>
        }
        secondary={
          countryNamesJoined
            ? <Typography component={'div'} noWrap sx={{marginRight: '50px', fontSize: '13px'}}>{countryNamesJoined}</Typography>
            : null
        }
      />
    </ListItem>
  )
};