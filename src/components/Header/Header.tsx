import { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/app/myClassNames';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Cross from './Cross';
import Burger from './Burger';
import styles from './Header.module.css';

interface HeaderProps extends HTMLAttributes<HTMLHeadElement> { }

export default function Header({ className, ...props }: HeaderProps): ReactElement {

	return (
		<header className={cn(styles.header, className)} {...props}>
			<Logo />
			<Button className={styles.button}>
				{false || <Burger /> || <Cross />}
			</Button>
		</header>
	);
}