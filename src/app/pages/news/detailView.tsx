import React from 'react';
import { Link } from 'react-router-dom';

import { Label, Button } from 'semantic-ui-react';

import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import Heading from '../shared/elements/heading';

function NewsDetailView(props) {
    // eslint-disable-next-line prefer-destructuring
    const news = props.news;

    function renderTags() {
        const tagItems = news.tags.map(tag => (
            <Label key={tag.toLowerCase()}>
                {tag.toUpperCase()}
            </Label>
        ));

        return tagItems;
    }

    return (
        <>
            <Heading icon={faNewspaper} title="Haberler" subtitle={news.title} />

            <p>{news.content}</p>
            <p>{renderTags()}</p>

            <Button as={Link} content="Geri" to="/news/" secondary />
        </>
    );
}

export {
    NewsDetailView as default,
};
