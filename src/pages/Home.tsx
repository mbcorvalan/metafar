import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import useFetchActions from '../hooks/useFetchActions';
import { useSelector } from 'react-redux';
import SearchForm from '../components/SearchForm';
import usePagination from '../hooks/usePagination';
import Skeleton from 'react-loading-skeleton';
import { RootState } from '../redux/store/store';
import 'react-loading-skeleton/dist/skeleton.css';
import NotificationMsg from '../components/Notification';
import { HEADER_TITLE } from '../constants/text';


const Home: React.FC = () => {
    const { isLoading, error } = useFetchActions();
    const filteredData = useSelector((state: RootState) => state.allActions.filteredData);

    const itemsPerPage = 10;

    const {
        currentPage,
        totalPages,
        currentData,
        prev,
        next
    } = usePagination(filteredData, itemsPerPage);

    return (
        <div className="App">
            <Header label={HEADER_TITLE} />
            <SearchForm />
            {isLoading && <div className="loading__wrapper--table"><Skeleton count={5} /></div>}
            {error && <NotificationMsg msg={error} container="div" type="failed" />}
            {!isLoading && !error && <Table data={currentData} />}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPrev={prev}
                onNext={next}
            />
        </div>
    );
};

export default Home;
