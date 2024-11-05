'use client';
import Button from '@/components/Button/Button';
import Htag from '@/components/Htag/Htag';
import { useEffect } from 'react';
import styles from './layout.module.css';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className={styles.error}>
			<Htag tag='h1'>Что-по полшо не так!</Htag>
			<Button onClick={() => reset()} style={{ marginTop: '10px' }}>Повторить</Button>
		</div>
	);
}