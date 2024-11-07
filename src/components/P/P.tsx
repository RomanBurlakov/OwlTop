import { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/app/myClassNames';
import styles from './P.module.css';

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
	size?: 'small' | 'large' | ''
}

export default function P({ children, size = '', className, ...props }: PProps): ReactElement {

	return (
		<p className={cn(styles.p, styles[size], className)} {...props}>{children}</p>
	);
}
