import { HTMLAttributes, ReactElement, useState } from 'react';
import Rating from '@/components/Rating/Rating';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Textarea from '@/components/Textarea/Textarea';
import styles from './CommentAddForm.module.css';

interface CommentAddFormProps extends HTMLAttributes<HTMLFormElement> { }

export default function CommentAddForm({ }: CommentAddFormProps): ReactElement {
	const [rating, setRating] = useState(0);

	return (
		<form className={styles.form}>
			<Input placeholder='Имя' />
			<Input placeholder='Заголовок отзыва' />
			<div className={styles['rating-container']}>
				<span>Оценка:</span>
				<Rating rating={rating} isEditable={true} setRating={setRating} />
			</div>
			<Textarea placeholder='Текст отзыва' className={styles.comment} />
			<div className={styles.submit}>
				<Button>Отправить</Button>
				<span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
			</div>
		</form>
	);
}