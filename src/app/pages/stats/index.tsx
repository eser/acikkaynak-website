import React from 'react';

import { Container, Header, Message } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareRight, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function Stats() {
    return (
        <Container className="content">
            <Header as="h1">
                <i aria-hidden="true" className="circular icon">
                    <FontAwesomeIcon icon={faCaretSquareRight} />
                </i>

                <Header.Content>
                    İstatistikler
                    <Header.Subheader>Açık Kaynak Geliştirme İstatistikleri</Header.Subheader>
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
    Stats as default,
};
