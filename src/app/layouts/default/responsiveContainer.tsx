import React from 'react';

import DesktopContainer from './desktopContainer';
import MobileContainer from './mobileContainer';

function ResponsiveContainer(props) {
    return (
        <>
            <DesktopContainer {...props} />
            <MobileContainer {...props} />
        </>
    );
}

export {
    ResponsiveContainer as default,
};
