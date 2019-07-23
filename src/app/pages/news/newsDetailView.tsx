import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as bulmaStyles from 'bulma';
import customNewsStyle from './style.scss';

function NewsDetailView(props) {
    function goBackButton(event) {
        history.back();
        event.preventDefault();
    }

    return (
        <>
            <h5>{props.content.title}</h5>

            <div>
                <p>{props.content.content}</p>

                <p className={bulmaStyles.subtitle}>Etiketler:</p>
                <p>{props.content.tags.map((item, i) => <li key={i} >{item}</li>)}</p>
            </div>

            <ul className={customNewsStyle.tagBox}>
                <NavLink key="0" to={`/news/`} onClick={goBackButton}>
                    <li
                        className={customNewsStyle.tag}
                    >
                        Geri Dön
                    </li>
                </NavLink>
            </ul>
        </>
    );
}

export {
    NewsDetailView as default,
};
