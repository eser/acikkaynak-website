import React, { useState, useEffect } from 'react';
import NewDetailView from './NewDetailView';
import * as bulmaStyles from 'bulma';
import customNewsStyle from './style.scss';

function ListView(props) {

    const [isDetailOpen, setDetail] = useState(false);
    const [clickedNew, setclickedNew] = useState(props.news[0]);
    const [data, setData] = useState(props.news);
    const [filterState, setFilterState] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(2);

    const indexOfLastTodo = currentPage * newsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - newsPerPage;
    const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    const newsList = props.news;
    const tags = newsList.reduce(
        (acc, cur) => [...acc, ...cur.tags.filter(x => !acc.includes(x))],
        []
    );
    function openDetailPage(item) {
        setDetail(true)
        setclickedNew(item)
    }
    function listTagNews(tagItem) {
        setData(props.news.filter(item => { if (item.tags.includes(tagItem)) return item; }));
        setData(newsList)
        setFilterState(true)
    }


    const renderTodos = currentTodos.map((newItem, index) => {
        return <li className={customNewsStyle.new} key={index} onClick={() => openDetailPage(newItem)}>{newItem.title}</li>;
    });
    for (let i = 1; i <= Math.ceil(data.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }


    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                className={customNewsStyle.pagingItems}
                key={number}
                id={number}
                onClick={() => setCurrentPage(number)}
            >
                {number}
            </li>
        );
    });
    if (isDetailOpen) {
        return (

            <NewDetailView content={clickedNew} />
        )
    }
    return (
        <div>
            <h5>{currentPage}. sayfa haberleri</h5>
            <ul className={customNewsStyle.newsList}>
                {renderTodos}
            </ul>
            <ul id="page-numbers" className={customNewsStyle.paging}>
                {renderPageNumbers}
            </ul>
        </div>
    );
}
export {
    ListView as default,
};