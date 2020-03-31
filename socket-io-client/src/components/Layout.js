import React, {Component } from 'react';
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
            user:null
        };
        this.handleQuery = this.handleQuery.bind(this);
    }

    componentWillMount() {
        this.initSocket()
    }

    initSocket = ()=>{
        const socket = io(socketUrl)

        socket.on('connect', ()=> {
            console.log("Connected");
        })
        this.setState({socket})
    }

    setUser = (user) => {
        const { socket } = this.state
        socket.emit(USER_CONNECTED, user); //sent to server to add user
        this.setState({user})
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
        const {socket} = this.state
        return (
            <div className="container">
                <LoginForm socket = {socket} setUser={this.setUser} />
                {title} says: {this.state.message}
                <div className = "centerizer">
                    <input type="text" onChange={this.handleQuery} className="entrybar"/>
                </div>
            </div>
        );
    }
}