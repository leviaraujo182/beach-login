import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LoginPage } from 'pages/LoginPage'

export const Routes : React.FC = () => {
    return (
       <BrowserRouter>
            <Switch>
                <Route path="/" component={LoginPage} />
            </Switch>
       </BrowserRouter>
    )
}