import React from 'react';

import { Header, Image, Container, List } from 'semantic-ui-react';

import newsStyle from './style.less';

function NewsDetailView(props) {
    return (
        <Container className="content news-detail">
            <Image className={newsStyle.detailImage} src="https://s3-alpha-sig.figma.com/img/3269/c208/97b42900636f5caa9ad91384342d8545?Expires=1574640000&Signature=B5OeRJwtSijxJauzTVqIuGveZY0GKZA0hTq8hUSqW-lgg8l4DwMpebBpYztLFB12bdiMM7OB71f5bxmdMft-U7lE2QfYtajZCLHZ5pujgD3V-AhS0hq90j~aGMR9DXivCpNFkIPysCkeX8dzUBoFWRSggjxe7EBjO2NPe9uL5elzsR2ZwendBt1VBNoJf4TmgjMZOBIqRzyQ-h78qTAgm-Xqto4vx~zSl5TEL2dGCxF~wGHa4GZp64aTdEijeIbVJMCyfQzCKixsUPbyJdENvee9UGXQyhjlnb~-92MglGEDlhDUBnHCVF~2NiaXWmqbGC0L9pAR3JipYNYNF-8LNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

            <Header as="h1" className={newsStyle.detailHeader}>
                3 Günlük Frontend’çiler Başımıza Dev-Ops Kesildi!
            </Header>

            <p>Bunlarla baş etmesi gün geçtikçe zorlaşıyor. Olaylar bildiğiniz gibi değil. Gördüğünüz gibi ben de bilmiyorum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

            <List bulleted className={newsStyle.detailBulletList}>
                <List.Item>Gaining Access</List.Item>
                <List.Item>Inviting Friends</List.Item>
                <List.Item>Gaining Access</List.Item>
                <List.Item>Inviting Friends</List.Item>
            </List>

            <p>Bunlarla baş etmesi gün geçtikçe zorlaşıyor. Olaylar bildiğiniz gibi değil. Gördüğünüz gibi ben de bilmiyorum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </Container>
    );
}

export {
    NewsDetailView as default,
};
