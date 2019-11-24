import React from 'react';

import { Message } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function ContentNotFound() {
    return (
        <Message icon>
            <i aria-hidden="true" className="icon">
                <FontAwesomeIcon icon={faCircleNotch} />
            </i>

            <Message.Content>
                <Message.Header>Talep edilen içerik bulunamadı.</Message.Header>
            </Message.Content>
        </Message>
    );
}

export {
    ContentNotFound as default,
};
