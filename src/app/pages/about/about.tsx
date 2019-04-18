import React, { useState, useEffect } from 'react';
import * as bulmaStyles from 'bulma';


function About() {
    return (
        <>
            <h1 className={bulmaStyles.title}>Hakkında</h1>
            <p>
                Bu organizasyon <b>GitHub'ın</b> kendi doğal araçları kullanılarak açık kaynak'a katkı sağlamak amacıyla oluşturulmuştur.</p>

            <p>Türkiye'de geliştirilen açık kaynaklı çalışmalar için bir indeks oluşturarak,
                açık kaynak projelerin tanınması için imkanlar sağlamaya çalışıyoruz.</p>

            <p>Bunu aynı zamanda bir "networking" olarak düşünürsek; hem indeksimizde yer alan proje linkleri
                hem de slack grubumuz aracılığıyla açık kaynak projelerine katılımcı bulmak,
    bu insanlarla iletişime geçmek ve gerek fikir gerek çalışma bazında yardımlaşma için bir platform görevini üstleniyoruz.</p>
            <p>Aynı zamanda; açık kaynak felsefesini çeşitli kaynak/içerik destekleriyle
                kullanıcılara aktarmak ve projelere nasıl katkıda bulunabileceği
                     konusunda rehberlik etmek amaçlarımız arasında.</p>

            <p>Eğer proje ve birlikte çalışma deneyimini arttırmak isteyen,
                başka platformlarda geliştirme yapmak konusunda bir başlangıç arayan bir yazılımcı veya yazılımcı grubuysanız,
                burada kolaylıkla sizden yardım bekleyen bir proje bulabilirsiniz.Çevrenize de bizden bahsedin,
                    açık kaynak toplulukta hep birlikte iletişimde ve girişimde olalım.</p>
        </>
    );
}

export {
    About as default,
};
