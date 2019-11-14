import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';

import ContentNotFound from '../shared/elements/contentNotFound';

import NewsListView from './listView';
import NewsDetailView from './detailView';
import mockData from './mockData';

function News(props) {
    const [ news ] = useState(mockData);
    const showDetail = !!props.slug;

    function renderDetail() {
        const currentNewsItem = news.find(i => i.slug === props.slug);

        if (!currentNewsItem) {
            return <ContentNotFound />;
        }

        return <NewsDetailView news={currentNewsItem} />;
    }

    function renderList() {
        return <NewsListView news={news} {...props} />;
    }

    return (
        <Container className="content">
            {showDetail ?
                renderDetail() :
                renderList()}
        </Container>
    );
}

export {
    News as default,
};
