import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';

function GetStarted() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Başlarken" subtitle="Açık kaynak geliştirmeye nedir, nasıl başlanır?" />

            <Header as="h2">Açık Kaynak Nedir?</Header>
            <p>
                Açık kaynak ekosistemini kişi ve kurumların imece usulü ördükleri
                devasa bir ağ yapısına benzetmek yanlış olmaz. Açık kaynak olarak
                sunulan herhangi bir proje, çoğunlukla bir diğer açık kaynaklı
                projeye bağımlı çalışır. Bu projeler irili ufaklı olabilir.
            </p>

            <Header as="h3">Bir projeyi açık kaynak yapan nitelikler</Header>
            <p>
                Bu projeleri “açık kaynak” olarak nitelendirmemizi sağlayan belirli
                kriterler mevcuttur,
                <br />
                <br />
                <ul>
                    <li>
                        Proje kaynak kodlarının erişilebilir olması
                    </li>
                    <li>
                        Proje kaynak kodlarıyla ilgili programın/ürünün
                        tekrar oluşturulabiliyor olması
                    </li>
                    <li>
                        Projenin bir
                        {' '}
                        <Link to="/learn/licenses/">açık kaynak lisansı</Link>
                        {' '}
                        ile yayınlanıyor olması
                    </li>
                    <li>
                        Projenin diğer kişi ve kurumların katkılarına açık bir şekilde
                        bir platformda yer alması
                    </li>
                    <li>
                        En azından yazılımın nasıl çalıştırılabileceği ile ilgili
                        bilgiler veren bir dokümantasyon
                    </li>
                </ul>
                <br />
                Yukarıdaki kriterleri tam olarak karşılamayan projeler kaynak kodlarını
                yayınlanmış olsalar dahi tam anlamıyla “açık kaynak” olarak
                değerlendirilmezler.
            </p>

            <Header as="h2">Mevcut açık kaynak projeler</Header>
            <p>
                Günümüzde GitHub gibi platformlarda birçok yazılım, yazılım modülü ve
                kütüphanesi açık kaynak olarak geliştirilmektedir. Kişi ve kurumlar
                ilgili projelerin “lisanslama” detaylarına dikkat ederek, uygun
                projeleri çeşitli amaçlarını gerçekleştirmek için
                kullanabilmektedirler.
                <br />
                <br />
                Biz Açık-Kaynak.org olarak da
                {' '}
                <Link to="/lists/projects/">Projeler bölümü</Link>
                {' '}
                altında bir listelemede bulunuyoruz, örnek projelere buradan
                erişebilirsiniz.
            </p>

            <Header as="h3">Mevcut açık kaynak projelerini kullanmak</Header>
            <p>
                Halihazırda açık kaynak hale getirilmiş projeleri kullanmak
                için en büyük koşul “lisans şartları”na uyumdur. Her açık kaynak
                proje kendi kullanıcılarına bir takım ön kullanım şartları
                sunabilirler. Örneğin bunlardan en bilineni GPL, açık kaynak
                projeyi kullanacak projenin de açık kaynak olarak yayınlanması
                koşulunu getirmektedir.
                <br />
                <br />
                Halihazırda kullandığınız açık kaynak projelere katkı yapmak
                istiyorsanız
                {' '}
                <Link to="/learn/contributing/">Katkı Sağlamak</Link>
                {' '}
                bölümünü inceleyebilirsiniz.
            </p>
        </Container>
    );
}

export {
    GetStarted as default,
};
