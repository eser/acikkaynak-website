import React from 'react';

import { Container, Header, Message, Icon } from 'semantic-ui-react';

function ForCorporations() {
    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">
                <Icon name="caret square right" circular />
                <Header.Content>
                    Kurumlar İçin
                    <Header.Subheader>Kurumlar İçin Açık Kaynak Rehberi</Header.Subheader>
                </Header.Content>
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
    ForCorporations as default,
};
