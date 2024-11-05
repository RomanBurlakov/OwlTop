'use client';
import Link from 'next/link';
import { HTMLAttributes, ReactElement, useEffect, useLayoutEffect, useState } from 'react';
import { MenuItem } from '@/types/types';
import { cn } from '@/app/myClassNames';
import { usePathname } from 'next/navigation';
import HatIcon from './HatIcon';
import styles from './Menu.module.css';

interface MenuProps extends HTMLAttributes<HTMLElement> {
	menuItems: MenuItem[]
}

export default function Menu({ menuItems, ...props }: MenuProps): ReactElement {
	const [menu, setMenu] = useState<MenuItem[]>(menuItems);
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.includes('/courses/')) {
			const alias = pathname.slice(9);
			if (alias) {
				const aliasMenuIndex = menu.findIndex(e => e.pages.find(e2 => e2.alias === alias));
				if (menu[aliasMenuIndex] && !menu[aliasMenuIndex]?.isOpen) openMenuItem(aliasMenuIndex);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function openMenuItem(index: number, isOpen?: boolean | undefined) {
		setMenu((v) => {
			return [...v].map((e, i) => {
				if (i === index) {
					e.isOpen = !isOpen;
				} else e.isOpen = false;
				return e;
			});
		});
	}

	return (
		<nav {...props}>
			<div className={styles.header}>
				<HatIcon />
				<span>Курсы</span>
			</div>
			<ul className={styles.categories}>
				{menu.map((menuItem, i) => {
					return (
						<li key={i}>
							<button
								className={styles.button}
								onClick={() => openMenuItem(i, menuItem.isOpen)}
							>{menuItem._id.secondCategory}</button>
							<ul className={cn(styles.category, { [styles.open]: menuItem.isOpen })}>
								<div>
									{menuItem.pages.map((e) => {
										const link = '/courses/' + e.alias;
										return (
											<li key={e._id}>
												<Link className={pathname === link ? styles.active : ''} href={link} prefetch={true}>{e.category}</Link>
											</li>
										);
									})}
								</div>
							</ul>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}