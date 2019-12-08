import React from 'react';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import UnderConstruction from '../../shared/elements/underConstruction';

function StartingNew() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Yeni Proje Başlatmak" subtitle="Yeni bir açık kaynak proje nasıl başlatırız?" />

            {/*
            <Header as="h2">Mevcut açık kaynak projelere katkı sağlamak</Header>

            <p>
                Açık Kaynaklı yazılımlar yasal sahiplerinin izniyle, belirli bir
                lisans seçilerek halka açık bir platforma (GitHub, sourceforge,
                Bitbucket, GitLab v.s.) yüklenerek başlatılabilirler.
            </p>
            */}

            <UnderConstruction />
        </Container>
    );
}

export {
    StartingNew as default,
};
