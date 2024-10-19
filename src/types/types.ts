export interface MenuItem {
	pages: Category[]
	_id: {
		secondCategory: string
	}
	isOpen?: boolean
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

export interface Course {
	_id: string
	categories: string[]
	tags: string[]
	title: string
	link: string
	price: number
	oldPrice: number
	credit: number
	image: string
	initialRating: number
	characteristics: Characteristic[]
	description: string
	advantages: string
	disAdvantages: string
	html: string
	blog: Blog
	companyId: string
	clicks: number
	reviews: Review[]
	reviewCount: number
	reviewAvg: number | null
}

export interface Characteristic {
	name: string
	value: string
}

export interface Blog {
	text: string
	_id: string
}

export interface Review {
	_id: string
	productId: string
	description: string
	name: string
	title: string
	createdAt: string
	rating: number
	updatedAt: string
}