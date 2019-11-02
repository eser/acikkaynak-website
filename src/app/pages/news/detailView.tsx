import React from 'react';
import { useHistory, Link } from 'react-router-dom';

import customNewsStyle from './style.less';

function NewsDetailView(props) {
    const historyObj = useHistory();

    function goBackButton(event) {
        historyObj.back();
        event.preventDefault();
    }

    return (
        <>
            <h5>{props.content.title}</h5>

            <div>
                <p>{props.content.content}</p>

                <p>Etiketler:</p>
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
