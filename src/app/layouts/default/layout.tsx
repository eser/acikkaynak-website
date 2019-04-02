import React from 'react';
import { NavLink } from 'react-router-dom';

import './assets/fonts/arbutus-slab.scss';
import fontAwesomeStyles from 'font-awesome/scss/font-awesome.scss';
import bulmaStyles from 'bulma';
import layoutStyles from './assets/styles.scss';

function Layout(props) {
    // the JSX syntax is quite intuitive but check out
    // https://facebook.github.io/react/docs/jsx-in-depth.html
    // if you need additional help

    return (
        <div className={`${bulmaStyles.hero} ${bulmaStyles.isFullheight} ${layoutStyles.isFullheight}`}>
            <header className={`${bulmaStyles.heroHead} ${layoutStyles.heroHead}`}>
                <nav className={`${bulmaStyles.navbar} ${bulmaStyles.isTransparent}`} role="navigation" aria-label="main navigation">
                    <div className={bulmaStyles.container}>
                        <div className={bulmaStyles.navbarBrand}>
                            {/* <div className={bulmaStyles.navbarItem}>
                                Darty React Hooks App
                            </div> */}
                            <span className={bulmaStyles.navbarBurger} role="button" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </span>
                        </div>
                        <div className={bulmaStyles.navbarMenu}>
                            <div className={bulmaStyles.navbarStart}>
                                <NavLink exact={true} to="/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>Home</NavLink>
                                <NavLink to="/dummy/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>Dummy</NavLink>
                            </div>
                            <div className={bulmaStyles.navbarEnd}>
                                <a className={bulmaStyles.navbarItem} href="https://github.com/eserozvataf/darty-react-hooks-app">
                                    <span className={bulmaStyles.icon}><i className={`${fontAwesomeStyles.fa} ${fontAwesomeStyles.faCodeFork} ${fontAwesomeStyles.faFw}`} aria-hidden="true"></i></span>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className={`${bulmaStyles.section} ${bulmaStyles.heroBody} ${layoutStyles.heroBody}`}>
                <div className={bulmaStyles.container}>
                    <div className={bulmaStyles.content}>
                        {props.children}
                    </div>
                </div>
            </main>
            <footer className={`${bulmaStyles.footer} ${bulmaStyles.heroFoot} ${layoutStyles.heroFoot}`}>
                <div className={bulmaStyles.container}>
                    <div className={`${bulmaStyles.content} ${bulmaStyles.hasTextCentered}`}>
                        Darty React Hooks App is a front-end development stack for starting with a structured, scaleable and adaptable basecode.<br />
                        Visit <a href="https://github.com/eserozvataf/darty-react-hooks-app">GitHub page</a> for details. Apache License, Version 2.0
                    </div>
                </div>
            </footer>
        </div>
    );
}

export {
    Layout as default,
};
