import { HEADER_TITLE } from '../constants/text';

const Header = () => {
    return (
        <header className="markets-overview-header__wrapper">
            <h1 className="markets-overview-header__title">{HEADER_TITLE}</h1>
        </header>
    );
};

export default Header;