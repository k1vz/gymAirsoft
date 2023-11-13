interface IData {
	content: string
	imgPath: string
}

export interface ISlideshow {
	content: IData[]
}

export interface NavBarProps {
	pages: [{
		title: string;
		onClick: () => void;
	}];
}

export interface HeaderProps {
	title: string;
	subtitle: string;
	pages: [{
		title: string;
		onClick: () => void;
	}]
}