import { Course } from '@/types/types';
import { HTMLAttributes, ReactElement } from 'react';
import Image from 'next/image';
import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';
import styles from './CourseInfo.module.css';

interface CourseInfoProps extends HTMLAttributes<HTMLDivElement> {
	course: Course
}

export default function CourseInfo({ course }: CourseInfoProps): ReactElement {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.title}>
					<Image src={course.image} alt={course.companyId} width={70} height={70} />
					<div className={styles.text}>
						<Htag tag='h3'>{course.title}</Htag>
						<div>
							{course.categories.map((e, i) => <Tag key={i} color='transparent'>{e}</Tag>)}
						</div>
					</div>
				</div>
				<div className={styles.price}>
					<div className={styles.cost} style={{ alignItems: 'center', gap: '5px' }}>
						{`${course.price} ₽ `}
						<Tag color='green'>{`-${course.oldPrice - course.price} ₽`}</Tag>
					</div>
					<div className={styles.cost} style={{ alignItems: 'baseline' }}>
						{`${course.credit} ₽`}
						<span>/мес</span>
					</div>
					<Rating rating={course.initialRating} />
					<span className={styles.priceTitle}>цена</span>
					<span className={styles.creditTitle}>в кредит</span>
					<span className={styles.ratingTitle}>{`${course.reviewCount} отзывов`}</span>

				</div>
			</div>
		</div>
	);
}