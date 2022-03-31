
import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import MainPage from "./componentes/core/mainPage/mainPage.component";
import Login from "./componentes/auth/login/login.component";
import Register from "./componentes/auth/register/register.component";
import PaymentSend from "./componentes/core/paymentSend/paymentSend.component";
import PaymentReceive from "./componentes/core/paymentReceive/paymentReceive.component";
import Transactions from "./componentes/core/shared/transactions/transactions.component";

const loggedIn = true;
const RoutesLinks = (props) => {
   return(
    <Router>
        <Routes>
            <Route path="/" element={ <Login metodo={props.metodo} />}/>
            <Route path="/register" element={<Register metodo={props.metodo}/>} />
            <Route path="/app" element={<MainPage />}/>
            <Route path="/app/payment/send" element={<PaymentSend />}/>
            <Route path="/app/payment/receive" element={<PaymentReceive />}/>
            <Route path="/app/transactions/list" element={<Transactions />}/>
        </Routes>
    </Router>
   )
}
const linksDictionary = {
    paymentSend: "/app/payment/send",
    paymentReceive: "/app/payment/receive",
    transactions: "/app/transactions/list",
    register: "/register",
    mainPage: "/app",
}

export { RoutesLinks, linksDictionary}; 