import React, { useState } from 'react';
import NewsListView from './NewsListView';
import NewsDetailView from './NewsDetailView';
import * as bulmaStyles from 'bulma';
import customAddNewsStyle from './style.scss';

function AddNews(props) {
    const [newsTitle, setNewsTitle] = useState("");
    const [newsContent, setNewsContent] = useState("");
    const [newsTags, setNewsTags] = useState("");
    
    function addNews() {
        //Todo Add new development
    }

    return (
        <>

            <div className={customAddNewsStyle.container}>
                <div className={customAddNewsStyle.form}>
                    <h3>Haber Ekle</h3>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber Başlığı</p>
                        <textarea onChange={(e) => setNewsTitle(e.target.value)} className={customAddNewsStyle.newsTitle} cols={40} rows={3} ></textarea>
                    </div>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber İçeriği</p>
                        <textarea onChange={(e) => setNewsContent(e.target.value)} className={customAddNewsStyle.newsContent} cols={40} rows={10} ></textarea>
                    </div>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber Etiketleri</p>
                        <textarea
                            className={customAddNewsStyle.tags}
                            cols={40}
                            rows={5}
                            onChange={(e) => setNewsTags(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className={customAddNewsStyle.button}>
                    <button onClick={addNews}> Ekle</button>
                </div>
                <div>
                    {"'" + newsTitle + "','" + newsContent + "','" + newsTags + "'"}
                </div>
            </div>
        </>
    );
};

export {
    AddNews as default,
};
