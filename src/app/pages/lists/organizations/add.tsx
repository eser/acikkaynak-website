import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import customAddOrgsStyle from './add.less';

function OrganizationsAdd() {
    const historyObj = useHistory();

    const [ orgsTitle, setorgsTitle ] = useState('Organizasyon Başlığı');
    const [ orgsContent, setorgsContent ] = useState('Organizasyon İçeriği');
    const [ orgsCategory, setorgsCategory ] = useState('1');

    function addOrgs() {
        // TODO ADD EVENTS ACTION
    }

    function goBackButton(event) {
        historyObj.back();
        event.preventDefault();
    }

    return (
        <>
            <div className={customAddOrgsStyle.organizationsContainer}>
                <Link to="/events/" onClick={goBackButton}>
                    Geri Dön
                </Link>
                <div className={customAddOrgsStyle.form}>
                    <h3>Etkinlik Ekle</h3>
                    <div className={customAddOrgsStyle.field}>
                        <p>Etkinlik Başlığı</p>
                        <textarea
                            onChange={e => setorgsTitle(e.target.value)}
                            className={customAddOrgsStyle.orgsTitle}
                            cols="40"
                            rows="3"
                        />
                    </div>
                    <div className={customAddOrgsStyle.field}>
                        <p>Etkinlik İçeriği</p>
                        <textarea
                            onChange={e => setorgsContent(e.target.value)}
                            className={customAddOrgsStyle.orgsContent}
                            cols="40"
                            rows="10"
                        />
                    </div>
                    <div className={customAddOrgsStyle.field}>
                        <p>Etkinlik Kategorisi Etiketleri</p>
                        <select
                            type="combobox"
                            onChange={e => setorgsCategory(e.target.value)}
                            className={customAddOrgsStyle.category}
                        >
                            <option value="0">Software</option>
                            <option value="1">Hardware</option>
                        </select>
                    </div>
                </div>
                <div className={customAddOrgsStyle.button}>
                    <button type="submit" onClick={addOrgs}>Ekle</button>
                </div>
            </div>
            <div>
                {`${orgsTitle} ,${orgsContent} ,${orgsCategory}`}
            </div>
        </>
    );
}

export {
    OrganizationsAdd as default,
};
