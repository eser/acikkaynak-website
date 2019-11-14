import React, { Suspense, useState, useEffect } from 'react';

import { Container } from 'semantic-ui-react';

import { faUsers } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import Loading from '../../shared/elements/loading';
import ListView from '../listView';
import listItemView from './listItemView';
// import DetailView from './detailView';

const dataSourceUrl = 'https://api.acik-kaynak.org/lists/organizations';

async function getOrganizationsFetch() {
    const response = await fetch(dataSourceUrl);
    const responseBody = await response.json();

    return responseBody;
}

function Organizations() {
    const [ organizations, setOrganizations ] = useState(null);

    useEffect(
        () => {
            async function organizationsFetch() {
                const organizationsResponse = await getOrganizationsFetch();

                setOrganizations(organizationsResponse);
            }

            organizationsFetch();
        },
        [],
    );

    // if (props.slug !== undefined) {
    //     const currentItem = organizations.find(x => x.name === props.slug);

    //     if (currentItem !== undefined) {
    //         return (
    //             <Container className="content">
    //                 <DetailView content={currentItem} />
    //             </Container>
    //         );
    //     }
    // }

    return (
        <Container className="content">
            <Heading icon={faUsers} title="Organizasyonlar" subtitle="Organizasyonlar Listesi" />

            <Suspense fallback={Loading}>
                <ListView datasource={organizations} listItemView={listItemView} />
            </Suspense>
        </Container>
    );
}

export {
    Organizations as default,
};
