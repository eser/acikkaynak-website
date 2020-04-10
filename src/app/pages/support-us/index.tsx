import React from 'react';

import { Container, Header, Image } from 'semantic-ui-react';

import globalStyles from '../../layouts/shared/assets/global.less';
import LogoImage from '../../layouts/shared/assets/logo-black.svg';
import localStyles from './style.less';

function SupportUs() {
    return (
        <Container className="content">
            <Image size="medium" src={LogoImage} className={localStyles.logo} centered />

            <Header as="h1" className={`${globalStyles.text} ${globalStyles.noCommonLigatures}`}>Açık-Kaynak.org'u Destekle</Header>

            <p>
                Dijital mecralarda (GitHub, Twitter, YouTube, v.s.) bizi takip ediyor olmanız
                ve iletişim kanallarımıza (Telegram, v.s.) dahil olmanız yeterli.
                Düzenleyeyeceğimiz online/fiziksel tüm etkinliklere katılımınız ve çevrenize
                bizden bahsediyor olmanız bizlere en büyük desteği sağlayacaktır.
            </p>
        </Container>
    );
}

export {
    SupportUs as default,
};
