import React, { useState } from 'react';

import { Container } from 'semantic-ui-react';

import NewsListView from './listView';
import NewsDetailView from './detailView';
import NotFound from '../notFound';
import mockData from './mockData';

function News(props) {
    const [ news ] = useState(mockData);

    if (props.slug !== undefined) {
        const currentNewsItem = news.find(x => x.slug === props.slug);

        // as long as content exists...
        if (currentNewsItem !== undefined) {
            return (
                <Container className="content" textAlign="justified">
                    <NewsDetailView content={currentNewsItem} />
                </Container>
            );
        }

        return (
            <Container className="content" textAlign="justified">
                <NotFound />
            </Container>
        );
    }

    return (
        <Container className="content" textAlign="justified">
            <NewsListView news={news} {...props} />
        </Container>
    );
}

export {
    News as default,
};
