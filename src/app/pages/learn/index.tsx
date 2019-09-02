import React, { useState, useEffect } from 'react';
import * as bulmaStyles from 'bulma';

import * as path from 'path-browser';
import ReactMarkdown from 'react-markdown';

interface LearnProps {
    contentPath: string;
}

function Learn(props: LearnProps) {
    return (
        <>
            <h1 className={bulmaStyles.title}>Eğitim</h1>
            <p>
                Bu sayfa yapım aşamasında.<br />
                <br />
                Talep edilen içerik yolu: /{props.contentPath}
            </p>
        </>
    );
}

export {
    Learn as default,
};
