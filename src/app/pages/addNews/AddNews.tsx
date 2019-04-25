import React, { useState } from 'react';
import NewsListView from './NewsListView';
import NewsDetailView from './NewsDetailView';
import * as bulmaStyles from 'bulma';
import customAddNewsStyle from './style.scss';

function AddNews(props) {
    const [news, setNews] = useState([
        {
            id: 1,
            slug: "thy-o-ulkeye-karsilikli-sefer",
            title: "THY: O ülkeye karşılıklı seferler iptal edildi!",
            content: "Türk Hava Yolları'ndan yapılan açıklamada şu ifadeler kullanıldı: Sudan'da yaşanan askeri darbenin ardından hava sahasının kapatılması sonucu başkent Hartum'a planlanan karşılıklı seferler iptal edildi",
            tags: ["THY", "Turk Hava Yolları"]
        }
    ]);

    return (
        <>

            <div className={customAddNewsStyle.container}>
                <div className={customAddNewsStyle.form}>
                    <h3>Haber Ekle</h3>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber Başlığı</p>
                        <textarea className={customAddNewsStyle.newsTitle} cols={40} rows={3} ></textarea>
                    </div>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber İçeriği</p>
                        <textarea className={customAddNewsStyle.newsContent} cols={40} rows={10} ></textarea>
                    </div>
                    <div className={customAddNewsStyle.field}>
                        <p>Haber Etiketleri</p>
                        <textarea className={customAddNewsStyle.tags} cols={40} rows={5} ></textarea>
                    </div>
                </div>
                <div className={customAddNewsStyle.button}>
                    <button> Ekle</button>
                </div>
            </div>
        </>
    );
};

export {
    AddNews as default,
};
