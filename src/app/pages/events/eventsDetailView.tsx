import React from 'react';
import { Link } from 'react-router-dom';

const bulmaStyles = {};

function EventsDetailView(props) {
    function goBackButton(event) {
        // eslint-disable-next-line no-restricted-globals
        history.back();
        event.preventDefault();
    }

    return (
        <>
            <h5 className={bulmaStyles.subtitle}>{props.content.title}</h5>

            <div>
                <p>{props.content.content}</p>
                <p>Kategori</p>
                <ul>
                    <li>
                        {props.content.category}
                        {' '}
                    </li>
                </ul>
            </div>
            <Link to="/news/" onClick={goBackButton}>
                Geri Dön
            </Link>
        </>
    );
}

export {
    EventsDetailView as default,
};
