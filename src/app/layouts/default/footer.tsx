import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

import layoutStyles from './assets/styles.less';

function Footer() {
    return (
        <Segment inverted vertical className={layoutStyles.footer}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as="h4" content="Bölümler" />
                            <List link inverted>
                                <List.Item as={NavLink} to="/" exact>Ana Sayfa</List.Item>
                                {/* <List.Item as={NavLink} to="/news/">Haberler</List.Item> */}
                                <List.Item as={NavLink} to="/stats/">İstatistikler</List.Item>
                                <List.Item as={NavLink} to="/about/">Hakkımızda</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as="h4" content="Eğitim" />
                            <List link inverted>
                                <List.Item as={NavLink} to="/learn/get-started/">Başlarken</List.Item>
                                <List.Item as={NavLink} to="/learn/for-corporations/">Kurumlar İçin</List.Item>
                                <List.Item as={NavLink} to="/learn/guide/">Rehber</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as="h4" content="Listeler" />
                            <List link inverted>
                                <List.Item as={NavLink} to="/lists/projects/">Projeler</List.Item>
                                <List.Item as={NavLink} to="/lists/organizations/">Organizasyonlar</List.Item>
                                <List.Item as={NavLink} to="/lists/sponsors/">Sponsorlar</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as="h4" inverted>
                                açık kaynak
                            </Header>
                            <p>
                                &laquo;2015'den bu yana açık kaynak farkındalığı oluşturuyor,
                                projelerimizi listeliyor ve yardımlaşıyoruz&raquo;
                            </p>
                            <p>
                                Site içerisinde gördüğünüz içerikler
                                { ' ' }
                                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>
                                { ' ' }
                                ile lisanslanmıştır.
                            </p>
                            <p>
                                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a>
                            </p>
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
