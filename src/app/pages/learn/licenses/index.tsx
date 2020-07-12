import React from 'react';

import { Container, Grid, Label, Card, LabelGroup } from 'semantic-ui-react';

import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';

import globalStyles from '../../../layouts/shared/assets/global.less';

function Licenses() {
    return (
        <Container className="content">
            <Heading icon={faClosedCaptioning} title="Lisanslar" subtitle="Açık kaynak lisansları" />

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        MIT
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Uzunluk anlamında kısa ve anlatımıyla yalın bir
                                lisanslama olan MIT, müsaması/izin seviyesi yüksek
                                olması ile bilinir. Copyright ve lisanslama bilgileri
                                muhafaza edildiği sürece çalışmanın/kodun kullanılması,
                                değiştirilmesi ve dağıtılması ile ilgili herhangi bir
                                kısıtlama getirmez. Üstelik kaynak kodun paylaşılmasını
                                da bir gereklilik olarak öne sürmemektedir.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <LabelGroup color="blue">
                                    <Label>Copyright ve lisans uyarıları</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        Apache License 2.0
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Müsaması/izin seviyesi yüksek bir lisans olmasıyla
                                birlikte esas şartı copyright ve lisans uyarılarının
                                korunmasıdır. MIT'den farklı olarak katılımcılar kodun
                                bir patent altında kullanımına izin verirler.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Patent Kullanımı</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <LabelGroup color="blue">
                                    <Label>Copyright ve lisans uyarıları</Label>
                                    <Label>Yapılan değişiklikleri listeleme</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Trademark Kullanımı</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        GNU GPLv3 (GNU Kamu Lisansı)
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Güçlü bir "copyleft" lisansıdır. Lisanslanan
                                çalışmanın ve bu çalışmaya bağlı tüm değişiklik
                                ve sistemlerin hem aynı lisans modelinde olması
                                hem de açılmasını zorunlu tutar. Copyright ve
                                lisans uyarılarının korunması gereklidir. Ayrıca
                                katılımcılar kodun bir patent altında kullanımına
                                izin verirler.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Patent Kullanımı</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <LabelGroup color="blue">
                                    <Label>Kaynağın tamamen açılması</Label>
                                    <Label>Copyright ve lisans uyarıları</Label>
                                    <Label>Aynı lisanslama modeli</Label>
                                    <Label>Yapılan değişiklikleri listeleme</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        GNU AGPLv3 (GNU Affero Kamu Lisansı)
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                En güçlü copyleft lisansıdır. GPLv3'ün ağ üzerinde
                                çalışan yazılımlar için modifiye edilmiş sürümüdür.
                                Sunucuda çalışan modifiye edilmiş kodun birebir kullanıcıya
                                açılması koşuluna sahiptir.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Patent Kullanımı</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <LabelGroup color="blue">
                                    <Label>Kaynağın tamamen açılması</Label>
                                    <Label>Copyright ve lisans uyarıları</Label>
                                    <Label>Ağ kullanımı dağıtımı</Label>
                                    <Label>Aynı lisanslama modeli</Label>
                                    <Label>Yapılan değişiklikleri listeleme</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        GNU LGPLv3
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Bu copyleft lisansın koşulu tüm kaynak kodunun ve
                                değişikliklerin aynı lisansla veya GNU GPLv3 lisansıyla
                                açılmasıdır. Copyright ve lisans uyarılarının
                                korunması gereklidir. Ayrıca katılımcılar kodun bir patent
                                altında kullanımına izin verirler. Ancak bu lisanslanmış
                                kodu kütüphane olarak kullanan daha büyük işler için aynı
                                lisanslama koşulu geçerli değildir.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Patent Kullanımı</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <LabelGroup color="blue">
                                    <Label>Kaynağın tamamen açılması</Label>
                                    <Label>Copyright ve lisans uyarıları</Label>
                                    <Label>Aynı lisanslama modeli (Kütüphane)</Label>
                                    <Label>Yapılan değişiklikleri listeleme</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        Mozilla Kamu Lisansı 2.0
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Bu zayıf copyleft lisansın koşulu lisanslanmış kaynak kodunun ve bu
                                koddaki değişikliklerin kaynak kodunun aynı lisansla herkese
                                açılmasıdır(ya da başka durumlar için GNU lisanslarından biri ile).
                                Telif hakkı velisans uyarılarının korunması gereklidir. Ayrıca
                                katılımcılar kodunbir patent altında kullanımına izin verirler.
                                Ancak, lisanslanmış kodukullanan daha büyük bir proje daha farklı
                                koşullarda ve daha büyük projedekikaynak kodlarının açılmadan
                                (sadece alınan ve düzenlenen lisanslı kodun dosyalarının aynı
                                lisansla yayınlanmasıyla) dağıtılması mümkündür.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Patent Kullanımı</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <LabelGroup color="blue">
                                    <Label>Kaynağın tamamen açılması</Label>
                                    <Label>Copyright ve lisans uyarıları</Label>
                                    <Label>Aynı lisanslama modeli (Dosya)</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Ticari Marka Kullanımı</Label>
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        Boost Software License (BSLv1.0)
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Yalnızca kaynak için telif hakkı ve lisans uyarılarının korunması
                                gereksinimini içeren basit bir lisans. Lisanslanmış işler,
                                düzenlemeler ve daha büyük projeler farklı koşullarda ve kaynak
                                kodunu açmaksızın dağıtılabilir.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <LabelGroup color="blue">
                                    <Label>Copyright ve lisans uyarıları</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        The Unlicense
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Herhangi bir koşulu olmayan ve tüm işi kamu malı olarak adamayı
                                sağlayan bir lisans. Unlicense ile lisanslanan tüm işler,
                                değişiklikler ve daha büyük işler farklı koşullarda ve kaynak
                                kodu olmaksızın dağıtılabilir.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        Orijinal BSD Lisansı (4 maddeli BSD)
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Telif hakkı ve lisans uyarılarının korunması gereklidir.
                                BSD 4-clause ile lisanslanan yazılımı kullanan herhangi birisi
                                ürününün reklam materyallerinde eğer lisanslanmış yazılımın bir
                                özelliğini ya da kullanımını gösterecek ise "Bu ürün
                                &lt;organizasyon&gt;vtarafından geliştirilen bir yazılımı kullanır"
                                ibaresi bulunmalıdır. Bu yazılımdan türeyen herhangi bir ürünün
                                tanıtımında Organizasyonun veya katılımcıların ismi özel izin
                                alınmaksızın kullanılamaz.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                    <LabelGroup color="blue">
                                        <Label>Copyright ve lisans uyarıları</Label>
                                        <Label>Reklam bilgilendirmesi</Label>
                                        <Label>İsim kullanımı</Label>
                                    </LabelGroup>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        3 Maddeli BSD (Yeni BSD) Lisansı
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Orijinal BSD lisansının tartışmalı reklam bilgilendirmesi
                                ile alakalı olan maddesinin kaldırılmış sürümüdür.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                    <LabelGroup color="blue">
                                        <Label>Copyright ve lisans uyarıları</Label>
                                        <Label>İsim kullanımı</Label>
                                    </LabelGroup>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        2 Maddeli BSD (FreeBSD) Lisansı
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                3 Maddeli BSD lisansının "İsim kullanımı" şartının kaldırılmış
                                sürümüdür.
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                    <LabelGroup color="blue">
                                        <Label>Copyright ve lisans uyarıları</Label>
                                    </LabelGroup>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        0 Maddeli BSD Lisansı
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Grid stackable>
                        <Grid.Row>
                            <Grid.Column width={7} className={`${globalStyles.text} ${globalStyles.mini}`}>
                                Herhangi bir koşulu olmayan bir kamu malı lisansıdır
                                (The Unlicense'a benzer).
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>İzinler</strong>
                                </div>
                                <LabelGroup color="green">
                                    <Label>Ticari Kullanım</Label>
                                    <Label>Dağıtım</Label>
                                    <Label>Değiştirme</Label>
                                    <Label>Özel Kullanım</Label>
                                </LabelGroup>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <LabelGroup color="red">
                                    <Label>Yükümlülük</Label>
                                    <Label>Garanti</Label>
                                </LabelGroup>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        </Container>
    );
}

export {
    Licenses as default,
};
