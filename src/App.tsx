import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact-path={'/'} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
