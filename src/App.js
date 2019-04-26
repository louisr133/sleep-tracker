import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Login from './components/Login'
import './css/App.css';
import PrivateRoute from './components/PrivateRoute'
import {NavLink} from 'react-router-dom';
import Tech from './components/Tech'
import SignIn from './components/SignIn';

class App extends Component {
  componentDidMount(){
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div className="App">
        <nav className='appNav'>
          <NavLink activeClassName='active' to='/'>Login</NavLink>
          <NavLink activeClassName='active' to='/signin'>Sign In</NavLink>
          <NavLink activeClassName='active' to='/sleep/data'>Sleep</NavLink>
        </nav>
        
          <Route path ='/' component={Login} />
          <Route path='/signin' component={SignIn} />
          <PrivateRoute path='/sleep' component={Tech} />
        
    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    ...state,

  })
}

export default connect(mapStateToProps, {})(App);
