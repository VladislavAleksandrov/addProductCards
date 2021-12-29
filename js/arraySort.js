const sortArray = (array, key, fromMaxToMin) => {
	if (key === 'price' || key === 'id') {
		return array.sort((a, b) => {
			let num1 = a[key].toString().replace(/\W/g, '');
			let num2 = b[key].toString().replace(/\W/g, '');
			if (fromMaxToMin) {
				return (+num2 - +num1);
			} else return +num1 - +num2
		})

	} else if (key === 'name') {
		return array.sort((a, b) => {
			if (fromMaxToMin) {
				return (a[key] > b[key]) ? 1 : -1;
			} else {
				return (a[key] > b[key]) ? -1 : 1;
			}
		})
	}
}

const selectCases = () => {
	let newArr = [];
	switch ($select.value) {
		case 'decrease':
			newArr = sortArray(array, 'price', true);
			break
		case 'increase':
			newArr = sortArray(array, 'price', false);
			break
		case 'az':
			newArr = sortArray(array, 'name', true);
			break
		case 'za':
			newArr = sortArray(array, 'name', false);
			break
		default:
			newArr = JSON.parse(localStorage.array);
			break
	}
	document.querySelector('.products__cards').innerHTML = '';
	render(newArr);
	localStorage.select = $select.value;
}

const $select = document.querySelector('.choose-form__select');
$select.addEventListener('input', selectCases);

if (localStorage.select) {
	$select.value = localStorage.select;
	selectCases()
}