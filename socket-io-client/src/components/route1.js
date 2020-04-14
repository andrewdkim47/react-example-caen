import React from 'react'
import GlobalSocket from '../GlobalSocket'
import { USER_CONNECTED } from '../Events'
import LoginForm from './LoginForm'


class Route1 extends React.Component {
  constructor(props) {
    super(props);
  }

  setUser = (user) => {
    this.props.socket.emit(USER_CONNECTED, user); //sent to server to add user
    this.setState({user})
    this.props.socket.on(USER_CONNECTED, (connectedUsers)=> {
        this.setState({loggedin: true})
        console.log(connectedUsers)
    })
  }

  render() {
    return (
      <GlobalSocket.Provider value={this.props.socket}>
        <h1>HELLO FROM ROUTE 1</h1>
        <LoginForm socket={this.props.socket} setUser={this.setUser} />
      </GlobalSocket.Provider>
    );
  }
}

// pass in socket props in class Route1
const Route1withSocket = props => (
  <GlobalSocket.Consumer>
    {socket => <Route1 {...props} socket={socket}/>}
  </GlobalSocket.Consumer>
)

export default Route1withSocket