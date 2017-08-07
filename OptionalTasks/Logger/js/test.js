(function () {
    var logger = null;
    var inputValue = '';

    function submitValue() {
        logger = getSelectedTypeOfLogger();
        inputValue = getInputValue();
        
        logger.log(inputValue);
    }

    function getSelectedTypeOfLogger() {
        var checkedRadioId = 0;

        $('.log-selector').find('input')
                        .each(function () {
                            if ($(this).prop('checked')) {
                                checkedRadioId = $(this).prop('id');
                                return;
                            }
                        });
        
        switch (checkedRadioId) {
            case '0':
                return new BaseLogger();
            case '1':
                return new TableLogger();
            case '2':
                return new TableTimeLogger();
        }
    }

    function getInputValue() {
        return $('.form__text').val();
    }

    $('.form__button').click(submitValue);
})();