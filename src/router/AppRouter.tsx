import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';



/**
 * Application router component that defines the route structure.
 * @returns {JSX.Element} The router component.
 */
export default function AppRouter(): JSX.Element {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
