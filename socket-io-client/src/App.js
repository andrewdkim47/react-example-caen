import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Route1 from './components/route1'
import Route2 from './components/route2'
import Layout from './components/Layout'
import GlobalSocket from './GlobalSocket'
import io from 'socket.io-client'

// INITIALIZE SINGLETON SOCKET
// http://my ip4 num:server port
const socketUrl = "http://192.168.2.13:3231"
const g_socket = io(socketUrl)
g_socket.on('connect', ()=> {
  console.log("Connecteddd");
})

// Pass in the socket to all routes
const index = props => (
  <GlobalSocket.Provider value = {g_socket}>
    <Router>
        <Route exact path="/" component={ App } /> 
        <Route path="/Route1" component={ Route1 } />
        <Route path="/Route2" component={ Route2 } />
    </Router>
  </GlobalSocket.Provider>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/route1'>Route 1</Link></li>
            <li><Link to='/route2'>Route 2</Link></li>
          </ul>
          <Route exact path='/' component={Layout} />
          <Route path='/route1' component={Route1} />
          <Route path='/route2' component={Route2} />
        </div>
      </Router>
    )
  }
}
export default App;

