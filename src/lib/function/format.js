const formatRupiah = (amount) => {
	const formatter = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	return formatter.format(amount);
};

const formatDollar = (amount) => {
	const formatter = new Intl.NumberFormat('id-ID', {
		style: 'decimal',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	// Format the amount with periods as thousands separators
	let formattedAmount = '$'+formatter.format(amount);

	return formattedAmount;
};
function formatDateToIndonesian(date) {
	return date.toLocaleDateString('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
}

function formatMonthToIndonesian(date) {
	return date.toLocaleDateString('id-ID', {
		month: 'long',
		year: 'numeric'
	});
}

function capitalizeWords(str) {
	if( !str) return ""
	str = str.toLowerCase()
	return str
		.split(' ')
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(' ');
}

function getDifferenceInDays(start, end) {
	const startDate = new Date(start);
	const endDate = new Date(end);
	endDate.setDate(endDate.getDate() + 1); // Include the end date in the calculation
	const difference = endDate - startDate;
	return Math.ceil(difference / (1000 * 3600 * 24));
}

export { formatRupiah, capitalizeWords, formatDateToIndonesian,getDifferenceInDays, formatDollar, formatMonthToIndonesian};
