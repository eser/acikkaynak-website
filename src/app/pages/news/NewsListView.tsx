import React, { useState, useEffect } from 'react';
import NewDetailView from './NewDetailView';
import * as bulmaStyles from 'bulma';
import customNewsStyle from './style.scss';

function ListView(props) {

    const [isDetailOpen, setDetail] = useState(false);
    const [clickedNew, setclickedNew] = useState(props.news[0]);
    const [fromAllNews, getFromAllNews] = useState(false);
    const [seeAllNews, setAllNews] = useState(false);
    const [data, setData] = useState(props.news);
    const [filterState, setFilterState] = useState(false);

    const newsList = props.news;
    const tags = newsList.reduce(
        (acc, cur) => [...acc, ...cur.tags.filter(x => !acc.includes(x))],
        []
    );

    function showAllNews(i) {
        setDetail(false)
        setclickedNew(props.news[i])
        setAllNews(true)
    }
    function openDetailPage(item, allNewsShow) {
        setDetail(true)
        setclickedNew(item)
        if (allNewsShow)
            setAllNews(true)
        else
            setAllNews(false)
    }
    function listTagNews(tagItem) {
        setData(props.news.filter(item => { if (item.tags.includes(tagItem)) return item; }));
        setData(newsList)
        setFilterState(true)
    }
    if (isDetailOpen) {
        return (
            <>
                <div>
                    <NewDetailView content={clickedNew} />
                </div>
            </>
        )
    }
    return (
        <div>
            <h2 className={bulmaStyles.title}>Haberler</h2>
            {data.map((item, i) => {
                return (
                    <li className={customNewsStyle.new} key={i} onClick={() => openDetailPage(item, false)} >{item.title}
                    </li>
                );
            }
            )}
        </div>
    )
}
export {
    ListView as default,
};
