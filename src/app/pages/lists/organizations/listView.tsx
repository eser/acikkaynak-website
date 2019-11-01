import React from 'react';
import { Link } from 'react-router-dom';

import customOrgsStyle from './style.less';

const bulmaStyles = {};

function OrgsListView(props) {
    // GET Categpries from list of organizations
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
                        <h1 className={bulmaStyles.title}>Organizasyonlar</h1>
                    </div>
                </div>

                {/* Right side */}
                <div className={bulmaStyles.levelRight}>
                    <div className={`${bulmaStyles.levelItem}`}>
                        <div className={`${bulmaStyles.field} ${bulmaStyles.hasAddons} ${customOrgsStyle.search}`}>
                            <input className={bulmaStyles.input} onChange={props.handleSearch} value={props.searchInput} type="text" placeholder="Organizasyon bul" />
                        </div>
                    </div>

                    <p className={bulmaStyles.levelItem}><Link to="/lists/organizations/add/" className={`${bulmaStyles.button} ${bulmaStyles.isSuccess}`}>Organizasyon Ekle</Link></p>
                </div>
            </nav>
            <ul>
                {categories.map(category => (
                    <li key={category.toLowerCase()}>
                        {category}
                        <ul>
                            {props.orgs.filter(x => x.category === category).map((orgItem) => {
                                const slug = encodeURIComponent(orgItem.slug);

                                return (
                                    <div key={`div-${slug}`}>
                                        <Link key={`link-${slug}`} to={`/lists/organizations/detail/${slug}/`}>
                                            <li key={`list-item-${slug}`}>
                                                {orgItem.title}

                                                {orgItem.content}
                                            </li>
                                        </Link>
                                        <Link key={`list-link-${slug}`} to={`/lists/organizations/edit/${encodeURIComponent(orgItem.slug)}/editOrg`}>Organizasyon Düzenle</Link>
                                    </div>
                                );
                            })}
                        </ul>
                    </li>
                ))}

            </ul>
        </>
    );
}

export {
    OrgsListView as default,
};
