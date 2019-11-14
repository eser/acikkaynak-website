import React, { Suspense, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import Heading from '../../shared/elements/heading';
import Loading from '../../shared/elements/loading';
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
        <Container className="content">
            <Heading icon={faCaretSquareRight} title="Rehber" subtitle="Açık Kaynak ile İlgili Kaynaklar" />

            <Suspense fallback={Loading}>
                {content && (
                    <View
                        datasource={content.datasource}
                        metadata={content.metadata}
                        history={historyObj}
                    />
                )}
            </Suspense>
        </Container>
    );
}

export {
    Guide as default,
};
