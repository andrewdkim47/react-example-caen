import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Layout from './components/Layout'

class App extends Component {
  render() {

    return (
      <Layout title="Chat App"/>
    )
  }
}
export default App;