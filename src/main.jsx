import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from '../route/home.jsx'
import Bag from '../route/bag.jsx'
import { HashRouter, Routes, Route } from "react-router-dom";
import { store } from './store/index.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="bag" element={<Bag />} />
          </Route>
        </Routes>
      </HashRouter>
    </StrictMode>
  </Provider>
)

