import React from 'react';
import { NavLink } from 'react-router-dom';

const bulmaStyles = {};

function EventsDetailView(props) {
    function goBackButton(event) {
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
            <NavLink key="0" to="/news/" onClick={goBackButton}>
                <p>
                    Geri Dön
                </p>
            </NavLink>
        </>
    );
}

export {
    EventsDetailView as default,
};
