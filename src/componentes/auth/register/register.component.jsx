import React, { Component } from 'react';
import './register.style.css';

export default class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }   
    onChangeUsername = (event) =>{
        this.setState({username: event.target.value});
    }
    onChangePassword = (event) =>{
        this.setState({password: event.target.value});
    }
    onSumbit = () =>{
        this.props.metodo(this.state.username,this.state.password);
    }
    render() {
        return (
            <main className="form-signin">
                <form onSubmit={this.onSumbit} action="/">
                        <h1 className="h1 mb-5 fw-bold">My Cash App</h1>
                        <h3 className="h5 mb-3 fw-light">please register your account</h3>

                        {/* <div className="form-floating">
                            <label for="floatingInput">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="John " />
                        </div>
                        <div className="form-floating">
                            <label for="floatingInput">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Doe " />
                        </div> */}
                        <div className="form-floating">
                            <label for="floatingInput">Email address</label>
                            <input type="email" className="form-control" onChange={this.onChangeUsername} id="email" placeholder="name@example.com" />
                        </div>
                        <div className="form-floating">
                            <label for="floatingPassword">Password</label>
                            <input type="password" className="form-control" onChange={this.onChangePassword} id="password" placeholder="Password" />
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
            </main>
        )
    }
}



