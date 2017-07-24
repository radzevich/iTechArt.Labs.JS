(function () {
    var unitOfWork = new UnitOfWork();
    var factory = new QuestionVisualElementFactory(); 

    createPageWithQuestions(unitOfWork.getNextRangeOfQuestions());

    function createPageWithQuestions(questions) {
        checkIfCurrentRangeIsExtreme();

        var $ul = createUnorderedListOfQuestions(questions);
        displayQuestionListOnPage('.page__content', questions);
    };

    function createUnorderedListOfQuestions(questions) { 
        var $ul = $('<ul></ul>');

        for (var i = 0; i < questions.length; i++) {
            var questionCreator = factory.getCreator(questions[i].typeId);
            var question = questionCreator.create(questions[i]);

            addItemToList($ul, $(question).html());
        }

        return $ul;
    }

    function convertToListItem(stringToConvert) {
        return '<li>' + stringToConvert + '</li>'; 
    }

    function addItemToList(list, item) {
        if ($(list).has("li").length !== 0) {
            $(list).append('<hr>');
        }

        $(list).append(convertToListItem(item))
                        .css('listStyleType', 'none');
    }

    function displayQuestionListOnPage(page, questions) {
        var $ul = createUnorderedListOfQuestions(questions);

        $(page).empty();
        $ul.appendTo(page);
    }

    function checkIfCurrentRangeIsExtreme () {
        if (unitOfWork.currentRangeIsFirst()) {
            $('pager__previous-button').css('display', 'none');
        }
        if (unitOfWork.currentRangeIsLast()) {
            $('pager__next-button').text('Отправить');
        }
    }

    function onNextButtonClick(callback) {
        callback(unitOfWork.getNextRangeOfQuestions());       
    }

    function onPreviousButtonClick(callback) {
        callback(unitOfWork.getPreviousRangeOfQuestions());       
    }

    (function () {
        $('.pager__next-button').on('click', onNextButtonClick(createPageWithQuestions));
        $('.pager__previous-button').on('click', onPreviousButtonClick(createPageWithQuestions));
    })();
})();