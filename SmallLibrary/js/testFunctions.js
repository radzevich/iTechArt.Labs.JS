function TestFunctions() {
    var libForTests = new CustomArray();

    return {
        testForEach: function (sourceArrayForTests) {
            var testResultArray = [];
            var testFunction = function (arrayItem) {
                testResultArray.push(arrayItem * 10);
            }

            libForTests.forEach(sourceArrayForTests, testFunction);

            return testResultArray;
        },

        testWhere: function (sourceArrayForTests) {
            var testResultArray = [];
            var testFunction = function (arrayItem) {
                return (arrayItem >= 5 && arrayItem <= 10);
            }

            libForTests.where(sourceArrayForTests, testFunction);

            return testResultArray;
        },

        testFirst: function (sourceArrayForTests) {
            return libForTests.first(sourceArrayForTests);
        },

        testLast: function (sourceArrayForTests) {
            return libForTests.last(sourceArrayForTests);
        },

        testSelect: function (sourceArrayForTests) {
            var testResultArray = [];
            var testFunction = function (arrayItem) {
                debugger;
                return Object.getPrototypeOf(arrayItem);
            }

            return libForTests.select(sourceArrayForTests, testFunction);
        },

        testSkip: function (sourceArrayForTests, numberOfItemToSkipOff) {
            return libForTests.skip(sourceArrayForTests, numberOfItemToSkipOff);
        },

        testTake: function (sourceArrayForTests, itemsToTakeCount) {
            return libForTests.take(sourceArrayForTests, itemsToTakeCount);
        },
    }
}