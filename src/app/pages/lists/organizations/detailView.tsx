import React from 'react';
import { NavLink } from 'react-router-dom';

const bulmaStyles = {};

function OrgDetailView(props) {
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
                <p>
                    {' '}
Kategori :
                    {props.content.category}
                </p>
                <p>
                    {' '}
Şehir :
                    {props.content.city}
                </p>
                <p>
                    {' '}
Teknolojiler :
                    {props.content.technologies.join(', ') || '-'}
                </p>
                <p>
                    {' '}
Diller :
                    {props.content.languages.join(', ') || '-'}
                </p>
                <p>
                    {' '}
Donanımlar :
                    {props.content.hardwares.join(', ') || '-'}
                </p>
            </div>
            <NavLink key="0" to="/lists/organizations/" onClick={goBackButton}>
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
