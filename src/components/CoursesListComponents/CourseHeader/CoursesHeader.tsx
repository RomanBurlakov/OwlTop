import { HTMLAttributes, ReactElement } from 'react';
import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import SortIcon from './SortIcon';
import { cn } from '@/app/myClassNames';
import styles from './CoursesHeader.module.css';

interface CoursesHeaderProps extends HTMLAttributes<HTMLDivElement> {
	title?: string
	quantity?: number
	switchFilter: (filter: string) => void
	filter: string
}

export default function CoursesHeader({ title, quantity, switchFilter, filter, className, ...props }: CoursesHeaderProps): ReactElement {

	return (
		<div className={cn(styles.header, className)} {...props}>
			<Htag tag={'h1'}>{title}</Htag>
			<Tag size='big' color='gray'>{quantity}</Tag>
			<div className={styles.filters} >
				<span
					className={cn(styles.filter, { [styles.active]: filter === 'rating' })}
					onClick={() => switchFilter('rating')}
				><SortIcon />По рейтингу</span>
				<span
					className={cn(styles.filter, { [styles.active]: filter === 'price' })}
					onClick={() => switchFilter('price')}
				><SortIcon />По цене</span>
			</div>
		</div>
	);
}