import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as bulmaStyles from 'bulma';

function EventsListView(props) {
    let events = props.events;

    const categories = props.events
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            <h3 className={bulmaStyles.title}>Etkinlikler</h3>
            <Link to={'/events/add/'}>
                <p>Etkinlik Ekle</p>
            </Link>
           
            <ul>
                {categories.map((category, number) => {
                    return (
                    <li key={number}>{category}
                        <ul>

                            {events.filter((x) => x.category === category).map((eventItem, number) => {
                                return (
                                    <div key={number}>
                                    <Link key={number} to={`/events/detail/${encodeURIComponent(eventItem.slug)}/`}>
                                        <li key={number}>{eventItem.title}->{eventItem.content}</li>
                                    </Link> 
                                    <Link key={number+1} to={`/events/edit/${encodeURIComponent(eventItem.slug)}/editEvent`}>Etkinlik Düzenle</Link> 
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
    EventsListView as default,
};
