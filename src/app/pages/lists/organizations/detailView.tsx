import React from 'react';
import { useHistory, Link } from 'react-router-dom';

function OrgDetailView(props) {
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
            <Link to="/lists/organizations/" onClick={goBackButton}>
                Geri Dön
            </Link>
        </>
    );
}

export {
    OrgDetailView as default,
};
