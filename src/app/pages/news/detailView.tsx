import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Label, Button } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

function NewsDetailView({ news }) {
    function renderTags() {
        const tagItems = news.tags.map(tag => {
            return (
                <Label key={tag.toLowerCase()} >
                    {tag.toUpperCase()}
                </Label>
            );
        });

        return tagItems;
    }

    return (
        <React.Fragment>
            <Header as="h1">
                <i aria-hidden="true" className="circular icon">
                    <FontAwesomeIcon icon={faNewspaper} />
                </i>

                <Header.Content>
                    {news.title}
                </Header.Content>
            </Header>

            <p>{news.content}</p>
            <p>{renderTags()}</p>

            <Button as={Link} content="Geri" to="/news/" secondary />
        </React.Fragment>
    );
}

export {
    NewsDetailView as default,
};
