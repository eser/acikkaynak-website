export default [
    {
        name: 'MIT',
        description: `Uzunluk anlamında kısa ve anlatımıyla yalın bir
                    lisanslama olan MIT, müsaması/ izin seviyesi yüksek
                    olması ile bilinir.Copyright ve lisanslama bilgileri
                    muhafaza edildiği sürece çalışmanın / kodun kullanılması,
                    değiştirilmesi ve dağıtılması ile ilgili herhangi bir
                    kısıtlama getirmez.Üstelik kaynak kodun paylaşılmasını
                    da bir gereklilik olarak öne sürmemektedir.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Özel Kullanım',
        ],
        conditions: [
            'Copyright ve lisans uyarıları',
        ],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: 'Apache License 2.0',
        description: `Müsaması/izin seviyesi yüksek bir lisans olmasıyla
                    birlikte esas şartı copyright ve lisans uyarılarının
                    korunmasıdır. MIT'den farklı olarak katılımcılar kodun
                    bir patent altında kullanımına izin verirler.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Patent Kullanımı',
            'Özel Kullanım',
        ],
        conditions: [
            'Copyright ve lisans uyarıları',
            'Yapılan değişiklikleri listeleme',
        ],
        restrictions: [
            'Yükümlülük',
            'Trademark kullanımı',
            'Garanti',
        ],
    },
    {
        name: 'GNU GPLv3 (GNU Kamu Lisansı)',
        description: `Güçlü bir "copyleft" lisansıdır. Lisanslanan
                    çalışmanın ve bu çalışmaya bağlı tüm değişiklik
                    ve sistemlerin hem aynı lisans modelinde olması
                    hem de açılmasını zorunlu tutar. Copyright ve
                    lisans uyarılarının korunması gereklidir. Ayrıca
                    katılımcılar kodun bir patent altında kullanımına
                    izin verirler.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Patent Kullanımı',
            'Özel Kullanım',
        ],
        conditions: [
            'Kaynağın tamamen açılması',
            'Copyright ve lisans uyarıları',
            'Aynı lisanslama modeli',
            'Yapılan değişiklikleri listeleme',
        ],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: 'GNU AGPLv3 (GNU Affero Kamu Lisansı)',
        description: `En güçlü copyleft lisansıdır. GPLv3'ün ağ üzerinde
                    çalışan yazılımlar için modifiye edilmiş sürümüdür.
                    Sunucuda çalışan modifiye edilmiş kodun birebir kullanıcıya
                    açılması koşuluna sahiptir.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Patent Kullanımı',
            'Özel Kullanım',
        ],
        conditions: [
            'Kaynağın tamamen açılması',
            'Copyright ve lisans uyarıları',
            'Ağ kullanımı dağıtımı',
            'Aynı lisanslama modeli',
            'Yapılan değişiklikleri listeleme',
        ],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: 'GNU LGPLv3',
        description: `Bu copyleft lisansın koşulu tüm kaynak kodunun ve
                    değişikliklerin aynı lisansla veya GNU GPLv3 lisansıyla
                    açılmasıdır. Copyright ve lisans uyarılarının
                    korunması gereklidir. Ayrıca katılımcılar kodun bir patent
                    altında kullanımına izin verirler. Ancak bu lisanslanmış
                    kodu kütüphane olarak kullanan daha büyük işler için aynı
                    lisanslama koşulu geçerli değildir.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Patent Kullanımı',
            'Özel Kullanım',
        ],
        conditions: [
            'Kaynağın tamamen açılması',
            'Copyright ve lisans uyarıları',
            'Aynı lisanslama modeli (Kütüphane)',
            'Yapılan değişiklikleri listeleme',
        ],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: 'Mozilla Kamu Lisansı 2.0',
        description: `Bu zayıf copyleft lisansın koşulu lisanslanmış kaynak kodunun ve bu
                    koddaki değişikliklerin kaynak kodunun aynı lisansla herkese
                    açılmasıdır(ya da başka durumlar için GNU lisanslarından biri ile).
                    Telif hakkı velisans uyarılarının korunması gereklidir. Ayrıca
                    katılımcılar kodunbir patent altında kullanımına izin verirler.
                    Ancak, lisanslanmış kodukullanan daha büyük bir proje daha farklı
                    koşullarda ve daha büyük projedekikaynak kodlarının açılmadan
                    (sadece alınan ve düzenlenen lisanslı kodun dosyalarının aynı
                    lisansla yayınlanmasıyla) dağıtılması mümkündür.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Patent Kullanımı',
            'Özel Kullanım',
        ],
        conditions: [
            'Kaynağın tamamen açılması',
            'Copyright ve lisans uyarıları',
            'Aynı lisanslama modeli (Dosya)',
        ],
        restrictions: [
            'Ticari Marka Kullanımı',
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: 'Boost Software License (BSLv1.0)',
        description: `Yalnızca kaynak için telif hakkı ve lisans uyarılarının korunması
                    gereksinimini içeren basit bir lisans. Lisanslanmış işler,
                    düzenlemeler ve daha büyük projeler farklı koşullarda ve kaynak
                    kodunu açmaksızın dağıtılabilir.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Özel Kullanım',
        ],
        conditions: [
            'Copyright ve lisans uyarıları',
        ],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: 'The Unlicense',
        description: `Herhangi bir koşulu olmayan ve tüm işi kamu malı olarak adamayı
                    sağlayan bir lisans. Unlicense ile lisanslanan tüm işler,
                    değişiklikler ve daha büyük işler farklı koşullarda ve kaynak
                    kodu olmaksızın dağıtılabilir.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Özel Kullanım',
        ],
        conditions: [],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: 'Orijinal BSD Lisansı (4 maddeli BSD)',
        description: `Telif hakkı ve lisans uyarılarının korunması gereklidir.
                    BSD 4-clause ile lisanslanan yazılımı kullanan herhangi birisi
                    ürününün reklam materyallerinde eğer lisanslanmış yazılımın bir
                    özelliğini ya da kullanımını gösterecek ise "Bu ürün
                    &lt;organizasyon&gt;vtarafından geliştirilen bir yazılımı kullanır"
                    ibaresi bulunmalıdır. Bu yazılımdan türeyen herhangi bir ürünün
                    tanıtımında Organizasyonun veya katılımcıların ismi özel izin
                    alınmaksızın kullanılamaz.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Özel Kullanım',
        ],
        conditions: [
            'Copyright ve lisans uyarıları',
            'İsim Kullanımı',
            'Reklam bilgilendirmesi',
        ],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: '3 Maddeli BSD (Yeni BSD) Lisansı',
        description: `Orijinal BSD lisansının tartışmalı reklam bilgilendirmesi
                    ile alakalı olan maddesinin kaldırılmış sürümüdür.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Özel Kullanım',
        ],
        conditions: [
            'Copyright ve lisans uyarıları',
            'İsim Kullanımı',
        ],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: '2 Maddeli BSD (FreeBSD) Lisansı',
        description: `3 Maddeli BSD lisansının "İsim kullanımı" şartının kaldırılmış
                    sürümüdür.`,
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Özel Kullanım',
        ],
        conditions: [
            'Copyright ve lisans uyarıları',
        ],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
    {
        name: '0 Maddeli BSD Lisansı',
        description: 'Herhangi bir koşulu olmayan bir kamu malı lisansıdır (The Unlicense\'a benzer).',
        permissions: [
            'Ticari Kullanım',
            'Dağıtım',
            'Değiştirme',
            'Özel Kullanım',
        ],
        conditions: [],
        restrictions: [
            'Yükümlülük',
            'Garanti',
        ],
    },
];
