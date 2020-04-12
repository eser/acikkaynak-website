import React, { useState, useEffect } from 'react';

import { Container, Image, Segment } from 'semantic-ui-react';

import { faBullhorn } from '@fortawesome/free-solid-svg-icons';

import Heading from '../shared/elements/heading';
import ContentFetchError from '../shared/elements/contentFetchError';
import Loading from '../shared/elements/loading';
import ErrorBoundary from '../shared/errorBoundary';
import SuspenseCheck from '../shared/suspenseCheck';
import ListView from './listView';

import KommunityLogo from './kommunity-logo.svg';

const dataSourceUrl = 'https://api.acik-kaynak.org/events';

async function getEventsFetch() {
    const response = await fetch(dataSourceUrl);
    const responseBody = await response.json();

    return responseBody;
}

function transformEvents(payload) {
    return {
        events: {
            'Gelecek Etkinlikler': payload.data.events,
            'Geçmiş Etkinlikler': payload.data.pastEvents,
        },
        members: payload.data.members,
    };
}

function Events() {
    const [ events, setEvents ] = useState(null);

    useEffect(() => {
        async function eventsFetch() {
            const eventsResponse = await getEventsFetch();

            setEvents(transformEvents(eventsResponse));
        }

        eventsFetch();
    }, []);

    return (
        <Container className="content">
            <Heading icon={faBullhorn} title="Etkinlikler" subtitle="acik-kaynak.org Etkinlikleri" />

            <ErrorBoundary fallback={() => <ContentFetchError />}>
                <SuspenseCheck if={events} fallback={() => <Loading />}>
                    <ListView datasource={events} />
                </SuspenseCheck>
            </ErrorBoundary>

            <Segment textAlign="right" basic>
                powered by
                { ' ' }
                <a href="https://kommunity.com/acikkaynak">
                    <Image size="small" src={KommunityLogo} verticalAlign="middle" />
                </a>
            </Segment>
        </Container>
    );
}

export {
    Events as default,
};
