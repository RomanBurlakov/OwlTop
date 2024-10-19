import { ButtonHTMLAttributes, ReactElement } from 'react';
import Image from 'next/image';
import Arrow from './arrow.svg';
import { cn, mp } from '@/app/myClassNames';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	transparent?: 'transparent',
	arrow?: 'right' | 'down'
}

export default function Button({ children, transparent, arrow, className, ...props }: ButtonProps): ReactElement {

	return (
		<button {...props} className={cn(...mp(styles, 'button', transparent), className)}>
			{children}
			{arrow && <Image src={Arrow} alt='Arrow' className={cn(mp(styles, 'arrow', ('arrow-' + arrow)))}></Image>}
		</button>
	);
}
