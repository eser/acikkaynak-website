import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as bulmaStyles from 'bulma';

function OrgDetailView(props) {
    function goBackButton(event) {
        history.back();
        event.preventDefault();
    }

    return (
        <>
            <h5 className={bulmaStyles.subtitle}>{props.content.title}</h5>
            <div>
                <p>{props.content.content}</p>
                <p> Kategori : {props.content.category}</p>
            </div>
            <NavLink key="0" to={`/orgs/`} onClick={goBackButton}>
                <p>
                    Geri Dön
                </p>
            </NavLink>
        </>
    );
}

export {
    OrgDetailView as default,
};
