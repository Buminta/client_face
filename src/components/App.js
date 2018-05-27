import React from 'react'
import Upload from './Upload'
import PassportList from './PassportList/PassportList'
import CompareFaces from './CompareFaces/CompareFaces'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom"
export default class App extends React.Component{
  render(){
    return(
       <Router>
         <div>
          <Navbar />
          <div className="container" style={{paddingTop: "80px"}}>
            <Route path='/' exact component={CompareFaces} />
            <Route path='/crime' component={PassportList} />
            <Route path='/upload' component={Upload} />
          </div>
          <Footer />
        </div>
      </Router> 
    )
  }
}