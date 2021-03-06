/* global g_socket */
import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Route1 from './components/route1'
import Route2 from './components/route2'
import GlobalSocket from './GlobalSocket'
import io from 'socket.io-client'

// INITIALIZE SINGLETON SOCKET
// http://my ip4 num:server port. need to update this: go to cmd and type in ipconfig
const socketUrl = "http://192.168.2.14:3231"
g_socket = io(socketUrl)
g_socket.on('connect', ()=> {
  console.log("Connecteddd");
})

// Pass in the socket to all routes
const App = props => (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Route 1</Link></li>
          <li><Link to='/route2'>Route 2</Link></li>
        </ul>
        <Route exact path='/' component={Route1} />
        <Route path='/route2' component={Route2} />
      </div>
    </Router>
)

export default App;

