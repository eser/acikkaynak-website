import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faDiscord, faSlack, faGithub } from '@fortawesome/free-brands-svg-icons';
import './assets/fonts/arbutus-slab.scss';
import bulmaStyles from 'bulma';
import layoutStyles from './assets/styles.scss';

function Layout(props) {
    const navbarMenuRef = useRef();
    const navbarToggle = () => {
        navbarMenuRef.current.classList.toggle('is-active');
    };

    return (
        <div className={`${bulmaStyles.hero} ${layoutStyles.isFullheight}`}>
            <header className={layoutStyles.heroHead}>
                <nav className={`${bulmaStyles.navbar} ${bulmaStyles.isTransparent}`} role="navigation" aria-label="main navigation">
                    <div className={bulmaStyles.navbarBrand}>
                        <a className={bulmaStyles.navbarItem} href="/">
                            {`{ açık }`}
                        </a>
                        <span className={`${bulmaStyles.navbarBurger} ${bulmaStyles.burger}`} role="button" onClick={navbarToggle} aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className={bulmaStyles.navbarMenu} ref={navbarMenuRef}>
                        <div className={bulmaStyles.navbarStart}>
                            <NavLink exact={true} to="/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>Haberler</NavLink>
                            <NavLink to="/learn/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>Eğitim</NavLink>
                            <NavLink to="/projects/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>Projeler</NavLink>
                            <NavLink to="/organizations/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>Organizasyonlar</NavLink>
                            <NavLink to="/sponsors/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>Sponsorlar</NavLink>
                            <NavLink to="/stats/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>İstatistikler</NavLink>
                            <NavLink to="/about/" className={bulmaStyles.navbarItem} activeClassName={bulmaStyles.isActive}>Hakkımızda</NavLink>
                        </div>
                        <div className={bulmaStyles.navbarEnd}>
                            <div className={bulmaStyles.navbarItem}>
                                <div className={`${bulmaStyles.field} ${bulmaStyles.isGrouped}`}>
                                    <p className={bulmaStyles.control}>
                                        <a className={bulmaStyles.navbarItem} href="https://twitter.com/acikkaynakinfo">
                                            <span className={bulmaStyles.icon}>
                                                <FontAwesomeIcon icon={faTwitter} />
                                            </span> 
                                        </a>
                                    </p>
                                    <p className={bulmaStyles.control}>
                                        <a className={bulmaStyles.navbarItem} href="https://t.me/acikkaynak">
                                            <span className={bulmaStyles.icon}>
                                                <FontAwesomeIcon icon={faTelegram} />
                                            </span>
                                        </a>
                                    </p>
                                    <p className={bulmaStyles.control}>
                                        <a className={bulmaStyles.navbarItem} href="https://discordapp.com/invite/BRtenzs">
                                            <span className={bulmaStyles.icon}>    
                                                <FontAwesomeIcon icon={faDiscord} />
                                            </span>
                                        </a>
                                    </p>
                                    <p className={bulmaStyles.control}>
                                        <a className={bulmaStyles.navbarItem} href="https://join.slack.com/t/acikkaynak/shared_invite/enQtNzQ1MjgyNzA5MTA5LWU5ZmVjYzY2MDhkZGZmOWFjMmI1NDc4MjliZTI1YjMwMTQxOGU2MGY1NjliODJlNGJjMDE3NjIwZjQ5NjFlMTA">
                                            <span className={bulmaStyles.icon}>    
                                                <FontAwesomeIcon icon={faSlack} />
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className={bulmaStyles.navbarItem}>
                                <a className={`${bulmaStyles.button} ${bulmaStyles.isLight}`} href="https://github.com/login/oauth/authorize?client_id=0667f3575c3a5df778a4&redirect_uri=https%3A%2F%2Fapi.acikkaynak.info%2Fauth%2FgithubCallback&scope=public_repo%20read%3Aorg%20user&response_type=code&state=">
                                    <span className={bulmaStyles.icon}>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </span>
                                    <p>GitHub ile giriş</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className={`${bulmaStyles.section} ${layoutStyles.heroBody}`}>
                <div className={bulmaStyles.container}>
                    <div className={bulmaStyles.content}>
                        {props.children}
                    </div>
                </div>
            </main>
            <footer className={`${bulmaStyles.footer} ${layoutStyles.heroFoot}`}>
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
