import React from 'react';
import { HeaderProp } from '../types/props';

/**
 * A functional component that renders a header with a title.
 *
 * @param {HeaderProp} props - The props for the component.
 * @param {string} props.label - The label text to display in the header.
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC<HeaderProp> = ({ label }: HeaderProp): JSX.Element => {
    return (
        <header className="markets-overview-header__wrapper">
            <h1 className="markets-overview-header__title">{label}</h1>
        </header>
    );
};

export default Header;
