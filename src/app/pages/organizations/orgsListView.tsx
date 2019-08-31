import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as bulmaStyles from 'bulma';
import customOrgsStyle from './style.scss';

function OrgsListView(props) {
    let orgs = props.orgs;

    //GET Categpries from list of organizations
    const categories = props.orgs
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            {/* Top bar */}
            <nav className={bulmaStyles.level}>
                {/* Left side */}
                <div className={bulmaStyles.levelLeft}>
                    <div className={bulmaStyles.levelItem}>
                        <h3 className={bulmaStyles.title}>Organizasyonlar</h3>
                    </div>
                </div>

                {/* Right side */}
                <div className={bulmaStyles.levelRight}>
                    <div className={`${bulmaStyles.levelItem}`}>
                        <div className={`${bulmaStyles.field} ${bulmaStyles.hasAddons} ${customOrgsStyle.search}`}>
                                <input className={bulmaStyles.input} onChange={props.handleSearch} value={props.searchInput} type="text" placeholder="Organizasyon bul"/>
                        </div>
                    </div>

                    <p className={bulmaStyles.levelItem}><Link to={'/orgs/add/'} className={`${bulmaStyles.button} ${bulmaStyles.isSuccess}`}>Organizasyon Ekle</Link></p>
                </div>
            </nav>
            <ul>
                {categories.map((category, number) =>
                        <li key={number}>{category}
                            <ul>
                                {orgs.filter((x) => x.category === category).map((orgItem, number) =>
                                        <div key={number}>
                                            <Link key={number} to={`/orgs/detail/${encodeURIComponent(orgItem.slug)}/`}>
                                                <li key={number}>{orgItem.title}->{orgItem.content}</li>
                                            </Link>
                                            <Link key={number + 1} to={`/orgs/edit/${encodeURIComponent(orgItem.slug)}/editOrg`}>Etkinlik Düzenle</Link>
                                        </div>
                                )}
                            </ul>
                        </li>
                )}

            </ul>
        </>
    );
}

export {
    OrgsListView as default,
};
