import React, { Component } from 'react';
import { USER_CONNECTED, LOGOUT } from '../Events'
import io from 'socket.io-client'
import LoginForm from './LoginForm'


// http://my ip4 num:server port
const socketUrl = "http://192.168.2.13:3231"
export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket:null,
            message: "Hello world!",
            user:null,
            loggedin: false
        };
        this.handleQuery = this.handleQuery.bind(this);
    }

    componentWillMount() {
        this.initSocket() 
    }

    initSocket = ()=>{
        const socket = io(socketUrl)

        socket.on('connect', ()=> {
            console.log("Connecteddd");
        })
        this.setState({socket}, ()=> {
            console.log(this.state);
        })
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

    logout = ()=> {
        const { socket } = this.state
        socket.emit(LOGOUT)
        this.setState({user:null})
    }

    handleQuery(event) {
        event.preventDefault();
        const new_str = event.target.value + " yeeee boiiiiiiii";
        this.setState({message: new_str})
    }

    render() {
        const { title } = this.props
        const { socket } = this.state
        const { loggedin } = this.state
        const { user } = this.state
        let show;
        if (loggedin) {
            show = 
            <div>
                <h3>
                    LOGGED IN as {user.name}
                    <div className="centerizer">
                        Say something to our server: 
                        <input type="text" onChange={this.handleQuery} className="entrybar"/>
                    </div>
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
                {title}
                {show}                
            </div>
        );
    }
}