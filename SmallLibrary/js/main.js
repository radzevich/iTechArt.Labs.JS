
// function TestDataForMiniJsLibrary() {
//     this.arrayWithIntegerValues = [1,2,3 ];



// }




// (function(){

// var testData = new TestDataForMiniJsLibrary();
// var tests = new TestsForMiniJsLibrary(testData);
// var populateTestData = function() {
// var testData = new TestDataForMiniJsLibrary();
// testData.array = $('.array').html();
// };
// $('.button').on('click', populateTestData);
// $('.findLastElement').on('click', tests.findLastElement);

// })();


(function(){
    (function initializePageEvents() {
        
    })();

})();


var Main = function () {
    var _instance = {};
    var _array = [];

    $(document).ready(function () {
        var _displayContext = 'array-display__list_proc';
        var _event = 'click';

        $('.form__button_value').on(_event, display(_displayContext, onInputButtonClick(insertValue)));
        $('.form__button_null').on(_event, display(_displayContext, onInputButtonClick(insertNull)));
        $('.form__button_undefined').on(_event, display(_displayContext, onInputButtonClick(insertUndefined)));

        $('.block__button_for-each').on(_event, display(_displayContext, onForEachButtonClick()));
        $('.block__button_where').on(_event, display(_displayContext, onWhereButtonClick()));
        $('.block__button_first').on(_event, display(_displayContext, onFirstButtonClick()));
        $('.block__button_last').on(_event, display(_displayContext, onLastButtonClick()));
        $('.block__button_select').on(_event, display(_displayContext, onSelectButtonClick()));
        $('.block__button_skip').on(_event, display(_displayContext, onSkipButtonClick()));
        $('.block__button_take').on(_event, display(_displayContext, onTakeButtonClick()));
    }); 

    function getArray() {
        return _array;
    }

    function insert() {
        _array.push(this.value);
    }

    function insertValue() {
        var _valueToInput = {
            value: $(".form__text").val()
        } 

        if (_valueToInput.value !== 0 && !_valueToInput.value) {
            return;
        }

        insert.call(_valueToInput);   
    }

    function insertNull() {
        var _valueToInput = {
            value: null
        } 

        insert.call(_valueToInput);   
    }

    function insertUndefined() {
        var _valueToInput = {
            value: undefined
        } 

        insert.call(_valueToInput);   
    }

    function refresh() {
        $(this.context).empty();
        console.log("refreshed");
    }

    function show(valueToShow) {   
        $(this.context).html(valueToShow);  
    }

    function objectToString(obj) {
        var _string = "";

        if (!obj) {
            return _string;
        }

        if (CheckType.isString(obj)) {
            _string += '<li>' + obj + '</li>';
        } else {
            for (var i = 0; i < Object.values(obj).length; i++) {
                _string += '<li>' + Object.values(obj)[i] + '</li>';
            }
        }

        return _string;
    }

    function display (parentElement, objectToDisplay) {
        var _displayContext = {
            context: parentElement,
        };

        refresh.call(_displayContext);
        show.call(_displayContext, objectToString(objectToDisplay));
    }

    function onInputButtonClick(callback) {
        callback();
        return getArray();
    }

    function onForEachButtonClick() {
        var _func = function (item) {
            console.log(item * 2);
        };

        CustomArray.forEach(_array, _func);
    }

    function onWhereButtonClick() {
        var _func = function (item) {
            return (item >= 10 && item <= 20);
        };
        
        return CustomArray.where(_array, _func);
    }

    function onFirstButtonClick() {
        return CustomArray.first(_array);
    }

    function onLastButtonClick() {
        return CustomArray.last(_array);
    }

    function onSelectButtonClick() {
        var _func = function (item) {
            return item.length;
        };

        return CustomArray.select(_array, _func);
    }

    function onSkipButtonClick() {
        //var _value = $('#skip-block__number-input').val();
        var _value = document.getElementById('skip-block__number-input').value;

        return CustomArray.skip(_array, _value);
    }

    function onTakeButtonClick() {
        var _value = document.getElementById('take-block__number-input').value;

        return CustomArray.take(_array, _value);
    }

    return _instance;
}();

