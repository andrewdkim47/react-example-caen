import React, { Component } from 'react';
import { USER_CONNECTED } from '../Events'
//import io from 'socket.io-client'
import LoginForm from './LoginForm'
//import GlobalSocket from '../GlobalSocket'


class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket:null,
            message: "Hello world!",
            user:null,
            loggedin: false
        };
    }

    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user); //sent to server to add user
        this.setState({user})
        socket.on(USER_CONNECTED, (connectedUsers)=> {
            this.setState({loggedin: true})
            console.log(connectedUsers)
        })
    }

    /*
    logout = ()=> {
        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({user:null})
    }*/


    render() {
        const { socket } = this.state
        const { loggedin } = this.state
        const { user } = this.state
        let show;
        if (loggedin) {
            show = 
            <div>
                <h3>
                    LOGGED IN as {user.name}
                </h3>
                <h2> Server says: { this.state.message } </h2>
            </div>
        }
        else {
            show = 
            <div>
                <LoginForm socket={socket} setUser={this.setUser} />
            </div>
        }
        return (
            <div className="container">
                {show}                
            </div>
        );
    }
}

export default Layout