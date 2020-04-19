import React from 'react';
import * as path from 'path-browser';
import ReactMarkdown from 'react-markdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

function isAbsolutePath(pathString: string): boolean {
    return /^(?:\/|[a-z]+:\/\/)/.test(pathString);
}

function getPathDirname(pathString: string): string {
    const lastSlashIndex = pathString.lastIndexOf('/');

    if (lastSlashIndex === -1) {
        return '';
    }

    return `../${pathString.substr(0, lastSlashIndex)}`;
}

interface ViewProps {
    metadata: any;
    datasource: any;
    history: any;
}

function View(props: ViewProps) {
    function transformLinkUri(uri: string): string {
        if (!isAbsolutePath(uri) && props.metadata && props.metadata.path) {
            const basePath = getPathDirname(props.metadata.path);

            return ReactMarkdown.uriTransformer(
                path.join(basePath, uri),
            );
        }

        return ReactMarkdown.uriTransformer(uri);
    }

    function handleClick(ev): void {
        if (ev && ev.target && ev.target.tagName === 'A' && ev.target.href) {
            const uri = ev.target.getAttribute('href');

            if (!isAbsolutePath(uri)) {
                ev.preventDefault();
                props.history.push(uri);
            }
        }
    }

    return (
        <>
            <div onClick={handleClick} onKeyPress={() => {}} role="presentation">
                <ReactMarkdown source={props.datasource} transformLinkUri={transformLinkUri} />
            </div>

            {props.metadata && props.metadata.originUrl && props.metadata.originUrl.length > 0 && (
                <div className="has-text-right">
                    <a href={props.metadata.originUrl}>
                        <FontAwesomeIcon icon={faPencilAlt} />
                        {' '}
                        Bu sayfanın kaynağına ulaş
                    </a>
                </div>
            )}
        </>
    );
}

export {
    View as default,
};
