import React from 'react';
import logo from '../asset/logo.svg';
import { LOGO_ALT } from '../constants/text';

/**
 * A functional component that renders the navigation bar with a logo.
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export default function NavBar(): JSX.Element {
    return (
        <nav className='markets-overview-navBar_wrapper'>
            <img
                className="markets-overview-navBar__img"
                src={logo}
                alt={LOGO_ALT}
            />
        </nav>
    );
}
