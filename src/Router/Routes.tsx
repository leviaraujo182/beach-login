import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LoginPage } from 'pages/LoginPage'
import { CreateAccount } from 'pages/CreateAccount'

export const Routes : React.FC = () => {
    return (
       <BrowserRouter>
            <Switch>
                <Route path="/" component={LoginPage} exact/>
                <Route path="/createaccount" component={CreateAccount} />
            </Switch>
       </BrowserRouter>
    )
}