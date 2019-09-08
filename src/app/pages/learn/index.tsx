import React, { useState, useEffect } from 'react';
import * as bulmaStyles from 'bulma';

import * as path from 'path-browser';
import ReactMarkdown from 'react-markdown';

interface LearnProps {
    contentPath: string;
}

function Learn(props: LearnProps) {
    const [ content, setContent ] = useState(null);

    useEffect(
        () => {
            setContent(`Talep edilen içerik yolu: /${props.contentPath}`);
        },
        [ props.contentPath ]
    );

    return (
        <>
            <h1 className={bulmaStyles.title}>Eğitim</h1>

            <p>
                Bu sayfa yapım aşamasında.<br />
                <br />
                {content}
            </p>
        </>
    );
}

export {
    Learn as default,
};
