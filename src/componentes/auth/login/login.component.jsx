import React, { Component } from 'react';
import './login.style.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className="form-signin">
                <form>
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
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        )
    }
}