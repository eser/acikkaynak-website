import React from 'react';
import { Link } from 'react-router-dom';

function OrgsListView(props) {
    // GET Categpries from list of organizations
    const categories = props.orgs
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            {/* Top bar */}
            <nav>
                <h1>Organizasyonlar</h1>

                {/* Right side */}
                <div>
                    <div>
                        <input onChange={props.handleSearch} value={props.searchInput} type="text" placeholder="Organizasyon bul" />
                    </div>

                    <p><Link to="/lists/organizations/add/">Organizasyon Ekle</Link></p>
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
