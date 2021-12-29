const addProduct = (event) => {
	event.preventDefault();
	const button = document.querySelector('.add-product__button');
	const $productName = document.querySelector('#product-name');
	const $productDescription = document.querySelector('#product-description');
	const $productLink = document.querySelector('#product-link');
	const $productPrice = document.querySelector('#product-price');

	const product = {
		name: $productName.value,
		description: $productDescription.value,
		link: $productLink.value,
		price: $productPrice.value,
		id: +new Date()
	}

	array.push(product);
	renderCard(product)
	saveArrayOfProducts(array);
	$productName.value = '';
	$productLink.value = '';
	$productDescription.value = '';
	$productPrice.value = '';
	button.classList.remove('add-product__button_edit')
}

document.querySelector('#add-product').addEventListener('submit', addProduct);