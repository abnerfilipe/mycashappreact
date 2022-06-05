
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./componentes/core/mainPage/mainPage.component";
import Login from "./componentes/auth/login/login.component";
import Register from "./componentes/auth/register/register.component";
import PaymentSend from "./componentes/core/paymentSend/paymentSend.component";
import PaymentReceive from "./componentes/core/paymentReceive/paymentReceive.component";
import Transactions from "./componentes/core/transactions/transactions.component";
import EditTransaction from "./componentes/core/transactions/edit/editTransaction.component";

// const loggedIn = true;
const RoutesLinks = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login logar={ props.logar } isLoggedIn={ props.isLoggedIn } /> } />
                <Route path="/register" element={ <Register registrar={ props.registrar } /> } />
                <Route path="/app" element={ <MainPage isLoggedIn={ props.isLoggedIn } userId={ props.userId } balance={ props.balance } updateBalance={ props.updateBalance }/> } />
                <Route path="/app/payment/send" element={ <PaymentSend isLoggedIn={ props.isLoggedIn } userId={ props.userId } addTransaction={ props.addTransaction } balance={ props.balance } /> } />
                <Route path="/app/payment/receive" element={ <PaymentReceive isLoggedIn={ props.isLoggedIn } userId={ props.userId } addTransaction={ props.addTransaction } balance={ props.balance } /> } />
                <Route path="/app/transactions/list" element={ <Transactions isLoggedIn={ props.isLoggedIn } userId={ props.userId } transactions={ props.transactions } /> } />
                <Route path="/app/transactions/edit/:id" element={ <EditTransaction isLoggedIn={ props.isLoggedIn } userId={ props.userId } transactions={ props.transactions } /> } />
            </Routes>
        </BrowserRouter>
    )
}
const linksDictionary = {
    paymentSend: "/app/payment/send",
    paymentReceive: "/app/payment/receive",
    transactions: "/app/transactions/list",
    register: "/register",
    mainPage: "/app",
}

export { RoutesLinks, linksDictionary }; 