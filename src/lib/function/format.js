const formatRupiah = (amount) => {
	const formatter = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	return formatter.format(amount);
};

function formatDateToIndonesian(date) {
	return date.toLocaleDateString('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
}
function capitalizeWords(str) {
	return str
		.split(' ')
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(' ');
}

export { formatRupiah, capitalizeWords, formatDateToIndonesian };
