import { API } from '@/api/api';
import { Course } from '@/types/types';
import axios from 'axios';

export async function getCourses(category: string | null): Promise<Course[] | null> {
	if (!category) return null;
	const { statusText, data } = await axios.post<Course[]>(API.product.find, { category, limit: 20 });
	if (statusText !== 'OK') return null;
	return data;
}