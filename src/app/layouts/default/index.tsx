import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

import ResponsiveContainer from './responsiveContainer';
import Footer from './footer';

function Layout(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <ResponsiveContainer>
            {props.children}

            <Footer />
        </ResponsiveContainer>
    );
}

export {
    Layout as default,
};
