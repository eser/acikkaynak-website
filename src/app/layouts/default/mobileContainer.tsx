import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Button, Responsive, Segment, Menu, Sidebar, Icon } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import getWidth from './getWidth';

import layoutStyles from './assets/styles.less';

function MobileContainer(props) {
    const [ sidebarOpened, setSidebarOpened ] = useState(false);

    return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar as={Menu} animation="push" inverted onHide={() => setSidebarOpened(false)} vertical visible={sidebarOpened}>
                <Menu.Item as={NavLink} to="/" exact>Ana Sayfa</Menu.Item>
                <Menu.Item as={NavLink} to="/news/">Haberler</Menu.Item>
                <Menu.Item>
                    <Menu.Header>Eğitim</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item as={NavLink} to="/learn/get-started/">Başlarken</Menu.Item>
                        <Menu.Item as={NavLink} to="/learn/for-corporations/">Kurumlar İçin</Menu.Item>
                        <Menu.Item as={NavLink} to="/learn/guide/">Rehber</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Listeler</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item as={NavLink} to="/lists/projects/">Projeler</Menu.Item>
                        <Menu.Item as={NavLink} to="/lists/organizations/">Organizasyonlar</Menu.Item>
                        <Menu.Item as={NavLink} to="/lists/sponsors/">Sponsorlar</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item as={NavLink} to="/stats/">İstatistikler</Menu.Item>
                <Menu.Item as={NavLink} to="/about/">Hakkımızda</Menu.Item>
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment inverted textAlign="center" vertical className={layoutStyles.header}>
                    <Container>
                        <Menu inverted pointing secondary size="large">
                            <Menu.Item onClick={() => setSidebarOpened(true)}>
                                <Icon name="sidebar" />
                            </Menu.Item>
                            <Menu.Item position="right">
                                <Button as="a" href="https://github.com/login/oauth/authorize?client_id=0667f3575c3a5df778a4&redirect_uri=https%3A%2F%2Fapi.acikkaynak.info%2Fauth%2FgithubCallback&scope=public_repo%20read%3Aorg%20user&response_type=code&state=" inverted>
                                    <FontAwesomeIcon icon={faGithub} />
                                    {' '}
                                    GitHub
                                </Button>
                            </Menu.Item>
                        </Menu>
                    </Container>
                </Segment>

                {props.children}
            </Sidebar.Pusher>
        </Responsive>
    );
}

export {
    MobileContainer as default,
};
