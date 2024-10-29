import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom';


export default function Header() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/general">News </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/business">business</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment">entertainment</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/general">general</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health">health</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science">science</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports">sports</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}


// export default class Header extends Component {
//   render() {
//     return (
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">News </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/business">business</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/entertainment">entertainment</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/general">general</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/health">health</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/science">science</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/sports">sports</NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }
