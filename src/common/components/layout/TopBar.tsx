import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

type AppBarProps = {
  screenTitle: string;
};

export const TopBar = ({
                         screenTitle
                       }: AppBarProps) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant="h6" component="div">
          {screenTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};