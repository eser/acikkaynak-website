import React from 'react';

import { Container, Header, Message } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function ForCorporations() {
    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">
                <i aria-hidden="true" className="circular icon">
                    <FontAwesomeIcon icon={faCaretSquareRight} />
                </i>

                <Header.Content>
                    Kurumlar İçin
                    <Header.Subheader>Kurumlar İçin Açık Kaynak Rehberi</Header.Subheader>
                </Header.Content>
            </Header>

            <Message icon>
                <i aria-hidden="true" className="loading icon">
                    <FontAwesomeIcon icon={faCircleNotch} />
                </i>

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
