import React from 'react';
import { NavLink } from 'react-router-dom';

const bulmaStyles = {};

function ProjectsDetailView(props) {
    function goBackButton(event) {
        // eslint-disable-next-line no-restricted-globals
        history.back();
        event.preventDefault();
    }

    return (
        <>
            <h5 className={bulmaStyles.subtitle}>
                {props.content.title}
                {' '}
                proje detayı
            </h5>
            <div>
                <p>{props.content.content}</p>
                <p>
                    Star Sayısı:
                    {props.content.stars}
                </p>
                <p style={{ backgroundColor: props.content.participation ? 'green' : 'red', width: '10%', color: 'white' }}>
                    {props.content.participation ? 'Katılım Bekliyor.' : 'Katılım Beklemiyor.'}
                </p>
                <p style={{ backgroundColor: props.content.sponsor ? 'green' : 'red', width: '10%', color: 'white' }}>
                    {props.content.sponsor ? 'Sponsor Bekliyor.' : 'Sponsor Beklemiyor.'}
                </p>
                <p>{props.content.category}</p>
            </div>
            <NavLink key="0" to="/projects/" onClick={goBackButton}>
                <p>
                    Geri Dön
                </p>
            </NavLink>
        </>
    );
}

export {
    ProjectsDetailView as default,
};
