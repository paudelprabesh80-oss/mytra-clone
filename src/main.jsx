import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '../route/home.jsx'
import Bag from '../route/bag.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './store/index.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
 { path: "/", element: <App/>,
 children: [
{path: "/", element: <Home/>},
{path: "/bag", element: <Bag/>},
],
 },
]
)



  createRoot(document.getElementById('root')).render(
    <Provider store = {store}>
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
  </Provider>
 
)
