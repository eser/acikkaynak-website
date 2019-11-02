import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Divider, Grid, Header, Image, Segment, Icon, Card } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faGraduationCap, faListOl, faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGithubSquare, faTwitterSquare, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons';

import Logo from './logo.svg';
import OpenSource from './open-source.svg';
import Statistics from './statistics.svg';
import localStyles from './styles.less';
// import globalStyles from '../../layouts/shared/assets/global.less';

function Home() {
    return (
        <>
            <Segment inverted className={localStyles.heroSegment} vertical>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column computer={16} largeScreen={10} widescreen={10}>
                            {/* <Header
                                as="h1"
                                content="{ açık kaynak }"
                                inverted
                            /> */}
                            <Image size="medium" src={Logo} />
                            <Header
                                as="h2"
                                inverted
                            >
                                2015'den bu yana açık kaynak farkındalığı
                                oluşturuyor, projelerimizi listeliyor ve
                                yardımlaşıyoruz
                            </Header>
                            <Button primary as={Link} to="/about/" size="large">
                                Manifesto ve Bilgilendirme
                                <Icon name="right arrow" />
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={6} only="large screen" floated="right">
                            <Image size="large" src={OpenSource} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className={localStyles.asymClip}>
                <polygon fill="white" points="0,100 100,0 100,100" />
            </svg>

            <Segment className={localStyles.infoSegment} vertical>
                <Grid container stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column computer={16} largeScreen={10} widescreen={10}>
                            <Header as="h3">
                                Yerel Hareket Eden Bir Ekosistem
                            </Header>
                            <p className="justified">
                                Türkiye'deki ve Türkçe konuşan geliştiricilerin
                                oluşturduğu açık kaynak ekosisteminin
                                lokomotifi olmak, insanları açık kaynak geliştirmeye
                                motive etmek, farkındalık yaratmak ve engelleri ortadan
                                kaldırmayı amaçlıyoruz.
                            </p>

                            <Header as="h3">
                                Potansiyel Oluşturmak ve Görünür Kılmak
                            </Header>
                            <p>
                                Amacımız hem mevcut açık kaynak projeler ile bir katalog
                                oluşturarak projelere ulaşılabilirlik sağlamak,
                                hem de açık kaynak felsefesini çeşitli desteklerle
                                yaygınlaştırmak için rehberlik etmek.
                            </p>
                        </Grid.Column>
                        <Grid.Column width={6} only="large screen" floated="right" textAlign="center">
                            <Image size="huge" src={Statistics} />

                            <Button as={Link} to="/stats/" size="large">İstatistikler</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment className={localStyles.projectsSegment} vertical>
                <Grid celled="internally" columns="equal" stackable>
                    <Grid.Row textAlign="center">
                        <Grid.Column className={localStyles.gridContent}>
                            <Header as="h3">
                                Restoran Uygulaması
                            </Header>
                            <p>
                                Restoranlarda kağıt menü devrini kapatan onun yerine
                                müşterilere, masalarda bulunan QR Kod ile sipariş
                                verebilme olanağı sağlayan ve siparişin takibini
                                kolaylaştıran android uygulama.
                            </p>
                            <p>
                                <a href="https://github.com/yusufcakal/RestaurantApp">
                                    <FontAwesomeIcon icon={faGithub} />
                                    { ' ' }
                                    github/yusufcakal/RestaurantApp
                                </a>
                            </p>
                        </Grid.Column>
                        <Grid.Column className={localStyles.gridContent}>
                            <Header as="h3">
                                WholeCMS
                            </Header>
                            <p>
                                PHP/Laravel kullanılarak hazırlanmış, içerik yönetim
                                sistemi. Sınırsızca genişletebileceğiniz bağımlılıkları
                                olmadan oluşturacağınız modüllerinizi dahil edip içerik
                                yönetim sisteminden daha fazlasını elde edebilirsiniz.
                                İstediğiniz temaya entegre ederek kolayca
                                kullanabileceğiniz bir sistem.
                            </p>
                            <p>
                                <a href="https://github.com/wholecms/core">
                                    <FontAwesomeIcon icon={faGithub} />
                                    { ' ' }
                                    github/wholecms
                                </a>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment className={localStyles.pagesSegment} vertical>
                <Grid container stackable>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">
                                {/* <Link to="/news/"> */}
                                <Link to="/">
                                    <FontAwesomeIcon icon={faNewspaper} />
                                    { ' ' }
                                    Haberler
                                </Link>
                            </Header>
                            <p>
                                Açık Kaynak projelerden ve açık kaynak destekçisi
                                organizasyonlardan haberler paylaşarak komünite
                                içerisinde geniş bir ağ oluşmasına katkıda
                                bulunmak istiyoruz.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={8}>
                            <Header as="h3">
                                <Link to="/lists/">
                                    <FontAwesomeIcon icon={faListOl} />
                                    { ' ' }
                                    Listeler
                                </Link>
                            </Header>
                            <p>
                                <Link to="/lists/projects/">Açık kaynak projeler</Link>
                                ,
                                { ' ' }
                                <Link to="/lists/organizations/">Açık kaynak destekçisi organizasyonlar</Link>
                                { ' ' }
                                ve
                                { ' ' }
                                <Link to="/lists/sponsors/">Sponsorlar</Link>
                                ı indeksleyerek bu girişimlerin hem görünürlüklerini
                                sağlamaya hem de dışarıdan erişilebilirliğini
                                arttırmaya çalışıyoruz.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as="h3">
                                <Link to="/learn/">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                    { ' ' }
                                    Eğitim ve İçerikler
                                </Link>
                            </Header>
                            <p>
                                Açık Kaynak geliştirme yapmak isteyen kişi ve kuruluşlara
                                ilk adımlarını atmaları ve ilerlemeleri için destek olmaya
                                çalışıyoruz. Bu doğrultuda eğitim bölümü altında
                                { ' ' }
                                <Link to="/learn/get-started/">Başlarken</Link>
                                ,
                                { ' ' }
                                <Link to="/learn/for-corporations/">Kurumlar İçin</Link>
                                { ' ' }
                                ve devamında
                                { ' ' }
                                <Link to="/learn/guide/">Rehber</Link>
                                { ' ' }
                                bölümlerimiz yer almakta ve her geçen gün içeriğimizi
                                genişletmekteyiz.
                            </p>
                        </Grid.Column>
                        <Grid.Column floated="right" width={8}>
                            <Header as="h3">
                                <Link to="/stats/">
                                    <FontAwesomeIcon icon={faStar} />
                                    { ' ' }
                                    İstatistikler
                                </Link>
                            </Header>
                            <p>
                                Komünitenin açık kaynak'a gerçekleştirdiği katkıyı görünür
                                kılmak için, sistemimize GitHub hesabı ile giriş yapmış
                                kullanıcıların bilgilerini kısa aralıklarla derliyor ve
                                paylaşıyoruz.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment className={localStyles.socialSegment} vertical>
                <Divider
                    as="h4"
                    horizontal
                    className={localStyles.withDiv}
                >
                    İLETİŞİM KANALLARIMIZ
                </Divider>

                <Card.Group centered>
                    <Card as="a" aria-label="GitHub" href="https://github.com/acikkaynak">
                        <Card.Content>
                            <span className={localStyles.cardIcon}><FontAwesomeIcon size="2x" icon={faGithubSquare} /></span>
                            <Card.Header>GitHub</Card.Header>
                            <Card.Meta>github/acikkaynak</Card.Meta>
                        </Card.Content>
                    </Card>

                    <Card as="a" aria-label="Twitter" href="https://twitter.com/acikkaynakinfo">
                        <Card.Content>
                            <span className={localStyles.cardIcon}><FontAwesomeIcon size="2x" icon={faTwitterSquare} /></span>
                            <Card.Header>Twitter</Card.Header>
                            <Card.Meta>@acikkaynakinfo</Card.Meta>
                        </Card.Content>
                    </Card>

                    <Card as="a" aria-label="Telegram" href="https://t.me/acikkaynak">
                        <Card.Content>
                            <span className={localStyles.cardIcon}><FontAwesomeIcon size="2x" icon={faTelegram} /></span>
                            <Card.Header>Telegram</Card.Header>
                            <Card.Meta>t.me/acikkaynak</Card.Meta>
                        </Card.Content>
                    </Card>

                    <Card as="a" aria-label="Discord" href="https://discordapp.com/invite/BRtenzs">
                        <Card.Content>
                            <span className={localStyles.cardIcon}><FontAwesomeIcon size="2x" icon={faDiscord} /></span>
                            <Card.Header>Discord</Card.Header>
                            <Card.Meta>discord/BRtenzs</Card.Meta>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>
        </>
    );
}

export {
    Home as default,
};
