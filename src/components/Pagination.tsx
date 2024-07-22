import Button from './Button';
import { PREV_BUTTON, NEXT_BUTTON } from '../constants/text';

import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPrev, onNext }) => {
    return (
        <div className="pagination__wrapper">
            <Button className="btn--primary" label={PREV_BUTTON} onClick={onPrev} disabled={currentPage === 1}>

            </Button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <Button className="btn--primary" label={NEXT_BUTTON} onClick={onNext} disabled={currentPage === totalPages}>
            </Button>
        </div>
    );
};

export default Pagination;