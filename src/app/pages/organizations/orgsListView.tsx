import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as bulmaStyles from 'bulma';
import customNewsStyle from './style.scss';

function OrgsListView(props) {
    let orgs = props.orgs;

    //GET Categpries from list of organizations
    const categories = props.orgs
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            <h3 className={bulmaStyles.title}>Organizasyonlar</h3>
            <Link to={'/orgs/add/'}>
                <p>Organizasyon Ekle</p>
            </Link>
            <ul>
                {categories.map((category, number) => {
                    return (
                        <li key={number}>{category}
                            <ul>
                                {orgs.filter((x) => x.category === category).map((orgItem, number) => {
                                    return (
                                        <div key={number}>
                                            <Link key={number} to={`/orgs/detail/${encodeURIComponent(orgItem.slug)}/`}>
                                                <li key={number}>{orgItem.title}->{orgItem.content}</li>
                                            </Link>
                                            <Link key={number + 1} to={`/orgs/edit/${encodeURIComponent(orgItem.slug)}/1`}>Etkinlik Düzenle</Link>
                                        </div>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}

            </ul>
        </>
    );
}

export {
    OrgsListView as default,
};
