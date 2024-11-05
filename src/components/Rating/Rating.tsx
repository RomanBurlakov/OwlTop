"use client";
import { Dispatch, HTMLAttributes, ReactElement, SetStateAction, useEffect, useState } from 'react';
import { cn } from '@/app/myClassNames';
import styles from './Rating.module.css';

interface RatingPropsBase extends HTMLAttributes<HTMLDivElement> {
	rating?: number,
}

type RatingPropsEditable = {
	isEditable: true;
	setRating: Dispatch<SetStateAction<number>>;
} | {
	isEditable?: false;
	setRating?: never;
}

type RatingProps = RatingPropsBase & RatingPropsEditable

// interface RatingPropsBase2<T extends boolean> extends HTMLAttributes<HTMLDivElement> {
// 	rating: number,
// 	isEditable?: T;
// }

// interface RatingPropsNotEditable2 extends RatingPropsBase2<false> {
// 	setRating?: never;
// }
// interface RatingPropsEditable2 extends RatingPropsBase2<true> {
// 	setRating: Dispatch<SetStateAction<number>>;
// }

// type RatingProps2 = RatingPropsNotEditable2 | RatingPropsEditable2;

let stars: boolean[] = new Array(5).fill(false);

export default function Rating({ rating = 0, isEditable = false, setRating, className, ...props }: RatingProps): ReactElement {
	const [ratingArray, setRatingArray] = useState<ReactElement[]>([]);

	useEffect(() => {
		constructRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);

	function constructRating(rating: number) {
		setRatingArray(stars.map((_, i) => {
			const number = i + 1;
			return <Star
				key={i}
				fill={Math.round(rating) > i ? 'var(--primary)' : 'var(--gray-light)'}
				onClick={() => ratingClickHandler(number)}
				onMouseEnter={() => ratingHoverHandler(number)}
				onMouseLeave={ratingLeaveHandler}
			/>;
		}));
	}

	function ratingClickHandler(number: number) {
		if (isEditable && setRating) {
			setRating(number);
			// if (setIsEditable) setIsEditable(false);
		}
	}

	function ratingHoverHandler(number: number) {
		if (isEditable) constructRating(number);
	}

	function ratingLeaveHandler() {
		if (isEditable) constructRating(rating);
	}

	return (
		<div className={cn(styles.rating, isEditable && [styles.editable], className)} title={String(rating)} {...props}>
			{...ratingArray}
		</div>
	);
}

interface StarProps extends HTMLAttributes<HTMLDivElement> {
	fill: string,
}

function Star({ fill, ...props }: StarProps): ReactElement {
	return (
		<div className={styles.star} {...props}>
			<svg width="20" height="20" viewBox="0 0 20 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
				<path d="M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686Z" />
			</svg>
		</div>
	);
}