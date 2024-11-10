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
					<div className={styles.cost}>
						{`${course.price} ₽ `}
						<Tag color='green'>{`-${course.oldPrice - course.price} ₽`}</Tag>
					</div>
					{course.credit !== 0 &&
						<div className={styles.credit}>
							{`${course.credit} ₽`}
							<span>/мес</span>
						</div>
					}
					<Rating rating={course.initialRating} className={styles.rating} />
					<span className={styles.costTitle}>цена</span>
					{course.credit !== 0 && <span className={styles.creditTitle}>в кредит</span>}
					<span className={styles.ratingTitle}>{`${course.reviewCount} 
					${course.reviewCount % 100 > 4 && course.reviewCount % 100 < 20 ? 'отзывов' :
							course.reviewCount % 10 === 1 ? 'отзыв' :
								course.reviewCount % 10 === 2 || course.reviewCount % 10 === 3 || course.reviewCount % 10 === 4 ? 'отзыва' : 'отзывов'}`
					}</span>
				</div>
			</div>
		</div>
	);
}