import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
// 
import LayOut from '../LayOut/LayOut.jsx';
import BookPage from '../Pages/BookPage/BookPage.jsx'
import HomePagex from '../Pages/HomePage/HomePagex.jsx'
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx';
import Meter from '../Pages/MeterPage/Meter.jsx';
import Bookdetails from '../Component/Home/Bookdetais/Bookdetails.jsx';


export const router = createBrowserRouter([
    {
        path: "", Component: LayOut,
        children: [
            { index: true, Component: HomePagex },
            { path: "BookPage", Component: BookPage },
            { path: "MeterPage", Component: Meter },
            { path: "BookDetails/:ID", loader: () => fetch('/data/booksData.json'), Component: Bookdetails }
        ],
        errorElement: <ErrorPage />
    },
])