import { HTMLAttributes, ReactElement } from 'react';
import P from '../P/P';
import styles from './About.module.css';

interface AboutProps extends HTMLAttributes<HTMLDivElement> {
	seoText: string
}

export default function About({ seoText }: AboutProps): ReactElement {

	return (
		<P dangerouslySetInnerHTML={{ __html: seoText }} className={styles.about}></P>
	);
}
