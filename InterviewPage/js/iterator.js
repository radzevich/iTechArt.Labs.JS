var Iterator = function(arrayLength) {
    var index = 0;
    var currentRange = {
        startIndex: 0,
        endIndex: 0,
    };

    function calculateStartIndex(step) {
        var currentRangeSize = (currentRange.endIndex - 1) % step + 1;

        return currentRange.endIndex - currentRangeSize;
    }

    return {
        getNextRange: function (step) {
            if (currentRange.endIndex + step < arrayLength) {
                currentRange.endIndex += step;
            } else {
                currentRange.endIndex = arrayLength;
            }

            currentRange.startIndex = calculateStartIndex(step);

            return currentRange;
        },

        getPreviousRange: function (step) {
            currentRange.endIndex = currentRange.startIndex;
            currentRange.startIndex = currentRange.endIndex - step;

            return currentRange;
        },
        // getNextRange: function (step) {
        //     rangeOfIndexes = { startIndex: index };

        //     if (index + step < arrayLength) {
        //         index += step;
		// 	} else {
        //         index = arrayLength;
        //     }
            
        //     rangeOfIndexes.endIndex = index;

        //     return rangeOfIndexes;
        // },

        // getPreviousRange: function (step) {
        //     rangeOfIndexes = { endIndex: index };
            
        //     if (index - step >= 0) {
        //         if (index % step === 0) {
        //             index -= step;
        //         } else {
        //             index -= index % step;
        //         }
        //     } else {
        //         index = 0;
        //     }
            
        //     rangeOfIndexes.startIndex = index;

        //     return rangeOfIndexes;
        // },

        getCurrentRange: function() {
            return currentRange;
        }
    };
}