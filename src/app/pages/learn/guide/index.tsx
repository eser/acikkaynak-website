import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Header } from 'semantic-ui-react';

import View from './view';

const dataOriginUrl = 'https://github.com/acikkaynak/acikkaynak/tree/master/Icerik/';
const dataSourceUrl = 'https://raw.githubusercontent.com/acikkaynak/acikkaynak/master/Icerik/';

async function getContentFetch(contentPath: string) {
    const response = await fetch(`${dataSourceUrl}${contentPath}`);
    const responseBody = await response.text();

    return {
        datasource: responseBody,
        metadata: {
            originUrl: `${dataOriginUrl}${contentPath}`,
            sourceUrl: `${dataSourceUrl}${contentPath}`,
            path: contentPath,
        },
    };
}

async function getContent(contentPath: string) {
    let contentPath_ = contentPath || '';

    if (contentPath_.length === 0) {
        contentPath_ = 'README.md';
    }
    else if (contentPath_.substr(-3) !== '.md') {
        if (contentPath_.substr(-1) === '/') {
            contentPath_ += 'README.md';
        }
        else {
            contentPath_ += '/README.md';
        }
    }

    return getContentFetch(contentPath_);
}


interface GuideProps {
    contentPath: string;
}

function Guide(props: GuideProps) {
    const [ content, setContent ] = useState(null);
    const history = useHistory();

    useEffect(() => {
            (async function () {
                const content = await getContent(props.contentPath);

                setContent(content);
            })();
        },
        [ props.contentPath ],
    );

    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">Rehber</Header>

            {content && (
                <View datasource={content.datasource} metadata={content.metadata} history={history} />
            )}
        </Container>
    );
}

export {
    Guide as default,
};
