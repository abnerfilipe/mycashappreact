import React, { Component } from 'react';
import './login.style.css';
import { Navigate } from "react-router-dom";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
            loading: true,
        }     
    }
    onChangeUsername = (event) =>{
        this.setState({username: event.target.value});
    }
    onChangePassword = (event) =>{
        this.setState({password: event.target.value});
    }
    logarOnSubmit = () =>{
        console.log(this.props.isLoggedIn);
        try {
            this.props.logar(this.state.username,this.state.password);
        } catch (error) {
            console.log(error.message);
            this.setState({error: error.message});
        }
    }
    render(props) {
        return (
            <main className="form-signin">
                {this.props.isLoggedIn && (<Navigate to="/app" replace={true} />)}
                <form className='needs-validation'>
                        <h1 className="h1 mb-5 fw-bold">My Cash App</h1>
                        <h3 className="h5 mb-3 fw-light">Faça seu registro e realize o login com email e senha cadastrado</h3>


                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" onChange={this.onChangeUsername}  placeholder="name@example.com" />
                            <label for="floatingInput">E-mail</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" onChange={this.onChangePassword}  placeholder="Password" />
                            <label for="floatingPassword">Senha</label>
                            <div className='text-danger'>
                                {this.state.error && <span>{this.state.error}</span>}
                            </div>
                        </div>
                        
                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.logarOnSubmit}>
                            Logar
                            {/* {this.state.loading ? <span class="spinner-border spinner-border-sm p-1 mx-3" role="status" aria-hidden="true"></span> : null} */}
                         </button>

                        <a className="w-100 btn btn-lg btn-dark my-2" href='/register'>Registrar-se</a>
                        <p className="mt-5 mb-3 text-muted">Filipe Abner &copy; 2022</p>
                </form>
            </main>
        )
    }
}