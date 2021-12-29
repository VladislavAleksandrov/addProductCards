const defaultArray = [
	{
		productName: 'Наименование товара',
		productDescription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		productLink: 'img/product.png',
		productPrice: '10 000',
		id: 0,
	}, {
		productName: 'Наименование товара',
		productDescription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		productLink: 'img/product.png',
		productPrice: '10 000',
		id: 1,
	}, {
		productName: 'Наименование товара',
		productDescription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		productLink: 'img/product.png',
		productPrice: '10 000',
		id: 2,
	}, {
		productName: 'Наименование товара',
		productDescription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		productLink: 'img/product.png',
		productPrice: '10 000',
		id: 3,
	},
];
const array = JSON.parse(localStorage.array);
let id = 4;
const pushToArray = () => {
	const $productName = document.querySelector('#product-name');
	const $productDescription = document.querySelector('#product-description');
	const $productLink = document.querySelector('#product-link');
	const $productPrice = document.querySelector('#product-price');
	const object = {
		productName: $productName.value,
		productDescription: $productDescription.value,
		productLink: $productLink.value,
		productPrice: $productPrice.value,
		id: id+1,
	}
	array.push(object);
	console.log(array);
}