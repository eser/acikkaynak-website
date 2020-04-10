import React from 'react';

import { Message } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function UnderConstruction() {
    return (
        <Message icon>
            <i aria-hidden="true" className="loading icon">
                <FontAwesomeIcon icon={faCircleNotch} />
            </i>

            <Message.Content>
                <Message.Header>Bu sayfa yapım aşamasında.</Message.Header>
                <br />
                Eğer geliştirme ile ilgili katkıda bulunabileceğinizi düşünüyorsanız
                { ' ' }
                <a href="https://github.com/acikkaynak/acikkaynak-website">sitemizin kaynak kodlarına</a>
                { ' ' }
                ulaşım sağlayarak bize yardımcı olabilirsiniz.
            </Message.Content>
        </Message>
    );
}

export {
    UnderConstruction as default,
};
