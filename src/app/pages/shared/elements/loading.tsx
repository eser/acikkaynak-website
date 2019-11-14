import React from 'react';

import { Loader } from 'semantic-ui-react';

function Loading() {
    return (
        <Loader inline="centered" content="Yükleniyor..." active />
    );
}

export {
    Loading as default,
};
