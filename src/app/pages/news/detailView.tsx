import React from 'react';
import { Link } from 'react-router-dom';

import customNewsStyle from './style.less';

const bulmaStyles = {};

function NewsDetailView(props) {
    function goBackButton(event) {
        // eslint-disable-next-line no-restricted-globals
        history.back();
        event.preventDefault();
    }

    return (
        <>
            <h5>{props.content.title}</h5>

            <div>
                <p>{props.content.content}</p>

                <p className={bulmaStyles.subtitle}>Etiketler:</p>
                <p>{props.content.tags.map(item => <li key={item.toLowerCase()}>{item}</li>)}</p>
            </div>

            <ul className={customNewsStyle.tagBox}>
                <Link to="/news/" onClick={goBackButton}>
                    <li className={customNewsStyle.tag}>
                        Geri Dön
                    </li>
                </Link>
            </ul>
        </>
    );
}

export {
    NewsDetailView as default,
};
