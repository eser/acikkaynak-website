import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './layouts/default/layout';
import Home from './pages/home/home';
import News from './pages/news/news';
import AboutUs from './pages/aboutus/aboutus';
import NotFound from './pages/notFound/notFound';

function App() {
    return (
        <Switch>
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            <Route path="/news/" exact={true} strict={true} render={() => <Layout><News /></Layout>} />
            <Route path="/aboutus/" exact={true} strict={true} render={() => <Layout><AboutUs /></Layout>} />

            <Route render={() => <NotFound />} />
        </Switch>
    );
}

export {
    App as default,
};
