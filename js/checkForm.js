const checkForm = () => {
	const button = document.querySelector('.add-product__button');
	const $productName = document.querySelector('#product-name');
	const $productLink = document.querySelector('#product-link');
	const $productPrice = document.querySelector('#product-price');

	const checkFormValues = () => {

		if (!$productName.value) {
			alertFillProductName();
		} else if (!checkUrl($productLink.value)) {
			alertFillProductLink();
		} else if (!$productPrice.value) {
			alertFillProductPrice();
		}
	}
	button.addEventListener('click', checkFormValues);
}

checkForm()
