import React from 'react';

const bulmaStyles = {};

function NotFound() {
    return (
        <>
            <h1 className={bulmaStyles.title}>Not Found</h1>

            Page not found
        </>
    );
}

export {
    NotFound as default,
};
