import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';

function GetStarted() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Başlarken" subtitle="Açık Kaynak Geliştirmeye Başlama Rehberi" />

            <Header as="h2">Neden Açık Kaynak?</Header>
            <p>
                ...
            </p>

            <Header as="h2">Nasıl Açık Kaynak?</Header>
            <p>
                ...
            </p>
        </Container>
    );
}

export {
    GetStarted as default,
};
