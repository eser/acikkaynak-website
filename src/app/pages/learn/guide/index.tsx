import React, { useState, useEffect } from 'react';

const bulmaStyles = {};

interface GuideProps {
    contentPath: string;
}

function Guide(props: GuideProps) {
    const [ content, setContent ] = useState(null);

    useEffect(
        () => {
            setContent(`Talep edilen içerik yolu: /${props.contentPath}`);
        },
        [ props.contentPath ],
    );

    return (
        <>
            <h1 className={bulmaStyles.title}>Rehber</h1>

            <p>
                Bu sayfa yapım aşamasında.
                <br />
                <br />
                {content}
            </p>
        </>
    );
}

export {
    Guide as default,
};
