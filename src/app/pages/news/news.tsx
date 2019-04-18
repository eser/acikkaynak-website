import React, { useState, useEffect } from 'react';
import NewsListView from './NewsListView';
import * as bulmaStyles from 'bulma';

function News() {
    const [news, setNews] = useState([
        {
            id: 1,
            title: "THY: O ülkeye karşılıklı seferler iptal edildi!",
            content: "Türk Hava Yolları'ndan yapılan açıklamada şu ifadeler kullanıldı: Sudan'da yaşanan askeri darbenin ardından hava sahasının kapatılması sonucu başkent Hartum'a planlanan karşılıklı seferler iptal edildi",
            tags: ["THY", "Turk Hava Yolları"]
        },
        {
            id: 2,
            title: "7 başkan, 9 teknik adam, onlarca yıldız! Hiçbiri başaramadı",
            content: "Spor Toto Süper Lig'in 28. haftasında 14 Nisan Pazar günü Fenerbahçe'ye konuk olacak Galatasaray'da son 7 kulüp başkanı, Kadıköy'de galibiyet sevinci yaşamadı.",
            tags: ["GS", "FB"]
        },
        {
            id: 3,
            title: "test",
            content: "Spor Toto Süper Lig'in 28. haftasında 14 Nisan Pazar günü Fenerbahçe'ye konuk olacak Galatasaray'da son 7 kulüp başkanı, Kadıköy'de galibiyet sevinci yaşamadı.",
            tags: ["GS", "FB"]
        }
    ]);
    return (
        <NewsListView news={news} />
    )
};

export {
    News as default,
};
