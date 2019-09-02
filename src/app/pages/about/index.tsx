import React, { useState, useEffect } from 'react';
import * as bulmaStyles from 'bulma';


function About() {
    return (
        <>
            <h1 className={bulmaStyles.title}>Hakkında</h1>
            <p>Bu organizasyon Türkiye'deki ve Türkçe konuşan geliştiricilerin oluşturduğu açık kaynak ekosisteminin lokomotifi olmak,
                insanları açık kaynak geliştirmeye motive etmek, farkındalık yaratmak ve engelleri ortadan kaldırmak amacıyla kurulmuştur.</p>

            <p>2015'de kurulan açık kaynak, o kadar dar bir ekosistemin içindeydi ki nasıl, nereden, ne kadar küçük adımlarla başlarsak
                başlayalım bir noktadaki eksikliği gidermiş olacaktık. Ve en ufaktan başladık. Önce GitHub'ın kendi kaynakları ile
                geliştiricilerin açık kaynak proje indeksi görevi gördük. Ama halen bunun sosyal tarafıyla ilgili yapacak çok işimiz vardı.</p>

            <p>Biz de bir adım daha attık ve ekosistemimizdeki açık kaynak geliştiricilerini, açık kaynak geliştiricilerinin projelerine hizmet
                edecek, onları tanıtacak ve ihtiyaçlarını gözükür hale getirecek şekilde misyon kapsamımızı genişlettik.</p>

            <p>Buradaki hareketi aynı zamanda bir "networking" olarak düşünürsek; amacımız hem ekosistemdeki projelere katılımcı ve sponsor
                başta olmak üzere destek bulmak hem de iletişim kanallarımız aracılığıyla halihazırda açık kaynak geliştirme literatürünü
                arttıracak şekilde insanları iletişime ve yardımlaşmaya teşvik etmek.</p>

            <p>Bunu desteklemek için; açık kaynak felsefesini çeşitli kaynak/içerik destekleriyle yaygınlaştırmak için rehberlik etmek de
                amaçlarımız arasında.</p>

            <p>Eğer proje ve birlikte çalışma deneyimini arttırmak isteyen, başka platformlarda geliştirme yapmak konusunda bir başlangıç
                arayan bir yazılımcı veya yazılımcı grubuysanız, burada kolaylıkla sizden yardım bekleyen bir proje bulabilirsiniz. Çevrenize de
                bizden bahsedin, açık kaynak toplulukta hep birlikte iletişimde ve girişimde olalım.</p>
        </>
    );
}

export {
    About as default,
};
