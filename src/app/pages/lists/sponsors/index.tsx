import React from 'react';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import UnderConstruction from '../../shared/elements/underConstruction';

function Sponsors() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Sponsorlar" subtitle="Açık Kaynak Geliştirme Sponsor Listesi" />

            <UnderConstruction />
        </Container>
    );
}

export {
    Sponsors as default,
};
