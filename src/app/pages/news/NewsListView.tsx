import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as bulmaStyles from 'bulma';
import customNewsStyle from './style.scss';

function NewsListView(props) {
    const [newsPerPage, setNewsPerPage] = useState(2);

    const tags = props.news.reduce(
        (acc, cur) => [...acc, ...cur.tags.filter(x => !acc.includes(x))],
        []
    );

    let news;
    let baseUrl;

    if (props.tag !== undefined) {
        baseUrl = `/news/tags/${encodeURIComponent(props.tag)}/`;
        news = props.news.filter(item => item.tags.includes(props.tag));
    }
    else {
        baseUrl = `/news/`;
        news = props.news;
    }

    let pageNumber;

    if (props.pageNumber != undefined) {
        pageNumber = parseInt(props.pageNumber, 10);
    }
    else {
        pageNumber = 1;
    }

    const indexOfLast = pageNumber * newsPerPage;
    const indexOfFirst = indexOfLast - newsPerPage;
    const pageCount = Math.ceil(news.length / newsPerPage);

    news = news.slice(indexOfFirst, indexOfLast);

    const pageNumbers = [];
    for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
    }

    let pageNumber = 1;
    if (props.pageNumber != undefined) pageNumber = (parseInt(props.pageNumber) + 1);
    const indexOfLastTodo = pageNumber * newsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - newsPerPage;
    let currentNews = news.slice(indexOfFirstTodo, indexOfLastTodo);

    for (let i = 1; i <= Math.ceil(news.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <>
            <h5>{pageNumber}. sayfa haberleri</h5>

            <ul className={customNewsStyle.tagBox}>
                {JSON.stringify(props.tag)}
                {tags.map((tagItem, number) => {
                    return (
                        <Link key={number} to={`/news/tags/${encodeURIComponent(tagItem)}/`}>
                            <li
                                className={customNewsStyle.tag}
                            >
                                {tagItem}
                            </li>
                        </Link>
                    );
                })}
                <NavLink key="0" to={`/news/`}>
                    <li
                        className={customNewsStyle.tag}
                    >
                        X
                    </li>
                </NavLink>
            </ul>

            <ul className={customNewsStyle.newsList}>
                {currentNews.map((newsItem, number) => {
                    return (
                        <Link key={number} to={`/news/detail/${encodeURIComponent(newsItem.slug)}`}>
                            <li className={customNewsStyle.new}>{newsItem.title}</li>
                        </Link>
                    );
                })}
            </ul>

            <ul id="page-numbers" className={customNewsStyle.paging}>
                {pageNumbers.map((pageNumber, number) => {
                    return (
<<<<<<< HEAD
                        <Link key={number} to={`${baseUrl}${pageNumber}`}>
                            <li className={customNewsStyle.pagingItems}>{pageNumber}</li>
                        </Link>
=======
                        <NavLink key={number} to={`/news/pageNumber/${encodeURIComponent((number).toString())}`}>
                            <li className={customNewsStyle.pagingItems} key={number}>{pageNumber}</li>
                        </NavLink>
>>>>>>> Paging feature development
                    );
                })}
            </ul>
        </>
    );
}

export {
    NewsListView as default,
};
