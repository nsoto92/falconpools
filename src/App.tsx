import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/Home'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path={'/dev-home'} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
