import { HTMLAttributes, ReactElement } from 'react';
import { cn } from '@/app/myClassNames';
import { Advantage } from '@/types/types';
import Htag from '../Htag/Htag';
import P from '../P/P';
import styles from './Advantages.module.css';
import Tick from './Tick';

interface AdvantagesProps extends HTMLAttributes<HTMLDivElement> {
	advantages: Advantage[]
}

export default function Advantages({ advantages, className, ...props }: AdvantagesProps): ReactElement {

	return (
		<div className={cn(className, styles.advantages)} {...props}>
			<Htag tag='h2' >Преимущества</Htag>
			<ul>
				{advantages.map(e => (
					<li className={styles.advantage} key={e._id}>
						<div className={styles.header}>
							<Tick />
							<Htag tag='h3' >{e.title}</Htag>
						</div>
						{e.description && <P size='large' className={styles.description}>{e.description}</P>}
					</li>
				))}
			</ul>
		</div>
	);
}
