import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Grid, Image, Header } from 'semantic-ui-react';

import newsStyle from './style.less';

function NewsListView(props) {
    function renderNews(item, primary = false) {
        const columnCount = primary ? 2 : 1;
        const headerAs = primary ? 'h2' : 'h3';

        return (
            <Grid stackable columns={columnCount} className={newsStyle.newsGrid}>
                <Grid.Row verticalAlign="top">
                    <Grid.Column>
                        <Image src={item.imageUrl} />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as={headerAs} className={newsStyle.newsTitle}>
                            {item.subject}
                        </Header>
                        <p className={newsStyle.newsDescription}>
                            <ReactMarkdown source={item.content} />
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    const news = props.datasource.Genel;

    return (
        <section className={newsStyle.newsContent}>
            <Grid container stackable columns="equal">
                <Grid.Row>
                    <Grid.Column>
                        {renderNews(news.pop(), true)}
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
    );
}

export {
    NewsListView as default,
};
