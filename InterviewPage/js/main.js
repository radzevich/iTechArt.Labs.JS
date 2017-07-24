(function () {
    var unitOfWork = new UnitOfWork();
    var factory = new QuestionVisualElementFactory(); 

    createPageWithQuestions(unitOfWork.getNextRangeOfQuestions());

    function createPageWithQuestions(questions) {
        console.log(questions);
        var $ul = createUnorderedListOfQuestions(questions);

        displayQuestionListOnPage('.page__content', questions);
        checkIfCurrentRangeIsExtreme();
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
            $('pager__previous-button').css('display', 'inline');
        }
        if (unitOfWork.currentRangeIsLast()) {
            $('pager__next-button').text('Отправить');
        }
    }

    function onNextButtonClick(callback) {
        callback(unitOfWork.getNextRangeOfQuestions());    
        console.log('here0');
    }

    function onPreviousButtonClick(callback) {
        callback(unitOfWork.getPreviousRangeOfQuestions());       
        console.log('here');
    }

    (function () {
        $('.pager__next-button').click(function () {
            onNextButtonClick(createPageWithQuestions);
        });
        $('.pager__previous-button').click(function () {
            onNextButtonClick(createPageWithQuestions);
        });
    })();
})();