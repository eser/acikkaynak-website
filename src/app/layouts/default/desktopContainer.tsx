import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Button, Responsive, Visibility, Segment, Menu } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import getWidth from './getWidth';

import layoutStyles from './assets/styles.scss';

function DesktopContainer(props) {
    const [ fixed, setFixed ] = useState(false);

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility once={false} onBottomPassed={() => setFixed(true)} onBottomPassedReverse={() => setFixed(false)}>
                <Segment inverted textAlign="center" vertical className={layoutStyles.header}>
                    <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
                        <Container>
                            <Menu.Item as={NavLink} to="/" exact>Haberler</Menu.Item>
                            <Menu.Item as={NavLink} to="/learn/">Eğitim</Menu.Item>
                            <Menu.Item as={NavLink} to="/projects/">Projeler</Menu.Item>
                            <Menu.Item as={NavLink} to="/organizations/">Organizasyonlar</Menu.Item>
                            <Menu.Item as={NavLink} to="/sponsors/">Sponsorlar</Menu.Item>
                            <Menu.Item as={NavLink} to="/stats/">İstatistikler</Menu.Item>
                            <Menu.Item as={NavLink} to="/about/">Hakkımızda</Menu.Item>

                            <Menu.Item position="right">
                                <Button as="a" href="https://github.com/login/oauth/authorize?client_id=0667f3575c3a5df778a4&redirect_uri=https%3A%2F%2Fapi.acikkaynak.info%2Fauth%2FgithubCallback&scope=public_repo%20read%3Aorg%20user&response_type=code&state=" inverted={!fixed} primary={fixed}>
                                    <FontAwesomeIcon icon={faGithub} />
                                    {' '}
                                    GitHub ile Giriş
                                </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                </Segment>
            </Visibility>

            {props.children}
        </Responsive>
    );
}

export {
    DesktopContainer as default,
};
