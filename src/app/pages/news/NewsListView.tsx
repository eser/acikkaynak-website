import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as bulmaStyles from 'bulma';
import customNewsStyle from './style.scss';

function NewsListView(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(2);

    const tags = props.news.reduce(
        (acc, cur) => [...acc, ...cur.tags.filter(x => !acc.includes(x))],
        []
    );

    let news = props.news;

    if (props.tag !== undefined) {
        news = news.filter(item => item.tags.includes(props.tag));
    }

    return (
        <>
            <h5>{currentPage}. sayfa haberleri</h5>

            <ul className={customNewsStyle.tagBox}>
                {JSON.stringify(props.tag)}
                {tags.map((tagItem, number) => {
                    return (
                        <NavLink key={number} to={`/news/tags/${encodeURIComponent(tagItem)}`}>
                            <li
                                className={customNewsStyle.tag}
                            >
                                {tagItem}
                            </li>
                        </NavLink>
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
                {news.map((newsItem, number) => {
                    return (
                        <NavLink key={number} to={`/news/detail/${encodeURIComponent(newsItem.slug)}`}>
                            <li className={customNewsStyle.new}>{newsItem.title}</li>
                        </NavLink>
                    );
                })}
            </ul>
            
            <ul id="page-numbers" className={customNewsStyle.paging}>
            </ul>
        </>
    );

    // function listTagNews(tagItem) {
    //     setData(data.filter(item => { if (item.tags.includes(tagItem)) return item; }));
    // }

    // function deleteFilter() {
    //     setData(props.news);
    // }

    // const indexOfLastTodo = currentPage * newsPerPage;
    // const indexOfFirstTodo = indexOfLastTodo - newsPerPage;
    // const currentTodos = newsList.slice(indexOfFirstTodo, indexOfLastTodo);
    // const pageNumbers = [];
    // let tagsArea = null;


    // const tags = newsList.reduce(
    //     (acc, cur) => [...acc, ...cur.tags.filter(x => !acc.includes(x))],
    //     []
    // );
    
    // const renderTodos = currentTodos.map((newItem, index) => {
    //     return <li className={customNewsStyle.new} key={index} onClick={() => openDetailPage(newItem)}>{newItem.title}</li>;
    // });
    // for (let i = 1; i <= Math.ceil(data.length / newsPerPage); i++) {
    //     pageNumbers.push(i);
    // }

    // if (tags.length > 0) {
    //     tagsArea = tags.map((tagItem, number) => {
    //         return (
    //             <li
    //                 className={customNewsStyle.tag}
    //                 key={number}
    //                 id={number}
    //                 onClick={function () { listTagNews(tagItem) }}
    //             >
    //                 {tagItem}
    //             </li>
    //         );
    //     });
    // }

    // const renderPageNumbers = pageNumbers.map(number => {
    //     return (
    //         <li
    //             className={customNewsStyle.pagingItems}
    //             key={number}
    //             id={number}
    //             onClick={() => setCurrentPage(number)}
    //         >
    //             {number}
    //         </li>
    //     );
    // });

    // if (isDetailOpen) {
    //     return (
    //         <NewDetailView content={clickedNew} />
    //     )
    // }
    // return (
    //     <div>
    //         <h5>{currentPage}. sayfa haberleri</h5>
    //         <ul className={customNewsStyle.tagBox}>{tagsArea}</ul>
    //         <p className={customNewsStyle.tag}
    //             onClick={() => deleteFilter()}> X </p>
    //         <ul className={customNewsStyle.newsList}>
    //             {renderTodos}
    //         </ul>
            
    //         <ul id="page-numbers" className={customNewsStyle.paging}>
    //             {renderPageNumbers}
    //         </ul>
    //     </div>
    // );
}

export {
    NewsListView as default,
};
