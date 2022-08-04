export type Sizes = 'sm' | 'small' | 'md' | 'medium' | 'lg' | 'large';
export enum Colors {
	purple = 'purple',
	green = 'green',
	complementary = 'complementary',
	prime = 'prime'
}

export interface ThemeColors {
	purple?: ThemeObject;
	green?: ThemeObject;
	prime?: ThemeObject;
	complementary?: ThemeObject;
}

export interface ThemeObject {
	light?: string;
	100?: string;
	200?: string;
	300?: string;
	400?: string;
	500?: string;
	600?: string;
	700?: string;
	800?: string;
	900?: string;
	1000?: string;
	dark?: string;
	lightGradient?: string;
	mediumGradient?: string;
	darkGradient?: string;
}

export type Styles = {
	flexFlow?: string;
	gap?: string | number;
	alignItems?: string;
	width?: string;
	minHeight?: string;
	backgroundColor?: string;
};
