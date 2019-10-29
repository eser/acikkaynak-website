import React from 'react';

import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

import ResponsiveContainer from './responsiveContainer';

import layoutStyles from './assets/styles.less';

function Layout(props) {
    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help

    return (
        <ResponsiveContainer>
            {props.children}

            <Segment inverted vertical className={layoutStyles.footer}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as="h4" content="About" />
                                <List link inverted>
                                    <List.Item as="a">Sitemap</List.Item>
                                    <List.Item as="a">Contact Us</List.Item>
                                    <List.Item as="a">Religious Ceremonies</List.Item>
                                    <List.Item as="a">Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as="h4" content="Services" />
                                <List link inverted>
                                    <List.Item as="a">Banana Pre-Order</List.Item>
                                    <List.Item as="a">DNA FAQ</List.Item>
                                    <List.Item as="a">How To Access</List.Item>
                                    <List.Item as="a">Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as="h4" inverted>
                                    Darty React Hooks App
                                </Header>
                                <p>
                                    Darty React Hooks App is a front-end development stack for
                                    starting with a structured, scaleable and adaptable
                                    basecode. Visit
                                    {' '}
                                    <a href="https://github.com/eserozvataf/darty-react-hooks-app">GitHub page</a>
                                    {' '}
                                    for details. Apache License, Version 2.0
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </ResponsiveContainer>
    );
}

export {
    Layout as default,
};
