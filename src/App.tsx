import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Layout } from './common/components/layout/Layout';
import { Currencies } from './currencies/Currencies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline/>
      <Layout screenTitle="George FE test">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Currencies/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
