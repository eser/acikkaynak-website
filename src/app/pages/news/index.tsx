import React, { useState } from 'react';

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
                <NewsDetailView content={currentNewsItem} />
            );
        }

        return (
            <NotFound />
        );
    }

    return (
        <NewsListView news={news} {...props} />
    );
}

export {
    News as default,
};
