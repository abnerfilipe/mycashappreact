import React, { Component } from 'react';
import './mainPage.style.css';
import {linksDictionary}from '../../../RoutesLinks';

export default class MainPage extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='col-12'>
                <div className='row my-3'>
                    <a className='btn btn-primary' href={linksDictionary.paymentSend} >Send Payment</a> 
                </div>
                <div className='row my-3'>
                    <a className='btn btn-primary' href={linksDictionary.paymentReceive}>Receive Payment</a>
                </div>
                <div className='row my-3'>
                    <a className='btn btn-primary' href={linksDictionary.transactions}>Transactions</a>
                </div>
            </div>
        );
    }
}
