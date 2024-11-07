import { HTMLAttributes, ReactElement } from 'react';
import Htag from '../Htag/Htag';
import styles from './Skills.module.css';
import Tag from '../Tag/Tag';

interface SkillsProps extends HTMLAttributes<HTMLDivElement> {
	skills: string[]
}

export default function Skills({ skills }: SkillsProps): ReactElement {

	return (
		<div className={styles.skills}>
			<Htag tag='h2' >Получаемые навыки</Htag>
			{skills.map((e, i) => (
				<Tag key={i}>{e}</Tag>
			))}
		</div>
	);
}
