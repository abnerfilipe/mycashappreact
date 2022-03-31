import "./App.css";
import {RoutesLinks} from "./RoutesLinks";
import React, { Component } from 'react';


export default class App extends Component{
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
  render(){
    return (
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="col-8 mx-auto">
            <RoutesLinks metodo={this.alterar}/>
          </div>
        </div>
      </div>
    );
  }
}

