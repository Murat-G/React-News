import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Search from '../pages/search/Search';
import Gündem from '../pages/gündem/Gündem';
import Skor from '../pages/skor/Skor';
import Dunya from '../pages/dünya/Dunya';
import Hayat from '../pages/hayat/Hayat';
import Headers from '../components/headers/Headers';


function AppRouter() {
    return (

        <Router>
            <Headers />
            <Switch>
                <Route exact path="/kategori/hayat" component={Hayat} />
                <Route exact path="/kategori/dunya" component={Dunya} />
                <Route exact path="/kategori/skor" component={Skor} />
                <Route exact path="/kategori/gündem" component={Gündem} />
                <Route exact path="/search" component={Search} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
