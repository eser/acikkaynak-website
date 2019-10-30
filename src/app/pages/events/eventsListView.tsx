import React from 'react';
import { Link } from 'react-router-dom';

const bulmaStyles = {};

function EventsListView(props) {
    const categories = props.events
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            <h1 className={bulmaStyles.title}>Etkinlikler</h1>

            <Link to="/events/add/">
                <p>Etkinlik Ekle</p>
            </Link>

            <ul>
                {categories.map(category => (
                    <li key={category.toLowerCase()}>
                        {category}

                        <ul>
                            {props.events.filter(x => x.category === category)
                                .map((eventItem) => {
                                    const slug = encodeURIComponent(eventItem.slug);

                                    return (
                                        <div key={`div-${slug}`}>
                                            <Link key={`view-link-${slug}`} to={`/events/detail/${slug}/`}>
                                                <li key={`list-item-${slug}`}>
                                                    {eventItem.title}

                                                    {eventItem.content}
                                                </li>
                                            </Link>
                                            <Link key={`edit-link-${slug}`} to={`/events/edit/${slug}/editEvent`}>
                                                Etkinlik Düzenle
                                            </Link>
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
    EventsListView as default,
};
