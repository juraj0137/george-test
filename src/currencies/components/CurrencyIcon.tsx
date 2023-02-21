import React from 'react';
import { Icon, styled } from '@mui/material';

const StyledIcon = styled(Icon)(() => ({
  '&': {
    display: 'flex',
    alignItems: 'center'
  },
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
  }
}));

type CurrencyIconProps = {
  alt: string;
  src: string;
}

export const CurrencyIcon = ({
                               src,
                               alt,
                             }: CurrencyIconProps) => {
  return (
    <StyledIcon>
      <img alt={alt} src={src}/>
    </StyledIcon>
  )
};