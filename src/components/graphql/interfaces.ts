export interface Continent {
	name: string;
}

export interface Country {
	code: string;
	name: string;
	emoji: string;
	continent: Continent;
}

export interface QueryData {
	countries: Country[];
}
