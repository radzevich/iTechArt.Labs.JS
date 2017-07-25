(function () {
    this.unitOfWork = new UnitOfWork();
    var factory = new QuestionVisualElementFactory(); 

    createPageWithQuestions(unitOfWork.getNextRangeOfQuestions());

    function createPageWithQuestions(questions) {
        var $ul = createUnorderedListOfQuestions(questions);

        checkIfCurrentRangeIsExtreme();
        displayQuestionListOnPage('.page__content', $ul);
    };

    function createUnorderedListOfQuestions(questions) { 
        var $ul = $('<ul></ul>');

        for (var i = 0; i < questions.length; i++) {
            var questionCreator = factory.getCreator(questions[i].typeId);
            var question = questionCreator.create(questions[i], unitOfWork.getAnswersToTheQuestion(questions[i]));

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
        if (unitOfWork.currentRangeIsFirst()) {
            $('.pager__previous-button').css('display', 'none');
        } else {
            $('.pager__previous-button').css('display', 'inline');
        }
        if (unitOfWork.currentRangeIsLast()) {
            $('.pager__next-button').text('Отправить');
        } else {
            $('.pager__next-button').text('Далее');
        }
    }

    function saveValuesFromForm() {
        $('.form input').each(
            function (index){  
                var input = $(this);

                unitOfWork.update(
                    input.attr('name'),
                    input.attr('id'),
                    // In case input is text it's attribute "value" will be defined,
                    // in other way attribute "checked" will.
                    (input.attr('value') !== undefined) ? input.attr('value') : input.attr('checked')
                )
            }
        );
    }

    (function () {
        $('.pager__next-button').click(function () {
            createPageWithQuestions(unitOfWork.getNextRangeOfQuestions());
        });
        $('.pager__previous-button').click(function () {
            createPageWithQuestions(unitOfWork.getPreviousRangeOfQuestions());
        });
    })();
})();

