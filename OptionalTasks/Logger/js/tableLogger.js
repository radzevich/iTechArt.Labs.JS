function TableLogger() {
    BaseLogger.call(this);
    

    function removeEmptyWordsFromArray(arrayOfWords) {
        var removedItemsCount = 0;
        var i = 0;

        while (i < arrayOfWords.length - removedItemsCount) {
            arrayOfWords[i] = arrayOfWords[i + removedItemsCount];

            if (arrayOfWords[i] === '') {
                removedItemsCount++;
            } else {
                i++;
            }
        }
        return arrayOfWords.slice(0, i);        
    }

    function splitStringIntoWords(stringToSplit) {
        var arrayOfWords = stringToSplit.split(' ');
        return removeEmptyWordsFromArray(arrayOfWords);
    }


    this.processString = function(inputStringToLog) {
        return splitStringIntoWords(inputStringToLog).join(' | ');
    }
}
