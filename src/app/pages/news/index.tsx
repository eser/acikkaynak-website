import React, { useState } from 'react';

import NewsListView from './listView';
import NewsDetailView from './detailView';
import NotFound from '../notFound';
import mockData from './mockData';

function News(props) {
    const [ news ] = useState(mockData);
    const showDetail = !!props.slug;

    function renderDetail() {
        const currentNewsItem = news.find(i => i.slug === props.slug);

        if (!currentNewsItem) {
            return <NotFound />;
        }

        return <NewsDetailView news={currentNewsItem} />;
    }

    function renderList() {
        return <NewsListView news={news} {...props} />;
    }

    return (
        <>
            {showDetail ?
                renderDetail() :
                renderList()}
        </>
    );
}

export {
    News as default,
};
