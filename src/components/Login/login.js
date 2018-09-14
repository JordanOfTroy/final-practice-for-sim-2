import React, {Component} from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {userNameInput, passwordInput} from '../../ducks/reducer'
import axios from 'axios' 


class Login extends Component {

  handleClick () {
    axios.get(`/api/display`)
  }
 

  render () {
    let {getUserInfo, userNameInput, passwordInput, userName, password} = this.props
    return (
      <div>
        <h1>Login Page</h1>
        <div>
          <input
            onChange = {userNameInput()}
            value = {userName}
            name = 'userName'
            placeholder = 'Please enter Username'
            type="text"
          />
        </div>
        <div>
          <input
            onChange = {passwordInput()}
            value = {password}
            name = 'password' 
            placeholder = 'Please enter password'
            type="text"/>
        </div>
        <Link to = '/display'>
          <button
            onClick = {this.handleClick}
          >Login, my dude!</button>
        </Link>
        
      </div>
    )
  }
}

function mapStateToProps (state) {
  let {userName, password} = state

  return {
    userName,
    password
  }
}

export default connect(mapStateToProps, {userNameInput, passwordInput})(Login)
