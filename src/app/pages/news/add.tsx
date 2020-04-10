import React from 'react';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import UnderConstruction from '../shared/elements/underConstruction';
import Heading from '../shared/elements/heading';

function NewsAdd() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Haber Ekle" subtitle="Açık Kaynak ekosistemi ile ilgili haber girişi" />

            <p>
                Açık Kaynak ekosistemi ile ilgili haber niteliği taşıyan geliştirme,
                etkinlik ve ürün haberlerini bizlerle paylaşıp yayınlamamızı ve
                kitlemize duyurmamızı sağlayabilirsiniz.
            </p>

            <UnderConstruction />
        </Container>
    );
}

export {
    NewsAdd as default,
};
