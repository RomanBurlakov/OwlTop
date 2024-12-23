import { HTMLAttributes } from 'react';
import { cn } from '@/app/myClassNames';
import { getMenu } from '@/api/menu';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import styles from './Sidebar.module.css';

interface SidebarProps extends HTMLAttributes<HTMLElement> { }

export default async function Sidebar({ className, ...props }: SidebarProps) {
	const menu = await getMenu(0);

	return (
		<aside className={cn(styles.sidebar, className)} {...props}>
			<Logo />
			<Search />
			<Menu menuItems={menu} />
		</aside>
	);
}