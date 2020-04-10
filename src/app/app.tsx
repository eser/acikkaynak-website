import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './layouts/default/index';
import Home from './pages/home/index';
import News from './pages/news/index';
import NewsAdd from './pages/news/add';
import Learn from './pages/learn/index';
import LearnGetStarted from './pages/learn/get-started/index';
import LearnContributing from './pages/learn/contributing/index';
import LearnStartingNew from './pages/learn/starting-new/index';
import LearnLicenses from './pages/learn/licenses/index';
import LearnForCorporations from './pages/learn/for-corporations/index';
import LearnGuide from './pages/learn/guide/index';
import Lists from './pages/lists/index';
import ListsProjects from './pages/lists/projects/index';
import ListsProjectIdeas from './pages/lists/project-ideas/index';
import ListsOrganizations from './pages/lists/organizations/index';
import Stats from './pages/stats/index';
import About from './pages/about/index';
import SupportUs from './pages/support-us/index';
import NotFound from './pages/notFound/index';

function App() {
    return (
        <Switch>
            {/* home */}
            <Route path="/" exact={true} strict={true} render={() => <Layout><Home /></Layout>} />

            {/* news */}
            <Route path="/news/add/" exact={false} strict={true} render={() => <Layout><NewsAdd /></Layout>} />
            <Route path="/news/detail/:slug" exact={false} strict={true} render={props => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/:offset" exact={false} strict={true} render={props => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/tags/:tag/" exact={false} strict={true} render={props => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/:offset" exact={false} strict={true} render={props => <Layout><News {...props.match.params} /></Layout>} />
            <Route path="/news/" exact={true} strict={true} render={() => <Layout><News /></Layout>} />

            {/* learn */}
            <Route path="/learn/get-started/" exact={true} strict={true} render={() => <Layout><LearnGetStarted /></Layout>} />
            <Route path="/learn/contributing/" exact={true} strict={true} render={() => <Layout><LearnContributing /></Layout>} />
            <Route path="/learn/starting-new/" exact={true} strict={true} render={() => <Layout><LearnStartingNew /></Layout>} />
            <Route path="/learn/for-corporations/" exact={true} strict={true} render={() => <Layout><LearnForCorporations /></Layout>} />
            <Route path="/learn/licenses/" exact={true} strict={true} render={() => <Layout><LearnLicenses /></Layout>} />
            <Route path="/learn/guide/*" exact={false} strict={true} render={props => <Layout><LearnGuide contentPath={props.match.params[0]} /></Layout>} />
            <Route path="/learn/" exact={true} strict={true} render={() => <Layout><Learn /></Layout>} />

            {/* lists/projects */}
            <Route path="/lists/projects/detail/:slug" exact={false} strict={true} render={props => <Layout><ListsProjects {...props.match.params} /></Layout>} />
            <Route path="/lists/projects/" exact={true} strict={true} render={() => <Layout><ListsProjects /></Layout>} />

            {/* lists/project-ideas */}
            <Route path="/lists/project-ideas/" exact={true} strict={true} render={() => <Layout><ListsProjectIdeas /></Layout>} />

            {/* lists/organizations */}
            <Route path="/lists/organizations/detail/:slug" exact={false} strict={true} render={props => <Layout><ListsOrganizations {...props.match.params} /></Layout>} />
            <Route path="/lists/organizations/" exact={true} strict={true} render={() => <Layout><ListsOrganizations /></Layout>} />

            {/* lists */}
            <Route path="/lists/" exact={true} strict={true} render={() => <Layout><Lists /></Layout>} />

            {/* stats */}
            <Route path="/stats/" exact={true} strict={true} render={() => <Layout><Stats /></Layout>} />

            {/* about */}
            <Route path="/about/" exact={true} strict={true} render={() => <Layout><About /></Layout>} />

            {/* support-us */}
            <Route path="/support-us/" exact={true} strict={true} render={() => <Layout><SupportUs /></Layout>} />

            {/* not found */}
            <Route render={() => <Layout><NotFound /></Layout>} />
        </Switch>
    );
}

export {
    App as default,
};
