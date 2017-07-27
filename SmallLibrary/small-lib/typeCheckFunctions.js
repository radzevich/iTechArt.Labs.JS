function CheckType() {
    return {
        isArray: function (obj) {
            return !isNull(obj) && !isUndefined(obj) && obj.constructor === Array;
        },

        isBoolean: function (obj) {
            return !isNull(obj) && !isUndefined(obj) && obj.constructor === Boolean;
        },

        isDate: function (obj) {
            return !isNull(obj) && !isUndefined(obj) && obj.constructor === Date;
        },

        isNumber: function (obj) {
            debugger;
            return !isNull(obj) && !isUndefined(obj) && obj.constructor === Number;
        },

        isString: function (obj) {
            return !isNull(obj) && !isUndefined(obj) && obj.constructor === String;
        },

        isFunction: function (obj) {
            return !isNull(obj) && !isUndefined(obj) && obj.constructor === Function;
        },

        isUndefined: function (obj) {
            return obj === undefined;
        },

        isNull: function (obj) {
            return obj === null;
        }
    }
}