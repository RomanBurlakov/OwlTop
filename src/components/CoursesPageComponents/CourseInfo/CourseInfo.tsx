import { Course } from '@/types/types';
import { HTMLAttributes, ReactElement } from 'react';
import Image from 'next/image';
import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import Rating from '@/components/Rating/Rating';
import style from './CourseInfo.module.css';

interface CourseInfoProps extends HTMLAttributes<HTMLDivElement> {
	course: Course
}

export default function CourseInfo({ course }: CourseInfoProps): ReactElement {
	return (
		<div className={style.container}>
			<div className={style.info}>
				<div className={style.title}>
					<Image src={course.image} alt={course.companyId} width={70} height={70} />
					<div className={style.text}>
						<Htag tag='h3'>{course.title}</Htag>
						<div>
							{course.categories.map((e, i) => <Tag key={i} color='transparent'>{e}</Tag>)}
						</div>
					</div>
				</div>
				<div className={style.price}>
					<div className={style['price-item']}>
						<div className={style.cost}>
							{`${course.price} ₽ `}
							<Tag color='green'>{`-${course.oldPrice - course.price} ₽`}</Tag>
						</div>
						цена
					</div>
					<div className={style['price-item']}>
						<div className={style.cost}>
							{`${course.credit} ₽/мес`}
						</div>
						в кредит
					</div>
					<div className={style['price-item']}>
						<Rating rating={course.initialRating} />
						{`${course.clicks} отзывов`}
					</div>
				</div>
			</div>
		</div>
	);
}