const deleteProducts = () => {
	document.querySelector('.products__cards').addEventListener('click', (event) => {
		if (!event.target.closest('.card__delete')) return;
		const $card = event.target.closest('.card')
		$card.classList.add('card__remove')
		$card.addEventListener('animationend', () => {
			console.log('animation end')
			$card.remove();
			saveProducts();
		}, {once: true})





	})
}
deleteProducts();