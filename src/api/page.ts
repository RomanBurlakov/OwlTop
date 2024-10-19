import { API } from '@/api/api';
import { PageModel } from '@/types/types';
import axios from 'axios';

export async function getPage(alias: string): Promise<PageModel | null> {
	const { statusText, data, } = await axios.get<PageModel>(API.topPage.byAlias + alias);
	if (statusText !== 'OK') return null;
	return data;
}