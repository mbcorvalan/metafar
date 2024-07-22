import { useState, useMemo } from 'react';

const usePagination = (data: any[], itemsPerPage: number) => {
	const [currentPage, setCurrentPage] = useState(1);

	const totalPages = Math.ceil(data.length / itemsPerPage);

	const currentData = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return data.slice(startIndex, endIndex);
	}, [currentPage, data, itemsPerPage]);

	const prev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const next = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return {
		currentPage,
		totalPages,
		currentData,
		prev,
		next,
	};
};

export default usePagination;
