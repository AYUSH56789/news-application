import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import News from './components/news/News.jsx'
// import './index.css'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
       <Route   path='/business' element={<News category="business"/>} />
       <Route   path='/entertainment' element={<News category="entertainment"/>} />
      <Route   path='/general' element={<News category="general"/>} />
      <Route  path='/health' element={<News category="health"/>} />
      <Route   path='/science' element={<News category="science"/>} />
      <Route  path='/sports' element={<News category="sports"/>} /> 
  </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  //{/* </React.StrictMode>, */}
)
