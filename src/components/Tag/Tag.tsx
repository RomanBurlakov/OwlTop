import { HTMLAttributes, ReactElement } from 'react';
import { cn, mp } from '@/app/myClassNames';
import styles from './Tag.module.css';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
	size?: 'big' | ''
	color?: 'red' | 'green' | 'gray' | 'transparent' | ''
}

export default function Tag({ children, className, color = '', size = '', ...props }: TagProps): ReactElement {

	return (
		<span className={cn(styles.tag, styles[color], styles[size], className)} {...props}>{children}</span>
	);
}
