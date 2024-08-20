import './App.css'
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header/>
//       <Outlet/>
//       <Footer/>
//       </div>
//     )
//   }
// }

