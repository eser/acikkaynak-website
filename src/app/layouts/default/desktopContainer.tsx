import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Button, Responsive, Visibility, Segment, Menu, Dropdown } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import getWidth from './getWidth';

import layoutStyles from './assets/styles.less';

function DesktopContainer(props) {
    const [ fixed, setFixed ] = useState(false);

    return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
                once={false}
                onBottomPassed={() => setFixed(true)}
                onBottomPassedReverse={() => setFixed(false)}
            >
                <Segment inverted textAlign="center" vertical className={layoutStyles.header}>
                    <Menu fixed={fixed ? 'top' : null} inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
                        <Container>
                            <Menu.Item as={NavLink} to="/" exact>/</Menu.Item>
                            <Menu.Item as={NavLink} to="/news/">Haberler</Menu.Item>

                            <Dropdown simple item text="Eğitim">
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/learn/get-started/">Başlarken</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/learn/contributing/">Katkı Sağlamak</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/learn/starting-new/">Yeni Proje Başlatmak</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/learn/for-corporations/">Kurumlar İçin</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as={NavLink} to="/learn/guide/">Rehber</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/learn/licenses/">Lisanslar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown simple item text="Listeler">
                                <Dropdown.Menu>
                                    <Dropdown.Item as={NavLink} to="/lists/projects/">Projeler</Dropdown.Item>
                                    <Dropdown.Item as={NavLink} to="/lists/project-ideas/">Proje Fikirleri</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as={NavLink} to="/lists/organizations/">Organizasyonlar</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Menu.Item as={NavLink} to="/stats/">İstatistikler</Menu.Item>
                            <Menu.Item as={NavLink} to="/about/">Hakkımızda</Menu.Item>
                            <Menu.Item as={NavLink} to="/support-us/">Bizi Destekle!</Menu.Item>

                            <Menu.Item position="right">
                                <Button as="a" href="https://github.com/login/oauth/authorize?client_id=0667f3575c3a5df778a4&redirect_uri=https%3A%2F%2Fapi.acik-kaynak.org%2Fauth%2FgithubCallback&scope=public_repo%20read%3Aorg%20user&response_type=code&state=" inverted={!fixed} primary={fixed}>
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
