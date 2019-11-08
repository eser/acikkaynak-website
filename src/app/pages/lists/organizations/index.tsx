import React, { useState, useEffect } from 'react';

import { Container, Loader, Header } from 'semantic-ui-react';

import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ListView from '../listView';
import listItemView from './listItemView';
// import DetailView from './detailView';

import localStyles from './style.less';

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
            <Header as="h1" className={localStyles.orgHeader}>
                <i aria-hidden="true" className="circular icon">
                    <FontAwesomeIcon icon={faUsers} />
                </i>
                <Header.Content>
                    Organizasyonlar
                    <Header.Subheader>
                        Organizasyonlar Listesi
                    </Header.Subheader>
                </Header.Content>
            </Header>

            <ListView datasource={organizations} listItemView={listItemView} />
        </Container>
    );
}

export {
    Organizations as default,
};
