const render = (array) => {

	const $productName = document.querySelector('#product-name');
	const $productDescription = document.querySelector('#product-description');
	const $productLink = document.querySelector('#product-link');
	const $productPrice = document.querySelector('#product-price');
	let productPrice = $productPrice.value;
	productPrice = productPrice + ' руб.'



	let template = document.querySelector('#temp');
	let templateClone = template.content.cloneNode(true);
	templateClone.querySelector('.card__name').textContent = $productName.value;
	templateClone.querySelector('.card__description').textContent = $productDescription.value;
	templateClone.querySelector('.card__img').src = $productLink.value;

	templateClone.querySelector('.card__price').textContent = productPrice;
	document.querySelector('.products__cards').append(templateClone);
	saveProducts();
}