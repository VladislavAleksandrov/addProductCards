const alertFillProductName = () => {
	const $productName = document.querySelector('#product-name');
	$productName.classList.add('error');
	document.querySelector('.product-name_error').style.display = "block";
	$productName.focus()

	$productName.addEventListener('input', () => {
		$productName.classList.remove('error')
		document.querySelector('.product-name_error').style.display = "none";
	}, {once: true})
}

const alertFillProductLink = () => {
	const $productLink = document.querySelector('#product-link');
	$productLink.classList.add('error');
	document.querySelector('.product-link_error').style.display = "block";
	$productLink.focus()

	$productLink.addEventListener('input', () => {
		$productLink.classList.remove('error')
		document.querySelector('.product-link_error').style.display = "none";
	}, {once: true})
}

const alertFillProductPrice = () => {
	const $productPrice = document.querySelector('#product-price');
	$productPrice.classList.add('error');
	document.querySelector('.product-price_error').style.display = "block";
	$productPrice.focus()

	$productPrice.addEventListener('input', () => {
		$productPrice.classList.remove('error')
		document.querySelector('.product-price_error').style.display = "none";
	}, {once: true})
}