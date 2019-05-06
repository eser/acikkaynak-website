import React, { useState } from 'react';
import * as bulmaStyles from 'bulma';
import EventsListView from './eventsListView'
import EventsDetailView from './eventsDetailView'

function Events(props) {
    const [events, setEvents] = useState([
        {
            id: 1,
            slug: "dev-izmir-ilk-bulusma",
            title: "DevIzmir Buluşması",
            content: "Dev izmir buluşması gerçekleşiyor.",
            category: "Meetup"
        },
        {
            id: 1,
            slug: "js-istanbul-hoisting",
            title: "JStanbul Mayıs Buluşması",
            content: "JStanbul Mayıs buluşmasında konu hoisting.",
            category: "Software"
        }
    ]);
    if (props.slug !== undefined) {
        const currentEvents = events.find(x => x.slug === props.slug);

        // as long as content exists...
        if (currentEvents !== undefined) {
            return (
                <EventsDetailView content={currentEvents} />
            );
        }
    }
    return (
        <EventsListView events={events} />
    );
};

export {
    Events as default,
};
