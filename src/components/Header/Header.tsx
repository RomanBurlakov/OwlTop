import { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/app/myClassNames';
import styles from './Header.module.css';

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> { }

export default function Header({ className, ...props }: HeaderProps): ReactElement {

	return (
		<header className={cn(styles.header, className)} {...props}>
			HEADER
		</header>
	);
}