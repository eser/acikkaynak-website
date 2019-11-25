import React from 'react';

import { Grid, Image, Header, Button, Segment } from 'semantic-ui-react';

import newsStyle from './style.less';
import News from './news.svg';
import Balloons from './balloons.svg';

function NewsListView() {
    function renderNews(primary = false) {
        const columnCount = primary ? 2 : 1;
        const headerAs = primary ? 'h2' : 'h3';

        return (
            <Grid stackable columns={columnCount} className={newsStyle.newsGrid}>
                <Grid.Row verticalAlign="top">
                    <Grid.Column>
                        <Image src="https://www.acikhack.com/wp-content/uploads/2019/11/aa.jpeg" />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as={headerAs} className={newsStyle.newsTitle}>
                            Açık Hack 30 Kasım'da Başlıyor!
                        </Header>
                        <p className={newsStyle.newsDescription}>
                            Türkiye Açık Kaynak Platformu, 30 Kasım – 1 Aralık tarihlerinde
                            Bilişim Vadisi’nde ilk AçıkHack etkinliğini düzenliyor. AçıkHack,
                            açık kaynak kodlu yazılımlara katkı sağlamak için Türkiye Açık
                            Kaynak Platformu’nun düzenlemeye başladığı hackathonların yeni
                            adresi olacak.
                            <br />
                            <br />
                            AçıkHack’te 300 yetenekli yazılımcı 24 Saat boyunca “Türkçe Dil
                            İşleme” üzerine uygulamalar geliştirerek yarışacaklar. Hedef,
                            “Türkçe Dil İşleme” konusunda teknoloji üretme ve geliştirme
                            becerilerinin arttırılması.
                            <br />
                            <br />
                            AçıkHack katılımcıları, etkinlik süresince hem yazılım
                            profesyonelleri ile tanışma fırsatı bulacak hem de ülkemizde
                            açık kaynak kodlu yazılımların kullanılmasına katkı sağlayacak.
                            <br />
                            <br />
                            18 yaşını doldurmuş herkesin başvuru yapabileceği yarışmaya,
                            ister kendi takımınızla isterseniz bireysel olarak
                            {' '}
                            <a href="https://www.acikhack.com/">
                                www.acikhack.com
                            </a>
                            {' '}
                            sayfasından başvurabilirsiniz.
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    return (
        <>
            <Segment vertical>
                <Grid container stackable verticalAlign="middle" className="content">
                    <Grid.Column computer={16} largeScreen={10} widescreen={10}>
                        <Header as="h1">Haberler</Header>

                        <p>
                            Açık kaynak projelerden ve açık kaynak destekçisi
                            organizasyonlardan haberler paylaşarak topluluk
                            içerisinde geniş bir ağ oluşmasına katkıda
                            bulunmak istiyoruz.
                        </p>

                        <Button size="tiny" primary>
                            Haber Ekle
                        </Button>
                    </Grid.Column>

                    <Grid.Column width={6} only="large screen" floated="right">
                        <Image size="large" src={News} centered />
                    </Grid.Column>
                </Grid>
            </Segment>

            <section className={newsStyle.newsContent}>
                <Grid container stackable columns="equal">
                    <Grid.Row>
                        <Grid.Column>
                            {renderNews(true)}
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row>
                        <Grid.Column>
                            {renderNews()}
                        </Grid.Column>
                        <Grid.Column>
                            {renderNews()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            {renderNews()}
                        </Grid.Column>
                        <Grid.Column>
                            {renderNews()}
                        </Grid.Column>
                        <Grid.Column>
                            {renderNews()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Button className={newsStyle.allNewsButton} content="Tüm Haberler" />
                    </Grid.Row> */}
                </Grid>
            </section>

            <Grid container stackable columns="2" verticalAlign="middle" className="content">
                <Grid.Column width="6">
                    <Image src={Balloons} centered />
                </Grid.Column>
                <Grid.Column width="10">
                    <Header as="h3" className={newsStyle.subscribeTitle}>Güncel Haberleri Takip Edin</Header>
                    <p className={newsStyle.subscribeDescription}>
                        Henüz detayları netleşmemiş olsa dahi, çok yakında buraya
                        eklenen haberleri e-mail, bildirim v.b. yollarla da
                        sizlere ulaştırmayı planlamaktayız. Güncellemelerimizi
                        takip edin.
                    </p>
                </Grid.Column>
            </Grid>
        </>
    );
}

export {
    NewsListView as default,
};
