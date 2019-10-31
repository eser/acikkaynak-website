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
    let contentPathSafe = contentPath || '';

    if (contentPathSafe.length === 0) {
        contentPathSafe = 'README.md';
    }
    else if (contentPathSafe.substr(-3) !== '.md') {
        if (contentPathSafe.substr(-1) === '/') {
            contentPathSafe += 'README.md';
        }
        else {
            contentPathSafe += '/README.md';
        }
    }

    return getContentFetch(contentPathSafe);
}


interface GuideProps {
    contentPath: string;
}

function Guide(props: GuideProps) {
    const historyObj = useHistory();

    const [ content, setContent ] = useState(null);

    useEffect(
        () => {
            async function contentFetch() {
                const contentResponse = await getContent(props.contentPath);

                setContent(contentResponse);
            }

            contentFetch();
        },
        [ props.contentPath ],
    );

    return (
        <Container className="content" textAlign="justified">
            <Header as="h1">Rehber</Header>

            {content && (
                <View
                    datasource={content.datasource}
                    metadata={content.metadata}
                    history={historyObj}
                />
            )}
        </Container>
    );
}

export {
    Guide as default,
};
