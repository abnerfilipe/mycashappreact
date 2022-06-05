import "./App.css";
import {RoutesLinks} from "./RoutesLinks";
import React, { Component } from 'react';
import API from './api';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        username: null,
        password: null,
        userId: null,
        isLoggedIn: false,
        token: null,
        balance: (0).toFixed(2),
        transactions: [],
    }     
  }
  registrar = (username, password) =>{
      API.post('/users/register',{
        "username": username,
        "password": password,
      }).then((res)=>{
        alert("Conta registrada!");
        // this.setState({username: res.data.username,password: res.data.password,user_id: res.data.id});
      }).catch((err)=>{
        alert(err);

        throw new Error(err);
      })
      
  }
  logar = (username, password) =>{
    API.post('/users/login',{
      "username": username,
      "password": password,
    }).then((res)=>{
      this.setState({
        isLoggedIn: true, 
        username: res.data.username,
        password: res.data.password,
        userId: res.data.user.id,
        token: res.data.token,
      });
    }).catch((err)=>{
      alert(err);
      throw new Error(err);
    })
    // if(username === this.state.username) {
    //   if(password === this.state.password){
    //     this.setState({isLoggedIn: true});
    //   }else{
    //     throw new Error("Senha incorreta");
    //   }
    // }else{
    //   throw new Error("E-mail incorreto");
    // }
  }
  addTransaction = (transaction) => {
    this.setState({
      transactions: [...this.state.transactions,transaction]
    });
    console.log(transaction.value);
    this.updateBalance(transaction.value);
  }
  updateBalance =() => {
    API.post(`/transaction/user/${this.state.userId}/balance`,{date: new Date()}).then((res)=>{
      const value = res.data.balance;
      console.log(value);
      // const updated = parseFloat(this.state.balance) + parseFloat(value);
      const updated = parseFloat(value);
      this.setState({balance: updated.toFixed(2)})
    }).catch((error)=>{
      alert(error);
    })
  }


  render(){
    return (
      <div className="container" style={{height: "80vh"}} >
            <RoutesLinks 
              registrar={this.registrar} 
              logar={this.logar} 
              isLoggedIn={this.state.isLoggedIn}
              userId={this.state.userId}
              token={this.state.token}
              balance={this.state.balance}
              transactions={this.state.transactions}
              addTransaction={this.addTransaction}
              updateBalance={this.updateBalance}
            />
      </div>
    );
  }
}

