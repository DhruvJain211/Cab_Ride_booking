import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import FeaturesPage from './pages/FeaturesPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      },
      {
        path: '/features',
        element: <FeaturesPage/>
      },
      {
        path: '/about',
        element: <AboutPage/>
      },
      {
        path: '/blog',
        element: <NotFoundPage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
