function CheckType() {
    return {
        isArray: function (obj) {
            return obj && obj.constructor === Array;
        },

        isBoolean: function (obj) {
            return obj && obj.constructor === Boolean;
        },

        isDate: function (obj) {
            return obj && obj.constructor === Date;
        },

        isNumber: function (obj) {
            return obj && obj.constructor === Number;
        },

        isString: function (obj) {
            return obj && obj.constructor === String;
        },

        isFunction: function (obj) {
            return obj && obj.constructor === Function;
        },

        isUndefined: function (obj) {
            return obj === undefined;
        },

        isNull: function (obj) {
            return obj === null;
        }
    }
}