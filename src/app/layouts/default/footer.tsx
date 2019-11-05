import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Grid, Header, Image, List, Segment } from 'semantic-ui-react';

import layoutStyles from './assets/styles.less';
import Logo from '../../pages/home/logo.svg';

function Footer() {
    return (
        <Segment inverted vertical className={layoutStyles.footer}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row className="footer-row">
                        <Grid.Column width={7}>
                            <div className="footer-about">
                                <Image size="small" className="footer-logo" src={Logo} />
                                <p>
                                    &laquo;2015'den bu yana açık kaynak farkındalığı oluşturuyor,
                                    projelerimizi listeliyor ve yardımlaşıyoruz&raquo;
                                </p>
                                <p>
                                    Site içerisinde gördüğünüz içerikler
                                    {' '}
                                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                                        Creative Commons Attribution-NonCommercial-ShareAlike
                                        4.0 International License
                                    </a>
                                    {' '}
                                    ile lisanslanmıştır.
                                </p>
                                <p>
                                    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                                        <img
                                            alt="Creative Commons License"
                                            src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                                        />
                                    </a>
                                </p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={3} className="footer-menu">
                            <div>
                                <Header inverted as="h4" content="Bölümler" />
                                <List link inverted>
                                    <List.Item as={NavLink} to="/" exact>Ana Sayfa</List.Item>
                                    {/* <List.Item as={NavLink} to="/news/">Haberler</List.Item> */}
                                    <List.Item as={NavLink} to="/stats/">İstatistikler</List.Item>
                                    <List.Item as={NavLink} to="/about/">Hakkımızda</List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={3} className="footer-menu">
                            <div>
                                <Header inverted as="h4" content="Eğitim" />
                                <List link inverted>
                                    <List.Item as={NavLink} to="/learn/get-started/">Başlarken</List.Item>
                                    <List.Item as={NavLink} to="/learn/for-corporations/">Kurumlar İçin</List.Item>
                                    <List.Item as={NavLink} to="/learn/guide/">Rehber</List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={3} className="footer-menu">
                            <div>
                                <Header inverted as="h4" content="Listeler" />
                                <List link inverted>
                                    <List.Item as={NavLink} to="/lists/projects/">Projeler</List.Item>
                                    <List.Item as={NavLink} to="/lists/organizations/">Organizasyonlar</List.Item>
                                    <List.Item as={NavLink} to="/lists/sponsors/">Sponsorlar</List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    );
}

export {
    Footer as default,
};
