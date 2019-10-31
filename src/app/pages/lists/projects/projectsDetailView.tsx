import React from 'react';
import { useHistory, Link } from 'react-router-dom';

const bulmaStyles = {};

function ProjectsDetailView(props) {
    const historyObj = useHistory();

    function goBackButton(event) {
        historyObj.back();
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
            <Link to="/lists/projects/" onClick={goBackButton}>
                Geri Dön
            </Link>
        </>
    );
}

export {
    ProjectsDetailView as default,
};
