import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';
import { getCourses } from '@/api/courses';
import CoursesList from '@/components/CoursesListComponents/CoursesList';
import HhBlock from '@/components/HhBlock/HhBlock';
import Advantages from '@/components/Advantages/Advantages';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';

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
			{page.hh && <HhBlock hh={page.hh} title={page.category} />}
			{page.advantages && page.advantages[0]?.description && <Advantages advantages={page.advantages} />}
			{page.seoText && <About seoText={page.seoText} />}
			<Skills skills={page.tags} />
		</>
	);
}