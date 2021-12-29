const deleteProducts = () => {
	document.querySelector('.products__cards').addEventListener('click', (event) => {
		if (!event.target.closest('.card__delete')) return;
		const $card = event.target.closest('.card');
		let id = $card.dataset.id;
		$card.classList.add('card__remove');
		$card.addEventListener('animationend', () => {
			$card.remove();
			array = array.filter(product => +product.id !== +id)
			saveArrayOfProducts(array);
		}, {once: true})

	})
}
deleteProducts();