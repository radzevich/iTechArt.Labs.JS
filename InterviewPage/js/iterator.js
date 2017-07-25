var Iterator = function(arrayLength) {
    var index = 0;
    var rangeOfIndexes = {};

    return {
        getNextRange: function (step) {
            rangeOfIndexes = { startIndex: index };

            if (index + step < arrayLength) {
                index += step;
			} else {
                index = arrayLength;
            }
            
            rangeOfIndexes.endIndex = index;

            console.log(rangeOfIndexes);
            return rangeOfIndexes;
        },

        getPreviousRange: function (step) {
            rangeOfIndexes = { endIndex: index };

            if (index - step >= 0) {
                index -= step;
            } else {
                index = 0;
            }
            
            rangeOfIndexes.startIndex = index;

            return rangeOfIndexes;
        },

        getCurrentRange: function() {
            return rangeOfIndexes;
        }
    };
}