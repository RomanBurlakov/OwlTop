import { API } from '@/api/api';
import { Course } from '@/types/types';
import axios from 'axios';

export async function getCourses(category: string | undefined): Promise<Course[] | null> {
	if (!category) return null;
	const { statusText, data } = await axios.post<Course[]>(API.product.find, { category, limit: 20 });
	if (statusText !== 'OK') return null;
	data.forEach(e => {
		if (e.image === 'https://old-images.hb.ru-msk.vkcs.cloudhttp://cdn-bucket.hb.bizmrg.com/courses-top-images/2022-05-11/logo.png') {
			e.image = 'http://cdn-bucket.hb.bizmrg.com/courses-top-images/2022-05-11/logo.png';
		}
	});
	return data;
}