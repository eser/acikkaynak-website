import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import globalStyles from '../../layouts/shared/assets/global.less';

function NotFound() {
    return (
        <Container className="content">
            <Header as="h1" className={`${globalStyles.text} ${globalStyles.noCommonLigatures}`}>İçerik Bulunamadı</Header>

            Ulaşmaya çalıştığınız sayfa yayından kaldırılmış veya teknik bir
            sorun nedeniyle şu anda erişilebilir durumda değil.
            <br />
            <br />
            Eğer yaşanan sorunu düzeltebileceğinize inanıyorsanız
            { ' ' }
            <a href="https://github.com/acikkaynak/acikkaynak-website">sitemizin kaynak kodlarına</a>
            { ' ' }
            katkıda bulunarak bize yardımcı olabilirsiniz.
        </Container>
    );
}

export {
    NotFound as default,
};
