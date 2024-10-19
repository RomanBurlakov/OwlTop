import { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/app/myClassNames';
import styles from './Footer.module.css';

interface FooterProps extends HTMLAttributes<HTMLElement> { }

export default function Footer({ className, ...props }: FooterProps): ReactElement {

	return (
		<footer className={cn(styles.footer, className)} {...props}>
			<p>OwlTop © 2023 - 2024 Все права защищены</p>
			<a href="">Пользовательское соглашение</a>
			<a href="">Политика конфиденциальности</a>
		</footer>
	);
}