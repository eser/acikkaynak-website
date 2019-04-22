import React, { useState } from 'react';
import NewsListView from './NewsListView';
import NewsDetailView from './NewsDetailView';
import * as bulmaStyles from 'bulma';

function News(props) {
    const [news, setNews] = useState([
        {
            id: 1,
            slug: "thy-o-ulkeye-karsilikli-sefer",
            title: "THY: O ülkeye karşılıklı seferler iptal edildi!",
            content: "Türk Hava Yolları'ndan yapılan açıklamada şu ifadeler kullanıldı: Sudan'da yaşanan askeri darbenin ardından hava sahasının kapatılması sonucu başkent Hartum'a planlanan karşılıklı seferler iptal edildi",
            tags: ["THY", "Turk Hava Yolları"]
        },
        {
            id: 2,
            slug: "7-baskan-9-teknik-adam-onlarca",
            title: "7 başkan, 9 teknik adam, onlarca yıldız! Hiçbiri başaramadı",
            content: "Spor Toto Süper Lig'in 28. haftasında 14 Nisan Pazar günü Fenerbahçe'ye konuk olacak Galatasaray'da son 7 kulüp başkanı, Kadıköy'de galibiyet sevinci yaşamadı.",
            tags: ["ts", "bjk"]
        },
        {
            id: 3,
            slug: "test",
            title: "test",
            content: "Spor Toto Süper Lig'in 28. haftasında 14 Nisan Pazar günü Fenerbahçe'ye konuk olacak Galatasaray'da son 7 kulüp başkanı, Kadıköy'de galibiyet sevinci yaşamadı.",
            tags: ["GS", "FB"]
        },
        {
            id: 4,
            slug: "haber",
            title: "haber",
            content: "Spor Toto Süper Lig'in 28. haftasında 14 Nisan Pazar günü Fenerbahçe'ye konuk olacak Galatasaray'da son 7 kulüp başkanı, Kadıköy'de galibiyet sevinci yaşamadı.",
            tags: ["GS", "FB"]
        }
    ]);

    if (props.slug !== undefined) {
        const currentNewsItem = news.find(x => x.slug === props.slug);

        // as long as content exists...
        if (currentNewsItem !== undefined) {
            return <NewsDetailView content={currentNewsItem} />
        }
    }

    return (
        <NewsListView news={news} {...props} />
    )
};

export {
    News as default,
};
