import React from 'react';

import { Grid, Image, Header, Button } from 'semantic-ui-react';

import newsStyle from './style.less';
import News from './news.svg';
import Balloons from './balloons.svg';

function NewsListView() {
    function renderNews(primary = false) {
        const columnCount = primary ? 2 : 1;
        const headerAs = primary ? 'h2' : 'h3';

        return (
            <Grid stackable columns={columnCount} verticalAlign="middle" className={newsStyle.newsGrid}>
                <Grid.Column>
                    <Image src="https://via.placeholder.com/500x400.png" centered />
                </Grid.Column>
                <Grid.Column>
                    <Header as={headerAs} className={newsStyle.newsTitle}>
                        3 Günlük Frontend’çiler Başımıza Dev-Ops Kesildi!
                    </Header>
                    <p className={newsStyle.newsDescription}>
                        Bunlarla baş etmesi gün geçtikçe zorlaşıyor. Olaylar bildiğiniz gibi değil.
                    </p>
                </Grid.Column>
            </Grid>
        );
    }

    return (
        <>
            <Grid container stackable columns={2} verticalAlign="middle" className="content">
                <Grid.Column>
                    <Header as="h1" className={newsStyle.headerTitle}>Haberler</Header>
                    <p className={newsStyle.headerParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button className={newsStyle.headerButton} size="tiny" content="Sen de Yazar Ol" primary />
                </Grid.Column>
                <Grid.Column>
                    <Image src={News} centered />
                </Grid.Column>
            </Grid>

            <section className={newsStyle.newsContent}>
                <Grid container stackable columns="equal">
                    <Grid.Row>
                        <Grid.Column>
                            {renderNews(true)}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
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
                    </Grid.Row>
                </Grid>
            </section>

            <Grid container stackable columns="2" verticalAlign="middle" className="content">
                <Grid.Column width="6">
                    <Image src={Balloons} centered />
                </Grid.Column>
                <Grid.Column width="10">
                    <Header as="h3" className={newsStyle.subscribeTitle}>Güncel Haberleri Takip Edin</Header>
                    <p className={newsStyle.subscribeDescription}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam.
                    </p>
                </Grid.Column>
            </Grid>
        </>
    );
}

export {
    NewsListView as default,
};
