import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API"

import withAuth from '../../components/Auth/withAuth'

class Admin extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      userData: []
    }
  }

  componentDidMount(){
    API.getAllUsers().then((res)=>{
      console.log(res.data.users)
      this.setState({
        loading: false,
        userData: res.data.users
      })
    })
  }

  handleInputChange = (event, i) => {
      let value = event.target.value;
      const name = event.target.name;

      let tempUsers = this.state.userData
      tempUsers[i][name] = value

      this.setState({
          userData: tempUsers
      });
  };

  handleSave = (event, i) => {
    console.log(this.state.userData[i])
    API.updateUser(this.state.userData[i]).then(function(res){
      console.log('update user has returned.')
      console.log(res.data)
    })
  }

  render(){
    if(this.state.loading){return (<h1 style={{alignText: 'center'}}>Loading...</h1>)}

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Users</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Username</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Provider</th>
                  <th scope="col">Authorization</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.userData.map((user, i)=>{
                  return(
                    <tr key={i}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.provider}</td>
                      <td><input type='number' interval='1' value={user.authorization} name='authorization' onChange={(e) => this.handleInputChange(e, i)}/></td>
                      <td><button className='btn btn-primary' onClick={(e) => this.handleSave(e, i)}>Save</button></td>
                    </tr>)
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default withAuth(Admin, 0);
