const defaultArray = [
	{
		name: 'Наименование товара',
		description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		link: 'img/product.png',
		price: '10 000',
	}, {
		name: 'Наименование товара',
		description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		link: 'img/product.png',
		price: '10 000',
	}, {
		name: 'Наименование товара',
		description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		link: 'img/product.png',
		price: '10 000',
	}, {
		name: 'Наименование товара',
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