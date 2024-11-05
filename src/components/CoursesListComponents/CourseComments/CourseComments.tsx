import { Review } from '@/types/types';
import { HTMLAttributes } from 'react';
import P from '@/components/P/P';
import UserIcon from './UserIcon.svg';
import Image from 'next/image';
import Rating from '@/components/Rating/Rating';
import CommentAddForm from '../CommentAddForm/CommentAddForm';
import { cn } from '@/app/myClassNames';
import styles from './CourseComments.module.css';

interface CourseCommentProps extends HTMLAttributes<HTMLDivElement> {
	reviews: Review[]
	isOpen?: boolean
}

export default function CourseComment({ reviews, isOpen, ...props }: CourseCommentProps) {

	return (
		<div className={cn(styles.container, { [styles.open]: isOpen })} {...props}>
			<div>
				{reviews.map(e => {
					return (
						<div className={styles.comment} key={e._id}>
							<div className={styles.header}>
								<Image src={UserIcon} alt='User icon' />
								<div className={styles.info}>
									<span className={styles.name}>{`${e.name}: `}&nbsp;</span>
									<span>{e.title}</span>
								</div>
								<span className={styles.date}>
									{new Date(e.createdAt).toLocaleString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).slice(0, -3)}
								</span>
								<Rating rating={e.rating} />
							</div>
							<P size='small' style={{ marginBottom: '20px' }}>
								{e.description}
							</P>
						</div>
					);
				})}
				<CommentAddForm />
			</div>
		</div>
	);
}