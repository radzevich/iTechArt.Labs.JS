function CustomArray () 
{
    return {
        forEach: function (arr, callback) {
            if (!arr || !callback) {
                return;
            }

            for (var i = 0; i < arr.length; i++) {
                callback(arr[i]);
            }
        },

        where: function (arr, predicate) {
            var _result = [];

            if (!arr || !predicate) { 
                return null; 
            }

            for (var i = 0; i < arr.length; i++) {
                if (predicate(arr[i])) {
                    _result.push(arr[i]);
                }
            }

            return _result;
        },

        first: function (arr) {
            if (!arr) {
                return null;
            }

            return arr[0];
        },

        last: function (arr) {
            if (!arr) {
                return null;
            }

            return arr[arr.length - 1];
        },

        select: function (arr, selector) {
            var _result = [];

            if (!arr) {
                return null;
            }

            for (var i = 0; i < arr.length; i++) {
                _result.push(selector(arr[i]));
            }

            return _result;
        },

        skip: function (arr, number) {
            if (!arr) {
                return null;
            }

            //In case the number is equal to -1, sequences of (0 -> n-1) and (0 -> n) will be concatinated.
            //To avoid this the next test used.
            if (number === -1) {
                return arr.slice(0, number)
            } else {
                return arr.slice(0, number)
                        .concat(arr.slice(number + 1, arr.length));
            }
        },

        take: function (arr, number) {
            if (!arr) {
                return null;
            }
            
            return arr.slice(0, number);
        }
    }
};