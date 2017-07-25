(function () {
    this.unitOfWork = new UnitOfWork();
    var factory = new QuestionVisualElementFactory(); 

    // createPageWithQuestions(unitOfWork.getNextRangeOfQuestions());
    onPageNavigationButtonClick(unitOfWork.getNextRangeOfQuestions());

    function createPageWithQuestions(questions) {
        var $ul = createUnorderedListOfQuestions(questions);

        displayQuestionListOnPage('.page__content', $ul);
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

    function displayQuestionListOnPage(page, questionList) {
        if (!$(page).is(':empty')) {
            $(page).children().remove();
        }

        questionList.appendTo(page);
    }

    function checkIfCurrentRangeIsExtreme () {
        if (!unitOfWork.currentRangeIsFirst()) {
            $('.pager__previous-button').css('display', 'inline');
            return;
        }
        if (unitOfWork.currentRangeIsLast()) {
            $('.pager__next-button').text('Отправить');
            return;
        }
    }

    function onPageNavigationButtonClick(questions) {
        if (unitOfWork.currentRangeIsFirst()) {
            $('.pager__previous-button').css('display', 'none');
        }
        if (unitOfWork.currentRangeIsLast()) {
            $('.pager__next-button').text('Отправить');
        } else {
            $('.pager__next-button').text('Далее');
        }
        
        createPageWithQuestions(questions);
    }

    (function () {
        $('.pager__next-button').click(function () {
            onPageNavigationButtonClick(unitOfWork.getNextRangeOfQuestions());
        });
        $('.pager__previous-button').click(function () {
            onPageNavigationButtonClick(unitOfWork.getPreviousRangeOfQuestions());
        });
    })();
})();