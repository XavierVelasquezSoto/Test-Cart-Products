import { v4 } from 'uuid';

export const PRODUCTS = [
	{
		id: v4(),
		name: 'Waffle',
		descriptionProduct: 'Waffle with Berries',
		price: 6.5,
		images: {
			mobile: '/assets/images/image-waffle-mobile.jpg',
			tablet: '/assets/images/image-waffle-tablet.jpg',
			desktop: '/assets/images/image-waffle-desktop.jpg',
			thumbnail: '/assets/images/image-waffle-thumbnail.jpg'
		},
		quantity: 1
	},
	{
		id: v4(),
		name: 'Crème Brûlée',
		descriptionProduct: 'Vanilla Bean Crème Brûlée',
		price: 7.0,
		images: {
			mobile: '/assets/images/image-creme-brulee-mobile.jpg',
			tablet: '/assets/images/image-creme-brulee-tablet.jpg',
			desktop: '/assets/images/image-creme-brulee-desktop.jpg',
			thumbnail: '/assets/images/image-creme-brulee-thumbnail.jpg'
		},
		quantity: 1
	},
	{
		id: v4(),
		name: 'Macaron',
		descriptionProduct: 'Macaron Mix of Five',
		price: 8.0,
		images: {
			mobile: '/assets/images/image-macaron-mobile.jpg',
			tablet: '/assets/images/image-macaron-tablet.jpg',
			desktop: '/assets/images/image-macaron-desktop.jpg',
			thumbnail: '/assets/images/image-macaron-thumbnail.jpg'
		},
		quantity: 1
	},
	{
		id: v4(),
		name: 'Tiramisu',
		descriptionProduct: 'Classic Tiramisu',
		price: 5.5,
		images: {
			mobile: '/assets/images/image-tiramisu-mobile.jpg',
			tablet: '/assets/images/image-tiramisu-tablet.jpg',
			desktop: '/assets/images/image-tiramisu-desktop.jpg',
			thumbnail: '/assets/images/image-tiramisu-thumbnail.jpg'
		},
		quantity: 1
	},
	{
		id: v4(),
		name: 'Baklava',
		descriptionProduct: 'Pistachio Baklava',
		price: 4.0,
		images: {
			mobile: '/assets/images/image-baklava-mobile.jpg',
			tablet: '/assets/images/image-baklava-tablet.jpg',
			desktop: '/assets/images/image-baklava-desktop.jpg',
			thumbnail: '/assets/images/image-baklava-thumbnail.jpg'
		},
		quantity: 1
	},
	{
		id: v4(),
		name: 'Pie',
		descriptionProduct: 'Lemon Meringue Pie',
		price: 5.0,
		images: {
			mobile: '/assets/images/image-meringue-mobile.jpg',
			tablet: '/assets/images/image-meringue-tablet.jpg',
			desktop: '/assets/images/image-meringue-desktop.jpg',
			thumbnail: '/assets/images/image-meringue-thumbnail.jpg'
		},
		quantity: 1
	},
	{
		id: v4(),
		name: 'Cake',
		descriptionProduct: 'Red Velvet Cake',
		price: 4.5,
		images: {
			mobile: '/assets/images/image-cake-mobile.jpg',
			tablet: '/assets/images/image-cake-tablet.jpg',
			desktop: '/assets/images/image-cake-desktop.jpg',
			thumbnail: '/assets/images/image-cake-thumbnail.jpg'
		},
		quantity: 1
	},
	{
		id: v4(),
		name: 'Brownie',
		descriptionProduct: 'Salted Caramel Brownie',
		price: 5.5,
		images: {
			mobile: '/assets/images/image-brownie-mobile.jpg',
			tablet: '/assets/images/image-brownie-tablet.jpg',
			desktop: '/assets/images/image-brownie-desktop.jpg',
			thumbnail: '/assets/images/image-brownie-thumbnail.jpg'
		},
		quantity: 1
	},
	{
		id: v4(),
		name: 'Panna Cotta',
		descriptionProduct: 'Vanilla Panna Cotta',
		price: 6.5,
		images: {
			mobile: '/assets/images/image-panna-cotta-mobile.jpg',
			tablet: '/assets/images/image-panna-cotta-tablet.jpg',
			desktop: '/assets/images/image-panna-cotta-desktop.jpg',
			thumbnail: '/assets/images/image-panna-cotta-thumbnail.jpg'
		},
		quantity: 1
	}
];
