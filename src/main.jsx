import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { AuthProvider } from './context/authContext'
import 'antd/dist/reset.css'
import { SearchProvider } from './context/searchContext'
import { CartProvider } from './context/cartContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <RouterProvider router={router}/>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>
);
