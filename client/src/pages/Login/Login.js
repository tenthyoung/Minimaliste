import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoginFormShowing: false,
            name: "",
            email: "",
            password: ""
            
        }
    }
    
    toggleLogin = () => {
        if (this.state.isLoginFormShowing === true) {
            this.setState({isLoginFormShowing: false});
        } else {
            this.setState({isLoginFormShowing: true});
        }
    }

    submitSignUp = evt => {
        evt.preventDefault();
        console.log(this.state)
        this.setState({ name: "", email: "", password: "" });
    }

    submitLogin = evt => {
        evt.preventDefault();
        console.log(this.state)
        this.setState({ email: "", password: "" });
        
    }
    
    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }


    render() {
        return (
            <div className="Login container">
                <div className="form-structor">
                    <div className={`signup ${this.state.isLoginFormShowing === true ? "slide-up" : ""}`}>
                        <h2 className="form-title" id="signup" onClick={this.toggleLogin}><span>or</span>Sign up</h2>
                        <form onSubmit={this.submitSignUp}>
                            <div className="form-holder">
                                <input
                                    id='name'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Name"
                                    type="text"
                                    className="input"
                                />
                                <input
                                    id='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    type="text"
                                    className="input"
                                />
                                <input
                                    id='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Password"
                                    type="text"
                                    className="input"
                                />
                            </div>
                            <button className="submit-btn">Sign up</button>
                        </form>
                    </div>
                    <div className={`login ${this.state.isLoginFormShowing === false ? "slide-up" : ""}`} >
                        <div className="center">
                            <h2 className="form-title" id="login" onClick={this.toggleLogin}><span>or</span>Log in</h2>
                            <form onSubmit={this.submitLogin}>
                                <div className="form-holder">
                                    <input
                                            id='email'
                                            name='email'
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            placeholder="Email"
                                            type="text"
                                            className="input"
                                        />
                                        <input
                                            id='password'
                                            name='password'
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            placeholder="Password"
                                            type="text"
                                            className="input"
                                        />
                                </div>
                                <button className="submit-btn">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Login;

