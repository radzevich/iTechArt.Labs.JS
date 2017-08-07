function ArrayLibrary() {
	var self = {}

	function getSortAlgorithmByName(sortingAlgorithmName) {
		switch (sortingAlgorithmName) {
			case 'bubble':
				return bubbleSort;
			case 'quick':
				return function(arrayToSort) {
					quickSort(arrayToSort, 0, arrayToSort.length - 1);
				};
			default:
				return null;
		}
	}

	function quickSort(arrayToSort, left, right) {
	    var index;

	    if (arrayToSort.length > 1) {
	        index = partition(arrayToSort, left, right);

	        if (left < index - 1) {
	            quickSort(arrayToSort, left, index - 1);
	        }

	        if (index < right) {
	            quickSort(arrayToSort, index, right);
	        }
	    }

	    return arrayToSort;
	}

	function swap(arrayToSort, firstIndex, secondIndex){
	    var temp = arrayToSort[firstIndex];

	    arrayToSort[firstIndex] = arrayToSort[secondIndex];
	    arrayToSort[secondIndex] = temp;
	}

	function partition(arrayToSort, left, right) {
	    var separator = arrayToSort[Math.floor((right + left) / 2)];
	    var i = left;
	    var j = right;


	    while (i <= j) {
	        while (arrayToSort[i] < separator) {
	            i++;
	        }

	        while (arrayToSort[j] > separator) {
	            j--;
	        }

	        if (i <= j) {
	            swap(arrayToSort, i, j);
	            i++;
	            j--;
	        }
	    }

	    return i;
	}

	function bubbleSort(arrayToSort)
	{
	    var swapped = false;

	    do {
	        swapped = false;
	        for (var i = 0; i < arrayToSort.length - 1; i++) {
	            if (arrayToSort[i] > arrayToSort[i + 1]) {
	                var temp = arrayToSort[i];

	                arrayToSort[i] = arrayToSort[i + 1];
	                arrayToSort[i + 1] = temp;

	                swapped = true;
	            }
	        }
	    } while (swapped);
	}


	self.sort = function (arrayToSort, sortingAlgorithmName) {
		var sortingAlgorithm = getSortAlgorithmByName(sortingAlgorithmName);

		sortingAlgorithm(arrayToSort);
	}

	self.getMin = function (array) {
		var minValue = Number.MAX_SAFE_INTEGER;

		for (var i = 0; i < array.length; i++) {
			if (minValue > array[i]) {
				minValue = array[i];
			}
		}
		return array[i];
	}

	self.getMax = function (array) {
		var maxValue = Number.Number.MIN_SAFE_INTEGER;

		for (var i = 0; i < array.length; i++) {
			if (maxValue < array[i]) {
				maxValue = array[i];
			}
		}
		return array[i];
	}

	self.getMedian = function (array) {
		var arrayToSort = array.slice();

		bubbleSort(arrayToSort)
		return arrayToSort[Math.floor(arrayToSort.length / 2)];
	}

	return self;
}