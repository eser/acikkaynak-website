import { Responsive } from 'semantic-ui-react';

function getWidth(): number | string {
    const isSSR = (typeof window === 'undefined');

    if (isSSR) {
        return Responsive.onlyTablet.minWidth;
    }

    return window.innerWidth;
}

export {
    getWidth as default,
};
