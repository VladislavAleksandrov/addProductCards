const checkUrl = (string) => {
	return (string.startsWith('https://') || string.startsWith('http://') || string.startsWith('img/')) && (string.endsWith('.png') || string.endsWith('.jpg') || string.endsWith('.jpeg') || string.endsWith('.gif') || string.endsWith('.svg') || string.endsWith('.bmp'));
}

const checkAllInputs = () => {
	const button = document.querySelector('.add-product__button');
	const $productName = document.querySelector('#product-name');
	const $productLink = document.querySelector('#product-link');
	const $productPrice = document.querySelector('#product-price');

	const editButtonStyle = () => {
		if ($productName.value && checkUrl($productLink.value) && $productPrice.value) {
			button.classList.add('add-product__button_edit');
		} else {
			button.classList.remove('add-product__button_edit')
		}
	}
	$productName.addEventListener('input', editButtonStyle);
	$productLink.addEventListener('input', editButtonStyle);
	$productPrice.addEventListener('input', editButtonStyle);
}
checkAllInputs();