/* eslint-disable react-hooks/rules-of-hooks */
import { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from 'react-router-dom';
import API from '../../../api';
import BackButton from '../shared/backButton/backButton.component';
import Card from './card/card.component';

export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // date: new Date().toISOString().slice(0, 10),
            date: new Date(),
            transactions: [],
            loading: true,
        }
    }
    componentDidMount() {
        API.get(`/releases/list/user/${this.props.userId}/${this.state.date.toISOString().slice(0, 10)}`).then((res) => {
            this.setState({
                transactions: res.data.map((i)=> i.transaction),
                loading: false,
            })
        }).catch((error) => {
            alert(error);
        })
    }
    handleChange = (date) => {
        this.setState({ loading: true });
        API.get(`/releases/list/user/${this.props.userId}/${date.toISOString().slice(0, 10)}`).then((res) => {
            
            this.setState({
                transactions: res.data.map((i)=> i.transaction),
                date: date,
                loading: false,
            })

        }).catch((error) => {
            this.setState({
                transactions: [],
                date: date,
                loading: true,
            })
            alert(error);
        })

    };
    render() {
        return (
            <div>
                { !this.props.isLoggedIn && (<Navigate to="/" replace={ true } />) }
                <BackButton />
                <div className='container'>
                    <div className='mb-5'>
                        <h4>Transações </h4>
                        <div className='row'>
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={ this.state.date }
                                onChange={ (date) => this.handleChange(date) }
                            />
                        </div>

                        <div className='mt-3'>
                            <h6>Total: { this.state.transactions.length }</h6>
                        </div>
                    </div>
                    <div>

                        {
                            !this.state.loading
                                ? this.state.transactions.map((item,index) => {
                                    return <Card 
                                    key={index}
                                    value={ item.value } 
                                    description={item.description} 
                                    type={ item.type } 
                                    date={ item.updatedAt } 
                                    id={item.id}
                                    />
                                })
                                : <div class="spinner-border mt-5" role="status">
                                    <span class="sr-only"></span>
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

// {
//     "id": 7,
//     "operationType": "u",
//     "value": "15.50",
//     "createdAt": "2022-05-26T19:54:28.337Z",
//     "user": {
//       "id": 2,
//       "name": null,
//       "username": "filipe@email.com",
//       "status": "1",
//       "createdAt": "2022-05-26T06:47:32.096Z",
//       "updatedAt": "2022-05-26T06:47:32.096Z"
//     },
//     "transaction": {
//       "id": 4,
//       "type": "p",
//       "description": "ATUALIZADO",
//       "status": "1",
//       "value": "300.00",
//       "createdAt": "2022-05-26T03:29:45.964Z",
//       "updatedAt": "2022-05-26T21:30:47.703Z"
//     }
//   }
