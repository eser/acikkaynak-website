import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import customAddOrgStyle from './add.less';

function OrganizationsEdit(props) {
    const [ orgsTitle, setOrgsTitle ] = useState(props.content.title);
    const [ orgsContent, setOrgsContent ] = useState(props.content.content);
    const [ orgsCategory, setOrgsCategory ] = useState(props.content.category === 'Software' ? 0 : 1);

    function goBackButton(event) {
        // eslint-disable-next-line no-restricted-globals
        history.back();
        event.preventDefault();
    }

    return (
        <>
            <div className="container">
                <Link to="/lists/organizations/" onClick={goBackButton}>
                    Geri Dön
                </Link>
                <h5>
                    {props.content.title}
                    {' '}
                    Organizasyonu Düzenle
                </h5>
                <div className={customAddOrgStyle.field}>
                    <p>Etkinlik Başlığı</p>
                    <textarea
                        value={orgsTitle}
                        onChange={e => setOrgsTitle(e.target.value)}
                        className={customAddOrgStyle.orgsTitle}
                        cols={40}
                        rows={3}
                    />
                </div>
                <div className={customAddOrgStyle.field}>
                    <p>Etkinlik İçeriği</p>
                    <textarea
                        value={orgsContent}
                        onChange={e => setOrgsContent(e.target.value)}
                        className={customAddOrgStyle.orgsContent}
                        cols={40}
                        rows={10}
                    />
                </div>
                <div className={customAddOrgStyle.field}>
                    <p>Etkinlik Kategorisi Etiketleri</p>
                    <select
                        value={orgsCategory}
                        type="combobox"
                        onChange={e => setOrgsCategory(e.target.value)}
                        className={customAddOrgStyle.category}
                    >
                        <option value="0">Software</option>
                        <option value="1">Hardware</option>
                    </select>
                </div>
                <div className={customAddOrgStyle.button}>
                    <button type="submit">Düzenlemeyi Kaydet</button>
                </div>
                <div>
                    {`${orgsTitle} ,${orgsContent} ,${orgsCategory}`}
                </div>
            </div>
        </>
    );
}

export {
    OrganizationsEdit as default,
};
