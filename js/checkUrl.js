const checkUrl = (string) => {
	return (string.startsWith('https://') || string.startsWith('http://') || string.startsWith('img/')) && (string.endsWith('.png') || string.endsWith('.jpg') || string.endsWith('.jpeg') || string.endsWith('.gif') || string.endsWith('.svg') || string.endsWith('.bmp'));
}
