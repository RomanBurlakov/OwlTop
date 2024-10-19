export interface MenuItem {
	pages: Category[]
	_id: {
		secondCategory: string
	}
}

export interface Category {
	alias: string;
	category: string;
	title: string;
	_id: string;
}

export interface PageModel {
	_id: string;
	tags: string[];
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: number;
	advantages: Advantage[];
	hh: Hh;
}

export interface Advantage {
	title: string;
	description: string;
	_id: string;
}

export interface Hh {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
}