import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPage } from '@/api/page';
import { getMenu } from '@/api/menu';

export async function generateMetadata(): Promise<Metadata> {

	return {
		title: 'Products'
	};
}

export async function generateStaticParams() {
	const menu = await getMenu(0);

	return menu.flatMap(e => e.pages.map(e => ({ alias: e.alias })));
}

export default async function ProductPage({ params }: { params: { alias: string } }) {
	const page = await getPage(params.alias);
	if (!page) {
		notFound();
	}

	return (
		<div>
			{page.title}
		</div>
	);
}