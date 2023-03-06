import './index.css';

import App from './App';
import { CartProvider } from './context/CartProvider';
import { ProductsProvider } from './context/ProductProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>,
);

