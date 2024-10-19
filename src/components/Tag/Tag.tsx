import { HTMLAttributes, ReactElement } from 'react';
import { cn, mp } from '@/app/myClassNames';
import styles from './Tag.module.css';

interface TagProps extends HTMLAttributes<HTMLDivElement> {
	size?: 'big',
	color?: 'red' | 'green' | 'gray' | 'transparent'
}

export default function Tag({ children, className, color, size, ...props }: TagProps): ReactElement {

	return (
		<div className={cn(...mp(styles, 'tag', color, size), className)} {...props}>{children}</div>
	);
}
