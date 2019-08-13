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
    newPassword: ""
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
      console.log('Login')
      API.localLogin({
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          console.log(res)
          if(res.data.result){
            this.props.history.push('/loggedin')
          } else {
            console.log('unsuccessful log in')
          }
        })
        .catch(err => console.log(err));
    } else {
      API.localAccountCreate({
        username: this.state.newUsername,
        password: this.state.newPassword
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
      console.log('Create the account!')
    }
    if (this.state.username && this.state.password) {

    }
  };

  render(){
    return (
      <main>
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
          <FormBtn
          data-form="login"
          disabled={!(this.state.username && this.state.password)}
          onClick={this.handleFormSubmit}
          >
          Login
          </FormBtn>
        </form>
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
          <FormBtn
          data-form="create"
          disabled={!(this.state.newUsername && this.state.newPassword)}
          onClick={this.handleFormSubmit}
          >
          Login
          </FormBtn>
        </form>
        <section className="container">
          <LoginBtn type='google' />
          <LoginBtn type='facebook' />
          <Link className="nav-link" to="/admin" data-hover="Admin">Admin Users Adjustments</Link>
          <LoginBtn type='logout' />
        </section>
      </main>
    )
  }
}

export default LoginPage;
