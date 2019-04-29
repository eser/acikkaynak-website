import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as bulmaStyles from 'bulma';

function EventsListView(props) {
    console.log(props);
    let events = props.events;



    const categories = props.events
        .map(e => e.category)
        .filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            <h3 className={bulmaStyles.title}>Etkinlikler</h3>
            <ul>
                {categories.map((category, number) => {
                    return (<li key={number}>{category}
                        <ul>

                            {events.filter((x) => x.category === category).map((eventItem, number) => {
                                return (
                                    <Link key={number} to={`/events/detail/${encodeURIComponent(eventItem.slug)}/`}>
                                        <li key={number}>{eventItem.title} ->  {eventItem.content}
                                        </li>
                                    </Link>
                                )
                            })}

                        </ul>
                    </li>)
                })}

            </ul>
        </>
    );
}

export {
    EventsListView as default,
};
