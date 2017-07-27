function TestDataGenerator() {
    const NUMBER_OF_VALUE_TYPES = 7

    function getRandomValue(arraySize) {
        var valueType = Math.floor(Math.random() * 10) % NUMBER_OF_VALUE_TYPES;

        switch (valueType) {
            case 0: 
                return Math.floor(Math.random() * arraySize);
            case 1:
                return Math.random() * arraySize;
            case 2:
                return 'Hello';
            case 3:
                return Math.random() < 0.5 ? true : false;
            case 4:
                return null;
            case 5:
                return undefined;
            case 6:
                return NaN;
        }
    }

    return {
        generate: function (arraySize) {
            var arrayWithRandomValues = [];

            for (var i = 0; i < arraySize; i++) {
                arrayWithRandomValues[i] = getRandomValue(arraySize);
            }

            return arrayWithRandomValues;
        }
    }
}