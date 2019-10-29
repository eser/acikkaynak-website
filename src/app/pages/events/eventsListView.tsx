import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const bulmaStyles = {};

function EventsListView(props) {
    const { events } = props;

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
                {categories.map((category, number) => (
                    <li key={number}>
                        {category}
                        <ul>

                            {events.filter(x => x.category === category).map((eventItem, number) => (
                                <div key={number}>
                                    <Link key={number} to={`/events/detail/${encodeURIComponent(eventItem.slug)}/`}>
                                        <li key={number}>
                                            {eventItem.title}
->
                                            {eventItem.content}
                                        </li>
                                    </Link>
                                    <Link key={number + 1} to={`/events/edit/${encodeURIComponent(eventItem.slug)}/editEvent`}>Etkinlik Düzenle</Link>
                                </div>
                            ))}

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
