import React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './layouts/default/layout';
import Home from './pages/home/index';
import News from './pages/news';
import NewsAdd from './pages/news/add';
import About from './pages/about/index';
import Events from './pages/events/index';
import EventsAdd from './pages/events/add';
import EventsEdit from './pages/events/edit';
import Organizations from './pages/organizations/index';
import OrgsAdd from './pages/organizations/add';
import OrgsEdit from './pages/organizations/edit';
import NotFound from './pages/notFound/index';


function App() {
    return (
        <Switch>
            {/* home */}
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            {/* news */}
            <Route path="/news/add/" exact={false} strict={true} render={() => <Layout><NewsAdd /></Layout>} />
            <Route path="/news/detail/:slug" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/:pageNumber" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/:pageNumber" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/" exact={true} strict={true} render={() => <Layout><News /></Layout>} />

            {/* events */}
            <Route path="/events/add/" exact={false} strict={true} render={() => <Layout><EventsAdd/></Layout>} />
            <Route path="/events/detail/:slug" exact={false} strict={true} render={(props) => <Layout><Events {...props.match.params} /></Layout>} />
            <Route path="/events/edit/:slug/:type" exact={false} strict={true} render={(props) => <Layout><Events {...props.match.params} /></Layout>} />
            <Route path="/events/" exact={true} strict={true} render={() => <Layout><Events /></Layout>} />

            {/* orgs */}
            <Route path="/orgs/add/" exact={false} strict={true} render={() => <Layout><OrgsAdd /></Layout>} />
            <Route path="/orgs/detail/:slug" exact={false} strict={true} render={(props) => <Layout><Organizations {...props.match.params} /></Layout>} />
            <Route path="/orgs/edit/:slug/:type" exact={false} strict={true} render={(props) => <Layout><Organizations {...props.match.params} /></Layout>} />
            <Route path="/orgs/" exact={true} strict={true} render={() => <Layout><Organizations /></Layout>} />

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
