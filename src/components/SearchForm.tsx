import useSearchActions from '../hooks/useSearchActions';
import Button from './Button';
import Search from '../components/Search';
import { SUBMIT, RESET_FORM } from '../constants/text';


const SearchForm = () => {
    const { searchParam, handleChange, handleReset, handleSubmit } = useSearchActions();

    return (
        <form className="markets-overview-form__wrapper">
            <Search
                label="Search by symbol or name"
                handleChange={(e) => handleChange(e)}
                id="symbolSearch"
                name="symbol"
                value={searchParam}
                placeholder="Enter a symbol or name"
                ariaLabel="Symbol search field"
            />
            <Button className="btn--primary" label={SUBMIT} onClick={handleSubmit} />
            <Button className="btn--primary" label={RESET_FORM} onClick={handleReset} disabled={searchParam === ""} />
        </form>
    );
};

export default SearchForm;
