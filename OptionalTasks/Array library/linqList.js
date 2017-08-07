function LinqList(array) {
	/**
	 * CustomArray is a set of array functions developed in the first task 
	 *(see arrayFunctions.js on https://github.com/radzevich/iTechArt.Labs.JS/blob/develop/SmallLibrary/small-lib)
	 */
	var arrayFunctionsLib = new CustomArray();

	var self = {};

	self.forEach = function (callback) {
		arrayFunctionsLib.forEach(array, callback);
		return self;
	}

	self.where = function (predicate) {
		var selectedItems = arrayFunctionsLib.where(array, predicate);
		return new LinqList(selectedItems);
	}

	self.select = function (selector) {
		var selectedItems = arrayFunctionsLib.select(array, selector);
		return new LinqList(selectedItems);
	}

	self.first = function () {
		return arrayFunctionsLib.first(array);
	}

	self.last = function () {
		return arrayFunctionsLib.last(array);
	}

	self.getHash = function () {
		var hashSum = 0;

		for (var i = 0; i < array.length; i++) {
			hashSum += array[i] / (i + 1);
		}

		return Math.floor(hashSum * 1000000);
	}

	return self;
}