import React from 'react'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../pages/home/Home'
import Search from '../pages/search/Search'
import Gündem from '../pages/gündem/Gündem'
import Headers from '../components/headers/Headers'


function AppRouter() {
    return (
        
            <Router>
                <Headers />
                <Switch>
                    <Route exact path="/kategori/gündem" component={Gündem} />
                    <Route exact path="/search"  component={Search} />
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
    )
}

export default AppRouter
