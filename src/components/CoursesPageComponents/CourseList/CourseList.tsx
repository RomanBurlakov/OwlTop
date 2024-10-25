import { Course } from '@/types/types';
import { HTMLAttributes, ReactElement } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import CoursesDescription from '../CoursesDescription/CoursesDescription';
import Button from '@/components/Button/Button';
import style from './CourseList.module.css';
import CourseComment from '../CourseComment/CourseComment';
import CourseListItem from '../CourseListItem/CourseListItem';

interface CourseListProps extends HTMLAttributes<HTMLUListElement> {
	courses: Course[]
}

export default function CourseList({ courses }: CourseListProps): ReactElement {


	return (
		<ul className={style.list}>
			{courses.map((e) => (
				<CourseListItem course={e} />
			))}
		</ul>
	);
}
