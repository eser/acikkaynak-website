import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import UnderConstruction from '../shared/elements/underConstruction';

function SupportUs() {
    return (
        <Container className="content">
            <Header as="h1" style={{ 'fontVariant': 'no-common-ligatures' }}>Açık-Kaynak.org'u Destekle</Header>

            <UnderConstruction />
        </Container>
    );
}

export {
    SupportUs as default,
};
