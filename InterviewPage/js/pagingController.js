var PagingController = function(pageItems, numberOfItemsInTheRange) {
    var index = 0;
    var currentRange = {
        startIndex: 0,
        endIndex: 0,
    };

    function calculateStartIndex() {
        var currentRangeSize = (currentRange.endIndex - 1) % numberOfItemsInTheRange + 1;

        return currentRange.endIndex - currentRangeSize;
    }

    function getCurrentRange() {
        return currentRange;
    }

    return {
        getNextRangeOfItems: function () {
            if (currentRange.endIndex + numberOfItemsInTheRange < pageItems.length) {
                currentRange.endIndex += numberOfItemsInTheRange;
            } else {
                currentRange.endIndex = pageItems.length;
            }

            currentRange.startIndex = calculateStartIndex();

            return pageItems.slice(currentRange.startIndex, currentRange.endIndex);
        },

        getPreviousRangeOfItems: function () {
            currentRange.endIndex = currentRange.startIndex;
            currentRange.startIndex = currentRange.endIndex - numberOfItemsInTheRange;

            return pageItems.slice(currentRange.startIndex, currentRange.endIndex);
        },

        currentRangeIsFirst: function () {
            return currentRange.startIndex === 0;
        },

        currentRangeIsLast: function () {
            return currentRange.endIndex === pageItems.length;
        },
    };
}