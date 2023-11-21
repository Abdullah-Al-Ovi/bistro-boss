import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-[90%] mx-auto'>
      <AuthProvider>
        <RouterProvider router ={Router}></RouterProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
