var Main = function () {
    var _instance = {};
    var _array = [];

    _instance.getArray = function () {
        return _array;
    }

    function insert() {
        _array.push(this.value);
    }

    _instance.insertValue = function () {
        var _valueToInput = {
            value: $(".form__text").val()
        } 

        if (_valueToInput.value !== 0 && !_valueToInput.value) {
            return;
        }

        insert.call(_valueToInput);   
    }

    _instance.insertNull = function () {
        var _valueToInput = {
            value: null
        } 

        insert.call(_valueToInput);   
    }

    _instance.insertUndefined = function () {
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

    _instance.display = function (parentElement, objectToDisplay) {
        var _displayContext = {
            context: parentElement,
        };

        refresh.call(_displayContext);
        show.call(_displayContext, objectToString(objectToDisplay));
    }

    _instance.onForEachButtonClick = function () {
        var _func = function (item) {
            console.log(item * 2);
        };

        CustomArray.forEach(_array, _func);
    }

    _instance.onWhereButtonClick = function () {
        var _func = function (item) {
            return (item >= 10 && item <= 20);
        };
        
        return CustomArray.where(_array, _func);
    }

    _instance.onFirstButtonClick = function () {
        return CustomArray.first(_array);
    }

    _instance.onLastButtonClick = function () {
        return CustomArray.last(_array);
    }

    _instance.onSelectButtonClick = function () {
        var _func = function (item) {
            return item.length;
        };

        return CustomArray.select(_array, _func);
    }

    _instance.onSkipButtonClick = function () {
        var _value = document.getElementById('skip-block__number-input').value;

        return CustomArray.skip(_array, _value);
    }

    _instance.onTakeButtonClick = function () {
        var _value = document.getElementById('take-block__number-input').value;

        return CustomArray.take(_array, _value);
    }

    return _instance;
}();