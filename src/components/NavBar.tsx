import logo from '../asset/logo.svg';
import { LOGO_ALT } from '../constants/text';

export default function NavBar() {
    return (
        <nav className='markets-overview-navBar_wrapper'><img className="markets-overview-navBar__img" src={logo} alt={LOGO_ALT}></img></nav>
    );
}
