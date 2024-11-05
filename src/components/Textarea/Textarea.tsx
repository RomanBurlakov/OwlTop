import { ReactElement, TextareaHTMLAttributes } from 'react';
import { cn } from '@/app/myClassNames';
import styles from './Textarea.module.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { }

export default function Textarea({ placeholder, disabled, className, ...props }: TextareaProps): ReactElement {

	return (
		<textarea className={cn(styles.textarea, className)} placeholder={placeholder} disabled={disabled} {...props} />
	);
}
