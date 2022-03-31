import React, { Component } from 'react';
import './login.style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }     
    }
    alterar = (username, password) =>{
        this.setState({username: username,password: password});
    }

    render() {
        return (
            <main className="form-signin">
                <form  action="/app">
                        <h1 className="h1 mb-5 fw-bold">My Cash App</h1>
                        <h3 className="h5 mb-3 fw-light">please sign in</h3>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>

                        <a className="w-100 btn btn-lg btn-secondary my-2" href='/register'>Register</a>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        )
    }
}