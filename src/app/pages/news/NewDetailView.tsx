import React, { useState, useEffect } from 'react';
import News from './news';
import * as bulmaStyles from 'bulma';
import customNewsStyle from './style.scss';


function NewDetailView(props) {
    const [isDetailOpen, setDetail] = useState(true);
    const [clickedNew, setclickedNew] = useState(props.clickedNew);
    const [fromAllNews, getFromAllNews] = useState(false);
    const [seeAllNews, setAllNews] = useState(false);

    if (!isDetailOpen) {
        return (
            <>
                <News />
            </>
        )
    }
    else {
        return (
            <>
                <div>
                    <button  onClick={() => {
                        setDetail(false)
                        setclickedNew(null)
                    }}>
                        Geri dön
                     </button>
                    <p className={bulmaStyles.subtitle}>Haber Başlığı:</p><p>{props.content.title}</p>
                    <p className={bulmaStyles.subtitle}>Haber detayı:</p><p>{props.content.content}</p>

                    <p className={bulmaStyles.subtitle}>Etiketler : </p><p>{props.content.tags.map((item, i) => <li key={i} >{item}</li>)}</p>
                </div>
            </>
        )
    }
}

export {
    NewDetailView as default,
};
