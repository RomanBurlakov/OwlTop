import { HTMLAttributes, ReactElement } from 'react';
import { Hh } from '@/types/types';
import Htag from '../Htag/Htag';
import Tag from '../Tag/Tag';
import HhStar from './HhStar';
import { cn } from '@/app/myClassNames';
import styles from './HhBlock.module.css';

interface HhBlockProps extends HTMLAttributes<HTMLDivElement> {
	hh: Hh
	title: string
}

export default function HhBlock({ hh, title, ...props }: HhBlockProps): ReactElement {

	return (
		<div className={styles.hh} {...props}>
			<div className={styles.header}>
				<Htag tag='h2' >{`Вакансии - ${title}`}</Htag>
				<Tag color='red' size='big'>hh.ru</Tag>
			</div>
			<div className={styles.vacancy}>
				<div className={styles.block}>
					<div className={styles.title}>Всего вакансий</div>
					<div className={styles.count}>{hh.count}</div>
				</div>
				<div className={cn(styles.levels, styles.block)}>
					<div className={styles.level}>
						<div className={styles.title}>Всего вакансий</div>
						<div className={styles.salary}>{hh.juniorSalary.toLocaleString('ru-RU') + ' ₽'}</div>
						<div className={styles.stars}><HhStar /><HhStar fill='#BBB' /><HhStar fill='#BBB' /></div>
					</div>
					<div className={styles.level}>
						<div className={styles.title}>Всего вакансий</div>
						<div className={styles.salary}>{hh.middleSalary.toLocaleString('ru-RU') + ' ₽'}</div>
						<div className={styles.stars}><HhStar /><HhStar /><HhStar fill='#BBB' /></div>
					</div>
					<div className={styles.level}>
						<div className={styles.title}>Всего вакансий</div>
						<div className={styles.salary}>{hh.seniorSalary.toLocaleString('ru-RU') + ' ₽'}</div>
						<div className={styles.stars}><HhStar /><HhStar /><HhStar /></div>
					</div>
				</div>
			</div>
		</div>
	);
}
