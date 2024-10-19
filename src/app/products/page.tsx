import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

	return {
		title: 'Products'
	};
}

export default async function ProductPage() {

	return (
		<div>
			{'Products'}
		</div>
	);
}