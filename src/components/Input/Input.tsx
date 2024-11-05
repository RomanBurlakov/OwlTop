import { ReactElement, InputHTMLAttributes } from 'react';
import { cn } from '@/app/myClassNames';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export default function Input({ type, placeholder, disabled, className, ...props }: InputProps): ReactElement {

	return (
		<input className={cn(styles.input, className)} type={type} placeholder={placeholder} {...props} />
	);
}
