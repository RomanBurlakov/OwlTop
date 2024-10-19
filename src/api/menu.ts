import { API } from '@/api/api';
import { MenuItem } from '@/types/types';
import axios from 'axios';

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const { statusText, data } = await axios.post<MenuItem[]>(API.topPage.find, { firstCategory });
	return data;
}