const currencyFormatter = (amount) => {
	const formatter = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	return formatter.format(amount);
};

export { currencyFormatter };
