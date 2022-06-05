import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const BackButton = (props) => {
    return (
        <div className="d-flex p-2">
            <Link to={ "/app" }>
                <button className="btn btn-dark " type="button">Voltar</button>
            </Link>
        </div>
    );
}   
export default BackButton;