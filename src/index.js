import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'normalize.css';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@mui/material';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <Suspense fallback={<div style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
</div>}>
          <App /></Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
