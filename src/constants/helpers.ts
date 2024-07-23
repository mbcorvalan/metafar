export const cleanParam = (param: string | undefined): string => {
	return param?.replace(':', '') || '';
};
