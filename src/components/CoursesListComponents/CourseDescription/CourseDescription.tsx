import { Course } from '@/types/types';
import { HTMLAttributes, ReactElement } from 'react';
import P from '@/components/P/P';
import styles from './CourseDescription.module.css';

interface CourseDescriptionProps extends HTMLAttributes<HTMLDivElement> {
	course: Course
}

export default function CourseDescription({ course }: CourseDescriptionProps): ReactElement {
	return (
		<div className={styles.description}>
			<P>{course.description}</P>
			<div className={styles.section}>
				<div className={styles.characteristics}>
					{course.characteristics.map((e, i) => {
						return <Characteristics key={i} {...e} />;
					})}
				</div>
				<div>
					{course.advantages && <div className={styles.advantages}>
						<span className={styles.name}>Преимущества</span>
						<P>{course.advantages}</P>
					</div>}
				</div>
			</div>
		</div>
	);
}

function Characteristics({ name, value }: { name: string, value: string }): ReactElement {
	return (
		<div className={styles.characteristic}>
			<span className={styles.name}>{name}</span>
			<span className={styles['dashed-line']}></span>
			<span className={styles.value}>{value}</span>
		</div>
	);
}