import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import LoginBtn from "../../components/Auth/LoginBtn";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
import { Input, /*TextArea,*/ FormBtn } from "../../components/Form";


class LoginPage extends Component {

  state = {
    username: "",
    password: "",
    newUsername: "",
    newPassword: "",
    loginErrorMessage: "",
    createAccountErrorMessage: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('testing: ', event.target.dataset.form)
    if(event.target.dataset.form === 'login'){
      API.localLogin({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          if(res.data.result){
            this.props.history.push('/loggedin')
          } else {
            this.setState({
              loginErrorMessage: 'Username or password is incorrect'
            })
            console.log('unsuccessful log in')
          }
        })
        .catch(err => console.log(err));
    } else {
      API.createLocalAccount({
        username: this.state.newUsername,
        password: this.state.newPassword
      })
        .then(res => {
          this.setState({
            createAccountErrorMessage: res.data.result
          })
          console.log(res.data.result)
        })
        .catch(err => console.log(err))
    }
  };

  render(){
    return (
      <main>
        <section className="container">
          {//<LoginBtn type='google' />
          //<LoginBtn type='facebook' />
          }
          <Link className="nav-link" to="/admin" data-hover="Admin">Admin Users Adjustments</Link>
          <LoginBtn type='logout' />
        </section>
        <section className="container">
          <div className='loginForm'>
            <h1 className='jumbotron'>Login</h1>
            <form>
              <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Username (required)"
              />
              <Input
              type='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="Password (required)"
              />
              <div class='formSubmitContainer'>
                <FormBtn
                data-form="login"
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
                >
                Login
                </FormBtn>
                <span class='errorMessage' style={this.state.loginErrorMessage.length > 0 ? {'display': 'block'}:{'display': 'none'}}>{this.state.loginErrorMessage}</span>
              </div>
            </form>
          </div>
          <div className='loginForm'>
            <h1 className='jumbotron'>Create Account</h1>
            <form>
              <Input
              value={this.state.newUsername}
              onChange={this.handleInputChange}
              name="newUsername"
              placeholder="Username (required)"
              />
              <Input
              type='password'
              value={this.state.newPassword}
              onChange={this.handleInputChange}
              name="newPassword"
              placeholder="Password (required)"
              />
              <div class='formSubmitContainer'>
                <FormBtn
                data-form="create"
                disabled={!(this.state.newUsername && this.state.newPassword)}
                onClick={this.handleFormSubmit}
                >
                Create Account
                </FormBtn>
                <span class='errorMessage' style={this.state.createAccountErrorMessage.length > 0 ? {'display': 'block'}:{'display': 'none'}}>{this.state.createAccountErrorMessage}</span>
              </div>
            </form>
          </div>
        </section>
      </main>
    )
  }
}

export default LoginPage;
