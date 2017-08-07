function Calculator() {
	function sum(firstParameter, secondParameter) {
		return firstParameter + secondParameter;
	}

	function deduct(firstParameter, secondParameter) {
		return firstParameter - secondParameter;
	}

	function multiply(firstParameter, secondParameter) {
		return firstParameter * secondParameter;
	}

	function divide(firstParameter, secondParameter) {
		return firstParameter / secondParameter;
	}

	function getOperationAccordingToOperatorType(arithmeticOperator) {
		switch (arithmeticOperator) {
			case '+':
				return sum;
			case '-':
				return deduct;
			case '*':
				return multiply;
			case '/':
				return divide
		}
	}

	function convertStringToNumber(stringValue) {
		return +stringValue;
	}

	return {
		calculate: function (arithmeticOperator) {
			var operation = getOperationAccordingToOperatorType(arithmeticOperator);

			return function (firstValue) {
				var firstParameter = convertStringToNumber(firstValue);

				return function (secondValue) {
					var secondParameter = convertStringToNumber(secondValue);

					return operation(firstParameter, secondParameter);
				}
			}
		}
	}
};