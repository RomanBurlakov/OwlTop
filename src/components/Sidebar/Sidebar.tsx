import { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/app/myClassNames';
import styles from './Sidebar.module.css';
import Menu from '../Menu/Menu';

interface SidebarProps extends HTMLAttributes<HTMLElement> { }

export default function Sidebar({ className, ...props }: SidebarProps): ReactElement {

	return (
		<aside className={cn(styles.sidebar, className)} {...props}>
			<Menu />
		</aside>
	);
}