import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Header } from 'semantic-ui-react';

import customNewsStyle from './style.less';

function NewsListView(props) {
    const [ newsPerPage ] = useState(2);

    const tags = props.news.reduce(
        (acc, cur) => [ ...acc, ...cur.tags.filter(x => !acc.includes(x)) ],
        [],
    );

    let news;
    let baseUrl;

    if (props.tag !== undefined) {
        baseUrl = `/news/tags/${encodeURIComponent(props.tag)}/`;
        news = props.news.filter(item => item.tags.includes(props.tag));
    }
    else {
        baseUrl = '/news/';
        // eslint-disable-next-line prefer-destructuring
        news = props.news;
    }

    const lastItemOfNews = news.slice(-1)[0];

    if (props.offset !== undefined) {
        const offset = news.findIndex(x => x.id === props.offset) + 1;

        news = news.slice(offset, newsPerPage + offset);
    }
    else {
        news = news.slice(0, newsPerPage);
    }

    const lastItemOfPage = news.slice(-1)[0];

    return (
        <>
            <Header as="h1">Haberler</Header>

            <ul className={customNewsStyle.tagBox}>
                {JSON.stringify(props.tag)}
                {tags.map(tagItem => (
                    <Link key={tagItem.toLowerCase()} to={`/news/tags/${encodeURIComponent(tagItem)}/`}>
                        <li className={customNewsStyle.tag}>
                            {tagItem}
                        </li>
                    </Link>
                ))}
                <NavLink key="0" to="/news/">
                    <li className={customNewsStyle.tag}>
                        X
                    </li>
                </NavLink>
            </ul>

            <ul className={customNewsStyle.newsList}>
                {news.map(newsItem => (
                    <Link key={newsItem.slug.toLowerCase()} to={`/news/detail/${encodeURIComponent(newsItem.slug)}`}>
                        <li className={customNewsStyle.new}>{newsItem.title}</li>
                    </Link>
                ))}
            </ul>

            <div className={customNewsStyle.bottomLinks}>
                <Link to="/news/add/">
                    Haber Ekle
                </Link>
                {(lastItemOfNews !== lastItemOfPage) && (
                <Link to={`${baseUrl}${lastItemOfPage !== undefined ? lastItemOfPage.id : ''}`}>
                    Sonraki Sayfa
                </Link>
                )}
                {(lastItemOfNews === lastItemOfPage) && 'Sonraki Sayfa'}
            </div>
        </>
    );
}

export {
    NewsListView as default,
};
