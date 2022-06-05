/* eslint-disable react-hooks/rules-of-hooks */

import { Component , useState, useEffect} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import API from '../../../../api';
import BackButton from '../../shared/backButton/backButton.component';

const EditTransaction = (props) => {
    let { id } = useParams();

    // const state = {
    //     transactionId: id,
    //     userId: props.userId,
    //     type: null,
    //     value: null,
    //     status: null,
    //     description: null,
    //     sended: false,
    // }
    const [type, setType] = useState(null);
    const [value, setValue] = useState(null);
    const [status, setStatus] = useState(null);
    const [description, setDescription] = useState(null);
    const [sended, setsended] = useState(false);

    useEffect(()=>{
        API.get(`/transaction/${id}`).then((res)=>{
            // this.transaction = {
            //     type: res.data.type,
            //     value: res.data.value,
            //     status: res.data.status,
            //     description: res.data.description,
            // };
            setType(res.data.type);
            setValue(res.data.value);
            setStatus(res.data.status);
            setDescription(res.data.description);

        }).catch((error)=>{
            alert(error);
            this.setState({sended: true});
        })
    },[])
    function onChangeAmount(e){
        // this.setState({ value: e.target.value });
        setValue(e.target.value)
    }
    function onChangeDescription(e){
        // this.setState({description: e.target.value});
        setDescription(e.target.value)
    }
    function updateTransaction(){
        const transaction = { 
            value: value, 
            type: type ,
            status: status,
            description: description,
        };

        API.patch(`/transaction/${id}/user/${props.userId}`,transaction)
        .then((res)=>{
            // this.setState({ sended: true });
            setsended(true)
        }).catch((error)=>{
            alert(error);
            setsended(true);
        })
    }
    return (
            <div className='container'>
                { sended && (<Navigate to="/app" replace={ true } />) }
                { props.isLoggedIn === false && (<Navigate to="/" replace={ true } />) }

                <BackButton/>
                <div className='row mt-3'>
                    <h5>Alterar Transaçāo</h5>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-7 mb-5'>
                        <div className="form-group">
                        <label for="">Description</label>
                        <textarea className="form-control" 
                        value={description}
                        onChange={(e) => setDescription(e.currentTarget.value) } name="" id="" rows="1"></textarea>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group'>
                            {/* <label for="value" className="form-label">Amount</label> */ }
                            <input type="number" className="form-control" min='0' step="0.01"
                                value={ value } onChange={ onChangeAmount } />
                        </div>
                    </div>
                    <div className='col-1'>
                        <button className="btn btn-primary " type="button" onClick={ updateTransaction }>Enviar</button>
                    </div>
                </div>
            </div>
        )
}

export default EditTransaction;