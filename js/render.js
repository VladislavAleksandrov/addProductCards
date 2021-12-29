const renderCard = (product) => {
	let template = document.querySelector('#temp');
	let templateClone = template.content.cloneNode(true);
	let productPrice = product.price + ' руб.'
	templateClone.querySelector('.card__name').textContent = product.name;
	templateClone.querySelector('.card__description').textContent = product.description;
	templateClone.querySelector('.card__img').src = product.link;
	templateClone.querySelector('.card__price').textContent = productPrice;
	templateClone.querySelector('.card').dataset.id = product.id;
	document.querySelector('.products__cards').append(templateClone);
}

const render = (array) => {
	array.forEach((product, i) => {
		product.id = +new Date() + i
		renderCard(product)
	})
}

