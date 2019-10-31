import React from 'react';
import * as path from 'path-browser';
import ReactMarkdown from 'react-markdown';

function isAbsolutePath(pathString: string): boolean {
    return /^(?:\/|[a-z]+:\/\/)/.test(pathString);
}

function getPathDirname(pathString: string): string {
    const lastSlashIndex = pathString.lastIndexOf('/');

    if (lastSlashIndex === -1) {
        return '';
    }

    return pathString.substr(0, lastSlashIndex);
}

interface GuideProps {
    metadata: any;
    datasource: any;
    history: any;
}

function View(props: GuideProps) {
    function transformLinkUri(uri: string): string {
        if (isAbsolutePath(uri)) {
            return uri;
        }

        if (props.metadata && props.metadata.path) {
            const basePath = getPathDirname(props.metadata.path);

            return path.join(basePath, uri);
        }

        return uri;
    }

    function handleClick(ev): void {
        if (ev && ev.target && ev.target.tagName === 'A' && ev.target.href) {
            const uri = ev.target.getAttribute('href');

            ev.preventDefault();
            props.history.push(uri);
        }
    }

    return (
        <>
            <div onClick={handleClick}>
                <ReactMarkdown source={props.datasource} transformLinkUri={transformLinkUri} />
            </div>

            {props.metadata && props.metadata.originUrl && props.metadata.originUrl.length > 0 && (
                <div className="has-text-right">
                    <a href={props.metadata.originUrl}>
                        <i className="fa fa-fw fa-pencil-square-o" aria-hidden="true"></i> Bu sayfanın kaynağına ulaş
                    </a>
                </div>
            )}
        </>
    );
}

export {
    View as default,
};
