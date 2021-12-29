const defaultArray = [
	{
		name: 'Камера',
		description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		link: 'img/product.png',
		price: '8 000',
	}, {
		name: 'Фотокамера',
		description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		link: 'img/product.png',
		price: '60 000',
	}, {
		name: 'Фотоаппарат',
		description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		link: 'img/product.png',
		price: '11 000',
	}, {
		name: 'Ручная камера',
		description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		link: 'img/product.png',
		price: '10 000',
	},
];
const saveArrayOfProducts = (array) => {
	localStorage.array = JSON.stringify(array);
}
let array = JSON.parse(localStorage.array ?? null) || defaultArray;
saveArrayOfProducts(array);


render(array)