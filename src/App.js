// App.js

import React from 'react';
import Router from './config/Router';
import { AlbumDataContext, AlbumDataProvider } from './Context/AlbumDataContext';

const App = () => (
  <AlbumDataProvider>
    <div className="App">
      <Router />
    </div>
  </AlbumDataProvider>
);

export default App;
