import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';
import { getCourses } from '@/api/courses';
import CoursesList from '@/components/CoursesListComponents/CoursesList';
import HhBlock from '@/components/HhBlock/HhBlock';

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
			<CoursesList title={page.title} quantity={courses.length} courses={courses} />
			<HhBlock hh={page.hh} title={page.category} />
		</>
	);
}