import { Course } from '@/types/types';
import { HTMLAttributes, ReactElement } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import CoursesDescription from '../CoursesDescription/CoursesDescription';
import Button from '@/components/Button/Button';
import CourseComment from '../CourseComment/CourseComment';
import style from './CourseListItem.module.css';

interface CourseListItem extends HTMLAttributes<HTMLLIElement> {
	course: Course
}

export default function CourseListItem({ course }: CourseListItem): ReactElement {

	function toggleOpen() {
		course.reviewsOpen = !course.reviewsOpen;
	}

	return (
		<li key={course._id}>
			<div className={style.course}>
				<CourseInfo course={course} />
				<CoursesDescription course={course} />
				<div className={style.buttons}>
					<Button >Узнать подробнее</Button>
					<Button transparent='transparent' arrow={'right'} >Читать отзывы</Button>
				</div>
			</div>
			<CourseComment reviews={course.reviews} isOpen={course.reviewsOpen} />
		</li>
	)
}
