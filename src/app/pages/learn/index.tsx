import React from 'react';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../shared/elements/heading';
import UnderConstruction from '../shared/elements/underConstruction';

function Learn() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Eğitim" subtitle="Açık kaynak ile ilgili konularda içerik ve kaynaklar" />

            <UnderConstruction />
        </Container>
    );
}

export {
    Learn as default,
};
