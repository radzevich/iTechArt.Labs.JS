(function () {
    const TEST_ARRAY_SIZE = 10;

    var testDataGenerator = new TestDataGenerator();
    var testFunctions = new TestFunctions();

    // var testData = {};

    function generateNewTestData() {
        this.testData = testDataGenerator.generate(TEST_ARRAY_SIZE);
    }

    function onOperationButtonClick(operationToExecute) {
        var optionalValue;

        //'Skip' and 'take' are two operations that need an optional value.
        if (this.className === '.block__button_skip') {
            optionalValue = +$('.skip-input').value();
        } else if (this.className === '.block__button_take') {
            optionalValue = +$('.skip-take').value();
        }

        var testResult = operationToExecute(testData, optionalValue);
        var elementToShow = null;

        //'First' and 'last' are two operations that return a single object value instead of array.
        if (this.className === '.block__button_first' || this.className === '.block__button_last') {
            elementToShow = convertUnitToListItem(testResult);
        } else {
            elementToShow = createListToDisplayFromArray(testResult);
        }

        showList('.array-display_result', elementToShow);
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
        onOperationButtonClick(testFunctions.testForEach)
    });
    $('.block__button_where').click(function () {
        onOperationButtonClick(testFunctions.testWhere)
    });
    $('.block__button_first').click(function () {
        onOperationButtonClick(testFunctions.testFirst)
    });
    $('.block__button_last').click(function () {
        onOperationButtonClick(testFunctions.testLast)
    });
    $('.block__button_select').click(function () {
        onOperationButtonClick(testFunctions.testSelect)
    });
    $('.block__button_skip').click(function () {
        onOperationButtonClick(testFunctions.testSkip)
    });
    $('.block__button_take').click(function () {
        onOperationButtonClick(testFunctions.testTake)
    });
})();
