import { HEADER_TITLE, HEADER_SUBTITLE } from '../../constants/text';

const Header = () => {
    return (
        <header>
            <h1>{HEADER_TITLE}</h1>
            <h2>{HEADER_SUBTITLE}</h2>
        </header>
    );
};

export default Header;