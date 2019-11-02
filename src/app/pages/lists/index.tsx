import React from 'react';

import { Container, Header, Message, Icon } from 'semantic-ui-react';

function Lists() {
    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">
                <Icon name="caret square right" circular />
                <Header.Content>
                    Listeler
                    <Header.Subheader>
                        Açık Kaynak ile İlgili Proje,
                        Organizasyon ve Sponsorlar
                    </Header.Subheader>
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
    Lists as default,
};
