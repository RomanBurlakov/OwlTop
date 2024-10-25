import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';
import { getCourses } from '@/api/courses';
import CoursesHeader from '@/components/CoursesPageComponents/CourseHeader/CoursesHeader';
import CourseList from '@/components/CoursesPageComponents/CourseList/CourseList';
import Htag from '@/components/Htag/Htag';

export async function generateMetadata(): Promise<Metadata> {

	return {
		title: 'Courses'
	};
}

export async function generateStaticParams() {
	const menu = await getMenu(0);

	return menu.flatMap(e => e.pages.map(e => ({ alias: e.alias })));
}

export default async function ProductPage({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	const courses = await getCourses(page?.category);
	if (!page || !courses) {
		notFound();
	}

	return (
		<>
			<CoursesHeader title={page.title} quantity={courses.length} />
			<CourseList courses={courses} />
			{courses.length === 0 && <Htag tag='h2'>{page.title + ' не найдены...'}</Htag>}
			{page && page.title}
		</>
	);
}