import React from 'react'
import Home from '../pages/home/Home'
import Arama from '../pages/arama/Arama'
import Headers from '../components/headers/Headers'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function AppRouter() {
    return (
        
            <Router>
                <Headers />
                <Switch>
                    <Route exact path="/arama"  component={Arama} />
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
    )
}

export default AppRouter
