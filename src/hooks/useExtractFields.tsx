import { useMemo } from 'react';
import { extractFields } from '../utils';

export interface UseExtractFieldsProps {
	data: Record<string, any>;
	fields: string[];
}

export function useExtractFields(props: UseExtractFieldsProps): Record<string, any> {
	const { data = {}, fields } = props;

	const extractData = useMemo(() => {
		return extractFields(data, fields);
	}, [data, fields]);

	return extractData;
}
