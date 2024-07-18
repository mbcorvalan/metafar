import Header from './Header';
import Table from './Table';
import Pagination from './Pagination';

const Layout = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Table />
            </div>
            <Pagination />
        </div>
    );
};

export default Layout;
