'use client';
import { Course } from '@/types/types';
import { ReactElement, useState } from 'react';
import CoursesHeader from './CourseHeader/CoursesHeader';
import CourseListItem from './CourseListItem/CourseListItem';
import styles from './CoursesList.module.css';

interface CoursePageProps {
	title?: string
	quantity?: number
	courses: Course[]
}

export default function CoursesList({ title, quantity, courses }: CoursePageProps): ReactElement {
	const [filter, setFilter] = useState<string>('rating');
	const [sortedCourses, setSortedCourses] = useState<Course[]>(() => sortCourses(courses, filter));

	function switchFilter(newFilter: string) {
		if (filter === newFilter) return;
		setFilter(newFilter);
		setSortedCourses(sortCourses([...sortedCourses], newFilter));
	}

	function sortCourses(courses: Course[], filter: string) {
		return courses.sort((a, b) => {
			if (filter === 'rating') {
				return b.initialRating - a.initialRating;
			} else if (filter === 'price') {
				return a.price - b.price;
			}
			return 0;
		});
	}

	return (
		<>
			<CoursesHeader title={title} quantity={quantity} switchFilter={switchFilter} filter={filter} />
			<ul className={styles.list}>
				{sortedCourses.map((e) => (
					<CourseListItem course={e} key={e._id} />
				))}
			</ul>
		</>
	);
}
