function TableLogger() {
    function deriveFromObject(base) {
        function F() {};
        F.prototype = base;
        return new F();
    }

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

    var self = deriveFromObject(BaseLogger);

    self.log = function (inputStringToLog) {
        self.prototype.log(
            splitStringIntoWords(inputStringToLog).join(' | ')
        );
    }

    return self;
}
