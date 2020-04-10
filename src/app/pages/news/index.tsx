import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Grid, Button, Image, Header, Segment } from 'semantic-ui-react';

import ContentFetchError from '../shared/elements/contentFetchError';
import Loading from '../shared/elements/loading';
import ErrorBoundary from '../shared/errorBoundary';
import SuspenseCheck from '../shared/suspenseCheck';
import ListView from './listView';

import newsStyle from './style.less';
import NewsImage from './news.svg';
import BalloonsImage from './balloons.svg';

const dataSourceUrl = 'https://api.acik-kaynak.org/news';

async function getNewsFetch() {
    const response = await fetch(dataSourceUrl);
    const responseBody = await response.json();

    return responseBody;
}

function News() {
    const [ news, setNews ] = useState(null);

    useEffect(() => {
        async function newsFetch() {
            const newsResponse = await getNewsFetch();

            setNews(newsResponse);
        }

        newsFetch();
    }, []);

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

                        <Button primary as={Link} to="/news/add/" size="tiny">
                            Haber Ekle
                        </Button>
                    </Grid.Column>

                    <Grid.Column width={6} only="large screen" floated="right">
                        <Image size="large" src={NewsImage} centered />
                    </Grid.Column>
                </Grid>
            </Segment>

            <ErrorBoundary fallback={() => <ContentFetchError />}>
                <SuspenseCheck if={news} fallback={() => <Loading />}>
                    <ListView
                        datasource={news}
                    />
                </SuspenseCheck>
            </ErrorBoundary>

            <Grid container stackable columns="2" verticalAlign="middle" className="content">
                <Grid.Column width="6">
                    <Image src={BalloonsImage} centered />
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
    News as default,
};
