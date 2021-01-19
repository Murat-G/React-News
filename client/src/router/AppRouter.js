import React from 'react'
import Home from '../pages/home/Home'
import Search from '../pages/search/Search'
import Headers from '../components/headers/Headers'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function AppRouter() {
    return (
        
            <Router>
                <Headers />
                <Switch>
                    <Route exact path="/search"  component={Search} />
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
    )
}

export default AppRouter
