import { HTMLAttributes, ReactElement } from 'react';
import Htag from '@/components/Htag/Htag';
import Tag from '@/components/Tag/Tag';
import SortIcon from './SortIcon';
import { cn } from '@/app/myClassNames';
import style from './CoursesHeader.module.css';

interface CoursesHeaderProps extends HTMLAttributes<HTMLDivElement> {
	title?: string
	quantity?: number
}

export default function CoursesHeader({ title, quantity, className, ...props }: CoursesHeaderProps): ReactElement {

	return (
		<div className={cn(style.header, className)} {...props}>
			<div className={style.title}>
				<Htag tag={'h1'}>{title}</Htag>
				<Tag size='big' color='gray'>{quantity}</Tag>
			</div>
			<div className={style.filters}>
				<span className={style.active}><SortIcon />По рейтингу</span>
				<span>По цене</span>
			</div>
		</div>
	);
}