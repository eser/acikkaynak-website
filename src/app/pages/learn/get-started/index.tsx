import React from 'react';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import UnderConstruction from '../../shared/elements/underConstruction';

function GetStarted() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Başlarken" subtitle="Açık Kaynak Geliştirmeye Başlama Rehberi" />

            <UnderConstruction />
        </Container>
    );
}

export {
    GetStarted as default,
};
