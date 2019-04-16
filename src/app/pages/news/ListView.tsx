import React, { useState, useEffect } from 'react';
import NewDetailView from './NewDetailView';
import * as bulmaStyles from 'bulma';
import { stat } from 'fs';
import customNewsStyle from './style.scss';


function ListView(props) {

    const [isDetailOpen, setDetail] = useState(false);
    const [clickedNew, setclickedNew] = useState(props.news[0]);
    const [fromAllNews, getFromAllNews] = useState(false);
    const [seeAllNews, setAllNews] = useState(false);
    const [data, setData] = useState(props.news);
    const [filterState, setFilterState] = useState(false);

    var tags = [];
    var newsList = [];
    if (props.news.length > 0) newsList = props.news;
    props.news.map((item, i) => {
        item.tags.map((tag, i) => {
            if (!tags.includes(tag)) tags.push(tag)
        })
    }); 
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
        newsList = props.news;
        newsList = props.news.filter(item => { if (item.tags.includes(tagItem)) return item; });
        setData(newsList)
        setFilterState(true)
    }
    useEffect(
        () => {
        },
        [data]
    );
    if (isDetailOpen) {
        return (
            <>
                <div>
                    <NewDetailView content={clickedNew} />
                </div>
            </>
        )
    }
    else if (fromAllNews || seeAllNews) {
        return (
            <>
                <h1 className={bulmaStyles.title}>Tüm Haberler</h1>
                Etiketler :  {tags.map((tagItem, k) =>
                    <a className={customNewsStyle.tag} onClick={() => listTagNews(tagItem)} key={k}>{tagItem}</a>
                )}
                {filterState == true ? <a onClick={() => {setData(props.news);setFilterState(false)}}>Filtre Kaldır</a> :''}
                <ul>
                    {data.map((item, i) =>
                        <li className={customNewsStyle.new} key={i} ><a key={i} onClick={() => openDetailPage(item, true)}>{item.title}</a>
                        </li>
                    )}
                </ul>
            </>
        )
    }
    else {
        return (
            <>
                <h1 className={bulmaStyles.title}>Haberler</h1>
                <ul>
                    {data.map((item, i) => {
                        if (i < 2)
                            return (
                                <li className={customNewsStyle.new} key={i} onClick={() => openDetailPage(item, false)} >{item.title}
                                </li>
                            );
                        if (i >= 2)
                            return (
                                <button className={customNewsStyle.seeAllNews} key={"showAllNews"} onClick={() => showAllNews(i)}>
                                    Tüm haberleri gör
                                 </button>
                            )
                    }
                    )}
                </ul>
            </>
        )
    }
}
export {
    ListView as default,
};
