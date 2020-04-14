import React, { Component } from 'react';
import GlobalSocket from '../GlobalSocket'
import { VERIFY_USER } from '../Events'

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nickname:"",
            error:""
        };
    }

    setUser = ({user, isUser})=> {
        console.log(user, isUser);
        if(isUser) {
            this.setError("User name taken")
        } 
        else {
            this.props.setUser(user)
            this.setError("User name added!")
        }
    }

    handleSubmit = (e)=> {
        e.preventDefault();

        const { nickname } = this.state;
        this.props.socket.emit(VERIFY_USER, nickname, this.setUser);
    }

    handleChange = (e)=> {
        e.preventDefault();

        this.setState({nickname:e.target.value});
    }

    setError = (error)=> {
        this.setState({error})
    }

    render() {
        const {nickname, error} = this.state
        return (
            <div className="login">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label htmlFor="nickname">
                        <h2> Add a username to get started!</h2>    
                    </label>    
                    <input
                        ref={(input)=> {this.textInput=input}}
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={this.handleChange}
                        placeholder={'Type in a Unique Name!'}
                    />
                    <div className="error">{error ? error:null}</div>
                </form>
            </div>
        );
    }
}

// pass in socket props in class Route1
const LoginFormwithSocket = props => (
    <GlobalSocket.Consumer>
        {socket => <LoginForm {...props} socket={socket}/>}
    </GlobalSocket.Consumer>
)
  
  export default LoginFormwithSocket