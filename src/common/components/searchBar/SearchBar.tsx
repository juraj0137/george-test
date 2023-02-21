import React from 'react';
import { AppBar, InputAdornment, OutlinedInput, styled, Toolbar, useScrollTrigger } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledSearchField = styled(OutlinedInput)((props) => ({
  color: props.theme.palette.text.primary,
  '&': {
    width: '100%',
    backgroundColor: props.theme.palette.grey['300']
  },
  '& fieldset': {
    border: 'none',
  }
}));

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const SearchBar = ({
                            value,
                            onChange,
                            placeholder
                          }: SearchBarProps) => {
  const isScrolledDown = useScrollTrigger();

  return (
    <AppBar
      position={'sticky'}
      sx={{ backgroundColor: 'primary.light' }}
      elevation={isScrolledDown ? 4 : 0}
    >
      <Toolbar>
        <StyledSearchField
          size={'small'}
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
        />
      </Toolbar>
    </AppBar>
  )
};