import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import BookShear from './Context/BookShear'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookShear>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </BookShear>
  </StrictMode>,
)
