import React, { Component } from 'react';
import './paymentReceive.style.css';
import { Navigate } from "react-router-dom";
import BackButton from '../shared/backButton/backButton.component';
import API from '../../../api';


export default class PaymentReceive extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            sended: false,
            description: null,
        }
    }
    onChangeAmount = (e) => {
        this.setState({ value: e.target.value });
    }
    onChangeDescription = (e)=> {
        this.setState({description: e.target.value});
    }
    onSumitPayment = () => {
        const transaction = { 
            value: this.state.value, 
            type: 'r' ,
            status: "1",
            description: this.state.description,
            user: `${this.props.userId}`
        };
        API.post('/transaction',transaction).then((res)=>{
            this.props.addTransaction(res.data.transaction);
            this.setState({ sended: true });
        })
       
    }
    render() {
        return (
            <div className='container'>
                { this.state.sended && (<Navigate to="/app" replace={ true } />) }
                { this.props.isLoggedIn == false && (<Navigate to="/" replace={ true } />) }

                <BackButton/>

                <div className='row'>
                    <h4 >Total Balance: <span>R$ { this.props.balance }</span></h4>
                </div>
                <div className='row mt-3'>
                    <h5>Receber Pagamento</h5>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-7 mb-5'>
                        <div class="form-group">
                        <label for="">Description</label>
                        <textarea class="form-control"  onChange={ this.onChangeDescription } name="" id="" rows="1">{this.state.description}</textarea>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            {/* <label for="value" className="form-label">Amount</label> */ }
                            <input type="number" className="form-control" min='0' step="0.01"
                                value={ this.state.value } onChange={ this.onChangeAmount } />
                        </div>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-primary " type="button" onClick={ this.onSumitPayment }>Enviar</button>
                    </div>
                </div>
            </div>
        )
    }
}

