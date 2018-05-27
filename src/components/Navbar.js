import React from 'react'
import {NavLink} from 'react-router-dom'
export default class Navbar extends React.Component{
 render(){
    return(
        <div className="page-header">
          <div className="page-header-top">
            <div className="container">
              <div className="page-logo">
                <NavLink to="/"> 
                  <img 
                    src="/assets/logo-default.jpg" 
                    alt="logo" 
                    className="logo-default"
                  />
                </NavLink>
              </div>
              <ul className="nav ">
                <li className="nav-item" style={{marginLeft: "20px"}}>
                  <NavLink 
                      activeClassName="active" 
                      className="nav-link" 
                      to="/" exact>
                      Đối chiếu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    activeClassName="active" 
                    className="nav-link" 
                    to="/crime" >
                    Tội phạm
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    activeClassName="active" 
                    className="nav-link" 
                    to="/upload">
                    Upload
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
   )
 }
}