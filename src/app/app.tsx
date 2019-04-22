import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './layouts/default/layout';
import Home from './pages/home/home';
import News from './pages/news/news';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';

function App() {
    return (
        <Switch>
            {/* home */}
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            {/* news */}
            <Route path="/news/" exact={true} strict={true} render={() => <Layout><News /></Layout>} />
            <Route path="/news/tags/:tag" exact={false} strict={true} render={(props) => <Layout><News tag={props.match.params.tag} /></Layout>} />
            <Route path="/news/detail/:slug" exact={false} strict={true} render={(props) => <Layout><News slug={props.match.params.slug} /></Layout>} />

            {/* about */}
            <Route path="/about/" exact={true} strict={true} render={() => <Layout><About /></Layout>} />

            {/* not found */}
            <Route render={() => <NotFound />} />
        </Switch>
    );
}

export {
    App as default,
};
