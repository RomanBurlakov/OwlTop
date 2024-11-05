import { Course } from '@/types/types';
import { HTMLAttributes, ReactElement, useState } from 'react';
import CourseInfo from '../CourseInfo/CourseInfo';
import CourseDescription from '../CourseDescription/CourseDescription';
import Button from '@/components/Button/Button';
import CourseComments from '../CourseComments/CourseComments';
import styles from './CourseListItem.module.css';

interface CourseListItem extends HTMLAttributes<HTMLLIElement> {
	course: Course
}

export default function CourseListItem({ course }: CourseListItem): ReactElement {
	const [reviewsOpen, setReviewsOpen] = useState(false);

	return (
		<li>
			<div className={styles.course}>
				<CourseInfo course={course} />
				<CourseDescription course={course} />
				<div className={styles.buttons}>
					<Button >Узнать подробнее</Button>
					<Button transparent='transparent' arrow={'right'} onClick={() => setReviewsOpen(!reviewsOpen)}>Читать отзывы</Button>
				</div>
			</div>
			<CourseComments reviews={course.reviews} isOpen={reviewsOpen} />
		</li>
	);
}
