import React, { PropsWithChildren } from 'react';
import { TopBar } from './TopBar';

type LayoutProps = {
  screenTitle: string;
};

export const Layout = ({
                         screenTitle,
                         children
                       }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <TopBar screenTitle={screenTitle}/>
      {children}
    </>
  );
};