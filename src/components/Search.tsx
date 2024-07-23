import React from 'react';
import { SearchProps } from '../types/props';

/**
 * A functional component that renders a search input field with a label.
 *
 * @param {SearchProps} props - The props for the component.
 * @param {string} props.label - The label for the search input.
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.handleChange - Function to handle input changes.
 * @param {string} [props.id] - The HTML id attribute for the input.
 * @param {string} [props.name] - The HTML name attribute for the input.
 * @param {string} [props.value] - The current value of the input.
 * @param {string} [props.placeholder] - The placeholder text for the input.
 * @param {string} [props.ariaLabel] - The aria-label attribute for the input.
 * @returns {JSX.Element} The rendered search input component.
 */
const Search: React.FC<SearchProps> = ({
    label,
    handleChange,
    id,
    name,
    value,
    placeholder,
    ariaLabel,
    ...props
}: SearchProps): JSX.Element => {
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
