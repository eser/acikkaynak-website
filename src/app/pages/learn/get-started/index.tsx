import React from 'react';

import { Container, Header, Message, Icon } from 'semantic-ui-react';

function GetStarted() {
    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">
                <Icon name="caret square right" circular />
                <Header.Content>
                    Başlarken
                    <Header.Subheader>Açık Kaynak Geliştirmeye Başlama Rehberi</Header.Subheader>
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
    GetStarted as default,
};
