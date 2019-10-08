import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './layouts/default/layout';
import Home from './pages/home/index';
import News from './pages/news/index';
import NewsAdd from './pages/news/add';
import Learn from './pages/learn/index';
import Projects from './pages/projects/index';
import Organizations from './pages/organizations/index';
import OrganizationsAdd from './pages/organizations/add';
import OrganizationsEdit from './pages/organizations/edit';
import Events from './pages/events/index';
import EventsAdd from './pages/events/add';
import EventsEdit from './pages/events/edit';
import Sponsors from './pages/sponsors/index';
import Stats from './pages/stats/index';
import About from './pages/about/index';
import NotFound from './pages/notFound/index';

function App() {
    return (
        <Switch>
            {/* home */}
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            {/* news */}
            <Route path="/news/add/" exact={false} strict={true} render={() => <Layout><NewsAdd /></Layout>} />
            <Route path="/news/detail/:slug" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/:offset" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/:offset" exact={false} strict={true} render={(props) => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/" exact={true} strict={true} render={() => <Layout><News /></Layout>} />

            {/* learn */}
            <Route path="/learn/*" exact={false} strict={true} render={(props) => <Layout><Learn contentPath={props.match.params[0]} /></Layout>} />

            {/* projects */}
            <Route path="/projects/detail/:slug" exact={false} strict={true} render={(props) => <Layout><Projects {...props.match.params} /></Layout>} />
            <Route path="/projects/" exact={true} strict={true} render={() => <Layout><Projects /></Layout>} />

            {/* organizations */}
            <Route path="/organizations/add/" exact={false} strict={true} render={() => <Layout><OrganizationsAdd /></Layout>} />
            <Route path="/organizations/detail/:slug" exact={false} strict={true} render={(props) => <Layout><Organizations {...props.match.params} /></Layout>} />
            <Route path="/organizations/edit/:slug/:type" exact={false} strict={true} render={(props) => <Layout><Organizations {...props.match.params} /></Layout>} />
            <Route path="/organizations/" exact={true} strict={true} render={() => <Layout><Organizations /></Layout>} />

            {/* events */}
            <Route path="/events/add/" exact={false} strict={true} render={() => <Layout><EventsAdd/></Layout>} />
            <Route path="/events/detail/:slug" exact={false} strict={true} render={(props) => <Layout><Events {...props.match.params} /></Layout>} />
            <Route path="/events/edit/:slug/:type" exact={false} strict={true} render={(props) => <Layout><Events {...props.match.params} /></Layout>} />
            <Route path="/events/" exact={true} strict={true} render={() => <Layout><Events /></Layout>} />

            {/* sponsors */}
            <Route path="/sponsors/" exact={true} strict={true} render={() => <Layout><Sponsors /></Layout>} />

            {/* stats */}
            <Route path="/stats/" exact={true} strict={true} render={() => <Layout><Stats /></Layout>} />

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
