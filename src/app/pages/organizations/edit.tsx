import React, { useState } from 'react';
import bulma from 'bulma';
import { NavLink } from 'react-router-dom';
import customAddOrgStyle from './add.scss';

function OrgsEdit(props) {
    const [orgsTitle, setOrgsTitle] = useState(props.content.title);
    const [orgsContent, setOrgsContent] = useState(props.content.content);
    const [orgsCategory, setOrgsCategory] = useState(props.content.category == "Software" ? 0 : 1);

    function goBackButton(event) {
        history.back();
        event.preventDefault();
    }

    return (
        <>
            <div className={"container"}>
                <NavLink key="0" to={`/organizations/`} onClick={goBackButton}>
                    Geri Dön
                </NavLink>
                <h5>{props.content.title} Organizasyonu Düzenle</h5>
                <div className={customAddOrgStyle.field}>
                    <p>Etkinlik Başlığı</p>
                    <textarea value={orgsTitle} onChange={(e) => setOrgsTitle(e.target.value)}
                        className={customAddOrgStyle.orgsTitle} cols={40} rows={3} ></textarea>
                </div>
                <div className={customAddOrgStyle.field}>
                    <p>Etkinlik İçeriği</p>
                    <textarea value={orgsContent} onChange={(e) => setOrgsContent(e.target.value)}
                        className={customAddOrgStyle.orgsContent} cols={40} rows={10} ></textarea>
                </div>
                <div className={customAddOrgStyle.field}>
                    <p>Etkinlik Kategorisi Etiketleri</p>
                    <select value={orgsCategory} type="combobox" onChange={(e) => setOrgsCategory(e.target.value)}
                        className={customAddOrgStyle.category}>
                        <option value="0">Software</option>
                        <option value="1">Hardware</option>
                    </select>
                </div>
                <div className={customAddOrgStyle.button}>
                    <button>Düzenlemeyi kaydet</button>
                </div>
                <div>
                    {`${orgsTitle} ,${orgsContent} ,${orgsCategory}`}
                </div>
            </div>
        </>
    );
}


export {
    OrgsEdit as default,
};
