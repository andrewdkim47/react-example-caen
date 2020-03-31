import React, {Component } from 'react';
import io from 'socket.io-client'

// http://my ip4 num:server port
const socketUrl = "http://192.168.2.13:3231"
export default class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket:null,
            message: "Hello world!"
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

    handleQuery(event) {
        event.preventDefault();
        const new_str = event.target.value + " yeeee boiiiiiiii";
        this.setState({message: new_str})
    }

    render() {
        const { title } = this.props
        return (
            <div className="container">
                {title} says: {this.state.message}
                <div className= "centerizer">
                    <input type="text" onChange={this.handleQuery} className="entrybar"/>
                </div>
            </div>
        );
    }
}