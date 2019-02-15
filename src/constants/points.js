/* global PATH_TO_RESOURCES */

export const POINTS = [
	{
		id: 'sport',
		title: 'Спорт',
		imgSrc: `${ PATH_TO_RESOURCES }/images/gym.svg`,
		subcategories: ['Велопрокат', 'Тренажеры', 'Настольный теннис', 'Волейбол', 'Баскетбол', 'Скейтпарк', 'Поле для мини-футбола'],
	},
	{
		id: 'nature',
		title: 'Досуг',
		imgSrc: `${PATH_TO_RESOURCES }/images/ferris-wheel.svg`,
		subcategories: ['Соседский центр', 'Сцена', 'Буккроссинг', 'Миниферма', 'Беседка', 'Кафе'],
	},
	{
		id: 'children',
		title: 'Дети',
		imgSrc: `${ PATH_TO_RESOURCES }/images/family.svg`,
		subcategories: ['Качели', 'Горки', 'Батуты', 'Скалодром', 'Лабиринт'],
	},
	{
		id: 'entertainments',
		title: 'События',
		imgSrc: `${PATH_TO_RESOURCES }/images/vinyl.svg`,
		subcategories: ['Ярмарки', 'Кино на открытом воздухе', 'Дискотека', 'Мастер-классы', 'Лекции', 'Гастрономический фестиваль'],
	},
	{
		id: 'custom',
		title: 'Другое',
		imgSrc: `${PATH_TO_RESOURCES}/images/idea.svg`,
	},
];