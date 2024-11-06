import { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/app/myClassNames';
import styles from './Tag.module.css';

interface AboutProps extends HTMLAttributes<HTMLSpanElement> {
	size?: 'big' | ''
	color?: 'red' | 'green' | 'gray' | 'transparent' | ''
}

export default function About({ children, className, color = '', size = '', ...props }: AboutProps): ReactElement {

	return (
		<></>
	);
}
