import React from 'react'
import Upload from './Upload'
import Recognition from './Recognition'
import PassportList from './PassportList/PassportList'
import CompareFaces from './CompareFaces/CompareFaces'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom"
export default class App extends React.Component{
  render(){
    return(
       <Router>
        <div className="container">
          <Navbar />
          <Route path='/' exact component={CompareFaces} />
          <Route path='/crime' component={PassportList} />
          <Route path='/recognition' component={Recognition} />
          <Route path='/upload' component={Upload} />
        </div>
      </Router> 
    )
  }
}