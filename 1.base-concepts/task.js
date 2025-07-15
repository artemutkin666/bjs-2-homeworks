"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	const discriminant = b ** 2 - 4 * a * c;

	if (discriminant > 0) {
		// Два действительных корня
		const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(x1, x2);
	} else if (discriminant === 0) {
		// Один действительный корень
		const x = -b / (2 * a);
		arr.push(x);
	}

	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	// Проверка полного покрытия кредита
	if (contribution >= amount) {
		return 0; // Если взнос больше или равен сумме кредита, общая выплата 0
	}

	// Преобразование процентной ставки
	const monthlyPercent = percent / 100 / 12;

	// Тело кредита
	const loanBody = amount - contribution;

	// Формула аннуитетного платежа
	const monthlyPayment = loanBody * (monthlyPercent * Math.pow(1 + monthlyPercent, countMonths)) / (Math.pow(1 + monthlyPercent, countMonths) - 1);

	// Общая сумма выплат 
	const totalAmount = monthlyPayment * countMonths;

	// Округление
	return parseFloat(totalAmount.toFixed(2));
}