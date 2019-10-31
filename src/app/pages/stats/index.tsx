import React from 'react';

import { Container, Header } from 'semantic-ui-react';

function Stats() {
    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">İstatistikler</Header>

            <p>
                Bu sayfa yapım aşamasında.
            </p>
        </Container>
    );
}

export {
    Stats as default,
};
