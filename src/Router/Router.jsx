import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
// 
import LayOut from '../LayOut/LayOut.jsx';
import BookPage from '../Pages/BookPage/BookPage.jsx'
import HomePagex from '../Pages/HomePage/HomePagex.jsx'
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx';
import Meter from '../Pages/MeterPage/Meter.jsx';


export const router = createBrowserRouter([
    {
        path: "", Component: LayOut,
        children: [
            { index: true, Component: HomePagex },
            { path: "BookPage", Component: BookPage },
            { path: "MeterPage", Component: Meter }
        ],
        errorElement: <ErrorPage />
    },
])