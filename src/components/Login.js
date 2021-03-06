import React from 'react'
import {connect} from 'react-redux';
import {sendingCred} from '../actions'

class Login extends React.Component {
    constructor(){
        super();

        this.state = {
            credentials: {
                "email": "",
                "password": "",
            }
        }

        this.handleChange = e => {
            this.setState({
                credentials: {
                    ...this.state.credentials, 
                    [e.target.name]: e.target.value
                }
            })
        }

    }

    sendingCred = (e) => {
        e.preventDefault();

        this.props.sendingCred(this.state.credentials)
        .then(() => {
            this.props.history.push('/sleep')
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className='loginContainer'>
                <h2>Log in</h2>
                <form onSubmit ={(e) => this.sendingCred(e)} className='loginForm'>
                    <h4>Email</h4>
                    <input
                        type='text'
                        name="email"
                        placeholder="email"
                        value={this.state.credentials.email}
                        onChange ={(e) => this.handleChange(e)}

                    />

                    <h4>Password</h4>
                    <input
                        type='password'
                        name="password"
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange ={(e) => this.handleChange(e)}
                    />

                    <button className='loginButton'>Login</button>
                </form>

                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return({
      ...state,
  
    })
  }
  
  export default connect(mapStateToProps, {sendingCred,})(Login);
  