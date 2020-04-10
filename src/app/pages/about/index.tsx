import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Header, Image } from 'semantic-ui-react';

import globalStyles from '../../layouts/shared/assets/global.less';
import LogoImage from '../../layouts/shared/assets/logo-black.svg';
import localStyles from './style.less';

function About() {
    return (
        <Container className="content">
            <Image size="medium" src={LogoImage} className={localStyles.logo} centered />

            <Header as="h1" className={`${globalStyles.text} ${globalStyles.noCommonLigatures}`}>Hakkımızda</Header>

            <p>
                Acik-kaynak.org organizasyonu Türkiye'deki ve Türkçe konuşan geliştiricilerin
                oluşturduğu açık kaynak ekosisteminin lokomotifi olmak, insanları açık kaynak
                geliştirmeye motive etmek, farkındalık yaratmak ve engelleri ortadan kaldırmak
                amacıyla kurulmuştur.
            </p>

            <p>
                Bugün yürüttüğümüz faaliyetleri açık kaynak geliştirmeye yönelik içerik üretmek,
                bir şemsiye altında projeleri - paydaşları - toplulukları bir araya getirmek,
                yeni kişi ve kuruluşları ekosistemin içerisine çekmek, topluluk oluşturmak,
                etkinlikleri desteklemek ve yardımlaşmak olarak özetleyebiliriz.
            </p>

            <Header as="h2" className={`${globalStyles.text} ${globalStyles.noCommonLigatures}`}>Geçmiş</Header>

            <p>
                2015'de harekete geçtiğimizde gelişmeye oldukça açık bir ekosistem içerisinde
                ne kadar küçük adımlarla başlarsak başlayalım bir noktadaki eksikliği gidermiş
                olacağımızı fark ettik. Ve en ufaktan başladık. Önce GitHub'ın kendi kaynakları
                ile geliştiricilerin açık kaynak proje indeksi görevi gördük. Ama halen bunun
                sosyal tarafıyla ilgili yapacak çok işimiz vardı.
            </p>

            <p>
                Belirli bir topluluk gücüne ulaştıktan sonra ekosistemimizdeki açık kaynak
                geliştiricilerini, açık kaynak geliştiricilerinin projelerine hizmet edecek,
                onları tanıtacak ve ihtiyaçlarını gözükür hale getirecek şekilde misyon
                kapsamımızı genişlettik.
            </p>

            <p>
                2020'de artık açık kaynak için daha net içerikler üretmek, canlı yayınlar yapmak,
                topluluğu bir araya getirecek etkinlikler ve proje çalışmaları düzenlemek için
                yeni bir yol haritası oluşturduk. Bugün de bu çalışmalarımızı sürdürmekteyiz.
            </p>

            <Header as="h2" className={`${globalStyles.text} ${globalStyles.noCommonLigatures}`}>Ne sağlıyoruz?</Header>

            <p>
                Bir şemsiye organizasyon görevi görerek topluluğa bir "networking" platformu
                oluşturuyoruz. Açık kaynak ekosistemine dahil olmak isteyenler için imkanlar
                oluşturup, halihazırda ekosistemin içerisindeki aktörleri de birbirleri ile
                iletişim kurabilecekleri şekilde yakınlaştırıyoruz.
            </p>

            <Header as="h2" className={`${globalStyles.text} ${globalStyles.noCommonLigatures}`}>Nasıl dahil olunur?</Header>

            <p>
                Bugün için
                { ' ' }
                <Link to="/support-us/">
                    Bizi Destekle!
                </Link>
                'de belirttiğimiz gibi iletişim kanallarımızdan bizi takip etmeniz bize katılmanız
                için tek kriterimizdir.
            </p>

        </Container>
    );
}

export {
    About as default,
};
