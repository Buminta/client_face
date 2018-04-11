import React from 'react'
import {NavLink} from 'react-router-dom'
export default class Navbar extends React.Component{
 render(){
    return(
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Đối chiếu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/crime" exact>Tội phạm</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/recognition">Nhận diện</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/upload">Upload</NavLink>
        </li>
        
      </ul>
   )
 }
}