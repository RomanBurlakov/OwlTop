import Htag from '@/components/Htag/Htag';
import styles from './layout.module.css';

export default function notFound() {
	return (
		<div className={styles.error}>
			<Htag tag='h1'>Страница не найдена!</Htag>
		</div>

	);
}
