import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router'
import BookShear from './Context/BookShear'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookShear>
      <RouterProvider router={router}></RouterProvider>
    </BookShear>
  </StrictMode>,
)
