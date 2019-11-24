import React from 'react';

import { Header } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import localStyles from './heading.less';

function Heading(props) {
    return (
        <Header as="h1" className={localStyles.headingHeader}>
            <i aria-hidden="true" className="circular icon">
                <FontAwesomeIcon icon={props.icon} />
            </i>

            <Header.Content>
                {props.title}
                {props.subtitle && (
                    <Header.Subheader>{props.subtitle}</Header.Subheader>
                )}
            </Header.Content>
        </Header>
    );
}

export {
    Heading as default,
};
