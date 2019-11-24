import React from 'react';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../shared/elements/heading';
import UnderConstruction from '../shared/elements/underConstruction';

function Lists() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Listeler" subtitle="Açık Kaynak ile İlgili Proje, Organizasyon ve Sponsorlar" />

            <UnderConstruction />
        </Container>
    );
}

export {
    Lists as default,
};
