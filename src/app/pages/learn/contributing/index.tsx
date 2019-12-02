import React from 'react';

import { Container, Header } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';

function Contributing() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Katkı Sağlamak" subtitle="Mevcut projelere nasıl katkı sağlarız?" />

            <Header as="h2">Mevcut açık kaynak projelerine katkı sağlamak</Header>
            <p>
                Açık Kaynak bir projeye ve katkı sağlamak istiyorsanız, katkı
                sağlamanın çeşitli yolları vardır. Katkı tanımı kod geliştirme
                ile sınırlı olmamakla birlikte, projenin gelişimi için
                gerçekleştirdiğiniz etkisi kalıcı olan her eylem bir katkı
                olarak tanımlanabilir.
            </p>

            <Header as="h3">Katkı örnekleri</Header>
            <p>
                <ul>
                    <li>Projeye yeni bir özellik eklemek</li>
                    <li>Projenin mevcut geliştirmesine yardımcı olmak</li>
                    <li>Projeye “test” yazmak</li>
                    <li>Projenin kodda yer alan bir hatasını düzeltmek</li>
                    <li>Proje dokümantasyonuna katkıda bulunmak</li>
                    <li>Projeye ait iletişim kanallarında kullanıcılara yardımcı olmak</li>
                    <li>Projeye geri bildirimde bulunmak</li>
                    <li>Proje planlamasında yer almak</li>
                </ul>
            </p>

        </Container>
    );
}

export {
    Contributing as default,
};
