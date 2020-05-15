export interface Author {
	id: number;
	full_name: string;
	popular_name: string;
	biography: string;
	link_to_full_biography: string;
	image_url: string;
	created_at: string;
	updated_at: string;

	quotes?: Quote[];
}
export interface Language {
	id: number;
	name: string;
}
export interface Quote {
	id: number;
	content: string;
	link_to_the_source: string;
	approuved: boolean;
	created_at: string;
	updated_at: string;
	language_id: number;
	user_id: number;

	author?: Author;
	topics?: Topic[];
	language?: Language;
}
export interface Topic {
	id: number;
	name: string;
	description: string;
	created_at: string;
	updated_at: string;

	quotes?: Quote[];
}
