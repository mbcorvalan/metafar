import React from 'react';
import Button from './Button';
import { PREV_BUTTON, NEXT_BUTTON } from '../constants/text';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
}

/**
 * A functional component that renders pagination controls with buttons to navigate between pages.
 *
 * @param {PaginationProps} props - The props for the component.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - The total number of pages.
 * @param {() => void} props.onPrev - Function to handle the previous page button click.
 * @param {() => void} props.onNext - Function to handle the next page button click.
 * @returns {JSX.Element} The rendered pagination component.
 */
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPrev, onNext }: PaginationProps): JSX.Element => {
    return (
        <div className="pagination__wrapper">
            <Button
                className="btn--primary"
                label={PREV_BUTTON}
                onClick={onPrev}
                disabled={currentPage === 1}
            />
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <Button
                className="btn--primary"
                label={NEXT_BUTTON}
                onClick={onNext}
                disabled={currentPage === totalPages}
            />
        </div>
    );
};

export default Pagination;
