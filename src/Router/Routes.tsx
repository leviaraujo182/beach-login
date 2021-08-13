import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { LoginPage } from 'pages/LoginPage'
import { CreateAccount } from 'pages/CreateAccount'
import { motion, AnimatePresence } from 'framer-motion'

export const Routes : React.FC = () => {
    return (
       <Router>
           <Route render={({ location }) => (
               <AnimatePresence exitBeforeEnter initial={false}>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={LoginPage} />
                    <Route exact path="/createaccount" component={CreateAccount} />
                </Switch>
               </AnimatePresence>
           )} />
       </Router>
    )
}