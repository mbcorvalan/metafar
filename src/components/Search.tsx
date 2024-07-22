import React from 'react';
import { SearchProps } from '../types/props';

const Search: React.FC<SearchProps> = ({
    label,
    handleChange,
    id,
    name,
    value,
    placeholder,
    ariaLabel,
    ...props
}) => {
    return (
        <div className='markets-overview-form__content'>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                aria-label={ariaLabel || label}
                onChange={handleChange}
                {...props}
            />
        </div>
    );
};

export default Search;