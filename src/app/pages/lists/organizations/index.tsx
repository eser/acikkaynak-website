import React, { useState, useEffect } from 'react';

import { Container, Loader } from 'semantic-ui-react';

import ListView from './listView';
// import DetailView from './detailView';

const dataSourceUrl = 'https://api.acikkaynak.info/lists/organizations';

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

    if (organizations === null) {
        return (
            <Container className="content">
                <Loader inline="centered" content="Yükleniyor..." active />
            </Container>
        );
    }

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
            <ListView datasource={organizations} />
        </Container>
    );
}

export {
    Organizations as default,
};
