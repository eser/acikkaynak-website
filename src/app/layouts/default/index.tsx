import React from 'react';

import ResponsiveContainer from './responsiveContainer';
import Footer from './footer';

function Layout(props) {
    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help

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
