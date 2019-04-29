import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './layouts/default/layout';
import Home from './pages/home/home';
import News from './pages/news/News';
import About from './pages/about/about';
import NotFound from './pages/notFound/notFound';
import AddEvents from './pages/addEvents/AddEvents';

function App() {
    return (
        <Switch>
            {/* home */}
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            {/* news */}
            <Route path="/news/detail/:slug" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/:pageNumber" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/:pageNumber" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/" exact={true} strict={true} render={() => <Layout><News /></Layout>} />

            {/* about */}
            <Route path="/about/" exact={true} strict={true} render={() => <Layout><About /></Layout>} />

            <Route path="/addEvents/" exact={true} strict={true} render={() => <Layout><AddEvents /></Layout>} />
            {/* not found */}
            <Route render={() => <NotFound />} />
        </Switch>
    );
}

export {
    App as default,
};
