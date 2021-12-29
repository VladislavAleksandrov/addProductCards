
const saveArrayOfProducts = () => {

	const array = JSON.parse(localStorage.array ?? null) ?? defaultArray
	render(array);
	localStorage.array = JSON.stringify(array);
}
saveArrayOfProducts()