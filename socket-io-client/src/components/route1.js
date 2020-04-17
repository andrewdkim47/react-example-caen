/* global g_socket */
import React from 'react'
import GlobalSocket from '../GlobalSocket'
import { USER_CONNECTED } from '../Events'
import LoginForm from './LoginForm'


class Route1 extends React.Component {
  constructor(props) {
    super(props);
  }

  setUser = (user) => {
    g_socket.emit(USER_CONNECTED, user); //sent to server to add user
    this.setState({user})
    g_socket.on(USER_CONNECTED, (connectedUsers)=> {
        this.setState({loggedin: true})
        console.log(connectedUsers)
    })
  }

  render() {
    return (
      <div>
        <h1>HELLO FROM ROUTE 1</h1>
        <LoginForm setUser={this.setUser} />
      </div>
    );
  }
}

export default Route1