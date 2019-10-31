import React from 'react';

import { Container, Header } from 'semantic-ui-react';

function GetStarted() {
    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">Başlarken</Header>

            <p>
                Bu sayfa yapım aşamasında.
            </p>
        </Container>
    );
}

export {
    GetStarted as default,
};
