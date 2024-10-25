import { Review } from '@/types/types';
import { HTMLAttributes } from 'react';
import P from '@/components/P/P';
import UserIcon from './UserIcon.svg';
import Image from 'next/image';
import style from './CourseComment.module.css';
import Rating from '@/components/Rating/Rating';
import { cn } from '@/app/myClassNames';

interface CourseCommentProps extends HTMLAttributes<HTMLDivElement> {
	reviews: Review[]
	isOpen?: boolean
}

export default function CourseComment({ reviews, isOpen, ...props }: CourseCommentProps) {

	return (
		<div className={cn(style.container, { [style.open]: isOpen })} {...props}>
			<ul>
				{reviews.reverse().map(e => {
					return (
						<li className={style.comment} key={e._id}>
							<div className={style.header}>
								<Image src={UserIcon} alt='User icon' />
								<div className={style.info}>
									<span className={style.name}>{e.name}:</span>
									<span>{e.title}</span>
								</div>
								<span className={style.date}>
									{new Date(e.createdAt).toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).slice(0, -3)}
								</span>
								<Rating rating={e.rating} />
							</div>
							<P size='small' style={{ marginBottom: '20px' }}>
								{e.description}
							</P>
						</li>
					);
				})}
			</ul>
		</div>
	);
}