import React from 'react';

import { Container, Header } from 'semantic-ui-react';

function Learn() {
    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">Eğitim</Header>

            <p>
                Bu sayfa yapım aşamasında.
            </p>
        </Container>
    );
}

export {
    Learn as default,
};
