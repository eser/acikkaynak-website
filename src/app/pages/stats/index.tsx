import React from 'react';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../shared/elements/heading';
import UnderConstruction from '../shared/elements/underConstruction';

function Stats() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="İstatistikler" subtitle="Açık kaynak geliştirme istatistikleri" />

            <UnderConstruction />
        </Container>
    );
}

export {
    Stats as default,
};
