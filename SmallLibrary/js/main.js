(function () {
    const TEST_ARRAY_SIZE = 10;

    var testDataGenerator = new TestDataGenerator();
    var testFunctions = new TestFunctions();
    var testData = null;

    function generateNewTestData() {
        testData = testDataGenerator.generate(TEST_ARRAY_SIZE);
    }

    function onOperationButtonClick(operationToExecute) {
        var optionalValue;

        //'Skip' and 'take' are two operations that need an optional value.
        if (this.className === 'button block__button_skip') {
            optionalValue = +$('.skip-input').prop('value');;
        } else if (this.className === 'button block__button_take') {
            optionalValue = +$('.take-input').prop('value');
        }

        var testResult = operationToExecute(testData, optionalValue);
        var elementToShow = null;

        //'First' and 'last' are two operations that return a single object value instead of array.
        if (this.className === 'button block__button_first' || this.className === 'button block__button_last') {
            testResult = convertObjectToArray(testResult);
        }

        showList('.array-display_result', createListToDisplayFromArray(testResult));
    }

    function convertObjectToArray(objectToConvert) {
        var arrayConvertedFromObject = [];

        arrayConvertedFromObject[0] = objectToConvert;
        return arrayConvertedFromObject;
    }

    function createListToDisplayFromArray(array) {
        var $ul = $('<ul></ul');

        for (var i = 0; i < array.length; i++) {
            $ul.append(convertUnitToListItem(array[i]));
        }

        return $ul;
    }

    function convertUnitToListItem(unitToConvert) {
        return '<li>' + unitToConvert + '</li>';
    }

    function showList(parentElement, $listToShow) {
        removeLatterAddedElements(parentElement, $listToShow[0].nodeName);
        $(parentElement).append($listToShow);
    }

    function removeLatterAddedElements(parentElement, childElementClassName) {
        var parentElementChilds = $(parentElement).children();

        for (var i = 0; i < parentElementChilds.length; i++) {
            if (parentElementChilds[i].nodeName === childElementClassName) {
                parentElementChilds[i].remove();
            }
        }
    }

    $('.form__button_generate').click(function () {
        generateNewTestData();
        showList('.array-display_source', createListToDisplayFromArray(testData));
    });
    $('.block__button_for-each').click(function () {
        onOperationButtonClick.call(this, testFunctions.testForEach);
    });
    $('.block__button_where').click(function () {
        onOperationButtonClick.call(this, testFunctions.testWhere)
    });
    $('.block__button_first').click(function () {
        onOperationButtonClick.call(this, testFunctions.testFirst)
    });
    $('.block__button_last').click(function () {
        onOperationButtonClick.call(this, testFunctions.testLast)
    });
    $('.block__button_select').click(function () {
        onOperationButtonClick.call(this, testFunctions.testSelect)
    });
    $('.block__button_skip').click(function () {
        onOperationButtonClick.call(this, testFunctions.testSkip)
    });
    $('.block__button_take').click(function () {
        onOperationButtonClick.call(this, testFunctions.testTake)
    });
})();
