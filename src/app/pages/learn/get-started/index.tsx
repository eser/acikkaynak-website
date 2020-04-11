import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';

function GetStarted() {
    return (
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Başlarken" subtitle="Açık kaynak nedir, nasıl başlanır?" />

            <Header as="h2">Açık Kaynak Nedir?</Header>
            <p>
                Üretilen veya geliştirilen bir ürünün kaynak kodlarının “açık bir
                halde” ulaşılabilir olmasına “açık kaynak” ismini vermekteyiz.
                <br />
                <br />
                Açık kaynak ekosistemini kişi ve kurumların imece usulü ördükleri
                devasa bir ağ yapısına benzetmek yanlış olmaz. Açık kaynak olarak
                sunulan herhangi bir ürün/geliştirme, çoğunlukla bir diğer açık
                kaynaklı ürüne/geliştirmeye bağımlı çalışır. Bu çalışmaların
                büyüklüğü bir kriter değildir, büyük bir çalışma da küçük bir
                çalışma da olabilirler.
                <br />
                <br />
                Kek tarifi vermekten, uçak yapımına kadar her şey açık kaynak
                olabileceği gibi biz açık-kaynak.org kapsamında hedefimizi biraz
                daraltarak açık kaynaklı yazılım projeleri ve bu projelerin
                çevresindeki kaynaklardan bahsetmekteyiz.
            </p>

            <Header as="h3">Bir projeyi açık kaynak yapan nitelikler</Header>
            <p>
                Projeleri “açık kaynak” olarak nitelendirmemizi sağlayan belirli
                kriterler mevcuttur,
                <br />
                <br />
                <ul>
                    <li>
                        Proje kaynak kodlarının kullanıcıları tarafından
                        erişilebilir olması
                    </li>
                    <li>
                        Proje kaynak kodlarıyla ilgili çıktının derlenebilir
                        ve tekrar oluşturulabilir olması
                    </li>
                    <li>
                        Projenin bir
                        {' '}
                        <Link to="/learn/licenses/">açık kaynak lisansı</Link>
                        {' '}
                        ile yayınlanıyor olması
                    </li>
                    <li>
                        Projenin diğer kişi ve kurumların katkılarına açık bir
                        şekilde bir platformda yer alması
                    </li>
                    <li>
                        En azından projenin nasıl çalıştırılabileceği ile ilgili
                        bilgiler veren bir dokümantasyon
                    </li>
                </ul>
                <br />
                Yukarıdaki kriterleri tam olarak karşılamayan projeler kaynak
                kodlarını yayınlanmış olsalar dahi tam anlamıyla “açık kaynak”
                olarak değerlendirilmezler.
            </p>

            <Header as="h2">Açık Kaynak Projeler</Header>
            <p>
                Günümüzde GitHub gibi platformlarda birçok yazılım, yazılım
                modülü ve kütüphanesi açık kaynak olarak geliştirilmektedir. Kişi
                ve kurumlar ilgili projelerin “lisanslama” detaylarına dikkat
                ederek, uygun projeleri çeşitli amaçlarını gerçekleştirmek için
                kullanabilmektedirler. Bu ekosisteme ister kullanıcı ister
                katılımcı olarak dahil olabilirsiniz.
            </p>

            <Header as="h3">Açık kaynak kullanıcısı olmak</Header>
            <p>
                Halihazırda açık kaynak hale getirilmiş projeleri kullanmak
                için en büyük koşul “lisans şartları”na uyumdur. Her açık kaynak
                proje kendi kullanıcılarına bir takım ön kullanım şartları
                sunabilirler. Örneğin bunlardan en bilineni GPL, açık kaynak
                projeyi kullanacak projenin de açık kaynak olarak yayınlanması
                koşulunu getirmektedir.
                <br />
                <br />
                Biz açık-kaynak.org olarak da
                {' '}
                <Link to="/lists/projects/">Projeler bölümü</Link>
                {' '}
                altında bir listelemede bulunuyoruz, örnek projelere buradan
                erişebilirsiniz.
            </p>

            <Header as="h3">Açık kaynak katılımcısı olmak</Header>
            <p>
                Açık kaynak ekosistemine katkıda bulunmak, gerek bireysel
                gerekse kurumunuz/organizasyonunuz ile birlikte bir katılımcı
                haline gelmek istiyorsanız birkaç seçeneğiniz mevcut.
                <br />
                <br />
                Halihazırda kullandığınız açık kaynak projelere katkı yapmak
                istiyorsanız
                {' '}
                <Link to="/learn/contributing/">Katkı Sağlamak</Link>
                {' '}
                bölümünü inceleyebilirsiniz.
                <br />
                <br />
                Yeni bir proje fikriniz veya halihazırda geliştirdiğiniz bir
                proje var ve bunu açık kaynak bir biçimde başlatmak/yayınlamak
                istiyorsanız,
                {' '}
                <Link to="/learn/starting-new/">Yeni Proje Başlatmak</Link>
                {' '}
                bölümünü inceleyebilirsiniz.
                <br />
                <br />
                Bir kurumun içindeyseniz ve kurumun haklarına zarar vermeksizin,
                kurumun içinde veya dışarıya açık bir açık kaynak dönüşüm
                hedefliyorsanız
                {' '}
                <Link to="/learn/for-corporations/">Kurumlar İçin</Link>
                {' '}
                bölümünü inceleyebilirsiniz.
            </p>
        </Container>
    );
}

export {
    GetStarted as default,
};
