import React from 'react';

import { Container, Header, Message, Icon } from 'semantic-ui-react';

function Learn() {
    return (
        <Container className="content" textAlign="justified">
            <Header as="h1" icon>
                <Icon name="caret square right" circular />
                <Header.Content>Egitim</Header.Content>
            </Header>

            <Message icon>
                <Icon name="circle notched" loading />
                <Message.Content>
                    <Message.Header>Bu sayfa yapım aşamasında.</Message.Header>
                </Message.Content>
            </Message>
        </Container>
    );
}

export {
    Learn as default,
};
