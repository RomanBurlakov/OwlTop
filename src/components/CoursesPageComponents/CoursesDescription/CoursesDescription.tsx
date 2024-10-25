import { Course } from '@/types/types';
import { HTMLAttributes, ReactElement } from 'react';
import P from '@/components/P/P';
import style from './CoursesDescription.module.css';

interface CoursesDescriptionProps extends HTMLAttributes<HTMLDivElement> {
	course: Course
}

export default function CoursesDescription({ course }: CoursesDescriptionProps): ReactElement {
	return (
		<div className={style.description}>
			<P>{course.description}</P>
			<div className={style.section}>
				<div className={style.characteristics}>
					{course.characteristics.map((e, i) => {
						if (e.name === 'Школа') return null;
						return <Characteristics key={i} {...e} />;
					})}
				</div>
				<div>
					<div className={style.advantages}>
						<span className={style.name}>Преимущества</span>
						<P>{course.advantages}</P>
					</div>
				</div>
			</div>
		</div>
	);
}

function Characteristics({ name, value }: { name: string, value: string }): ReactElement {
	return (
		<div className={style.characteristic}>
			<span className={style.name}>{name}</span>
			<span className={style['dashed-line']}></span>
			<span className={style.value}>{value}</span>
		</div>
	);
}