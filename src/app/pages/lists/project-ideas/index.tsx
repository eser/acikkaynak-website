import React from 'react';

import { Container } from 'semantic-ui-react';

import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import UnderConstruction from '../../shared/elements/underConstruction';

function ProjectIdeas() {
    return (
        <Container className="content">
            <Heading icon={faLightbulb} title="Proje Fikirleri" subtitle="Açık kaynak geliştirme için proje fikirleri" />

            <UnderConstruction />
        </Container>
    );
}

export {
    ProjectIdeas as default,
};
