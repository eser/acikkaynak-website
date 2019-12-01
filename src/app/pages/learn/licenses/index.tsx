import React from 'react';

import { Container, Grid, Label, Card } from 'semantic-ui-react';

import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';

import globalStyles from '../../../layouts/shared/assets/global.less';

function Licenses() {
    return (
        <Container className="content">
            <Heading icon={faClosedCaptioning} title="Lisanslar" subtitle="Açık Kaynak Lisansları" />

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
                                <Label color="green">Ticari Kullanım</Label>
                                <Label color="green">Dağıtım</Label>
                                <Label color="green">Değiştirme</Label>
                                <Label color="green">Özel Kullanım</Label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <Label color="blue">Copyright ve lisans uyarıları</Label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <Label color="red">Yükümlülük</Label>
                                <Label color="red">Garanti</Label>
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
                                <Label color="green">Ticari Kullanım</Label>
                                <Label color="green">Dağıtım</Label>
                                <Label color="green">Değiştirme</Label>
                                <Label color="green">Patent Kullanımı</Label>
                                <Label color="green">Özel Kullanım</Label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <Label color="blue">Copyright ve lisans uyarıları</Label>
                                <Label color="blue">Yapılan değişiklikleri listeleme</Label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <Label color="red">Yükümlülük</Label>
                                <Label color="red">Trademark Kullanımı</Label>
                                <Label color="red">Garanti</Label>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>

            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        GPL v3 (GNU Public License)
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
                                <Label color="green">Ticari Kullanım</Label>
                                <Label color="green">Dağıtım</Label>
                                <Label color="green">Değiştirme</Label>
                                <Label color="green">Patent Kullanımı</Label>
                                <Label color="green">Özel Kullanım</Label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Şartlar</strong>
                                </div>
                                <Label color="blue">Kaynağın tamamen açılması</Label>
                                <Label color="blue">Copyright ve lisans uyarıları</Label>
                                <Label color="blue">Aynı lisanslama modeli</Label>
                                <Label color="blue">Yapılan değişiklikleri listeleme</Label>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong>Sınırlamalar</strong>
                                </div>
                                <Label color="red">Yükümlülük</Label>
                                <Label color="red">Garanti</Label>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>


            <Card fluid>
                <Card.Content textAlign="center">
                    Yakın zaman içerisinde BSD, AGPL, LGPL, Mozilla Public License,
                    BSL v.b. lisanslamalarla ilgili de içerik eklenecek.
                </Card.Content>
            </Card>
        </Container>
    );
}

export {
    Licenses as default,
};
