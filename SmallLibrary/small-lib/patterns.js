var CustomPatterns = {

    singleton: function (creator) {
        var _instance;

        return function () {
            if (!_instance) {
                _instance = creator();
            }

            return _instance;
        }
    },

    partial: function (original) {
        var _args = Array.prototype.slice.call(arguments, 1);

        return function () {
            original(Object.values(arguments)
                        .concat(_args));
        };
    }
};