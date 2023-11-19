import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-[90%] mx-auto'>
    <RouterProvider router ={Router}></RouterProvider>
    </div>
  </React.StrictMode>,
)
