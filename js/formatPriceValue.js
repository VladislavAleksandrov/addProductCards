const formatPriceValue = () => {
	const $productPrice = document.querySelector('#product-price');
	$productPrice.addEventListener('input', () => {
		let productPrice = $productPrice.value.split('');
		if (productPrice[0] === '0') productPrice.shift();
		productPrice = productPrice.filter(el => el === '0' || el > 0);
		let length = productPrice.length;
		for (let i = length - 3; i > 0; i -= 3) {
			productPrice.splice(i, 0, ' ');
		}
		$productPrice.value = productPrice.join('');
	})
}
formatPriceValue();

