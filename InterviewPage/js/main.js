(function () {
    this.unitOfWork = new UnitOfWork();
    var factory = new QuestionVisualElementFactory(); 

    createPageWithQuestions(unitOfWork.getNextRangeOfQuestions());

    function createPageWithQuestions(questions) {
        var $ul = createUnorderedListOfQuestions(questions);

        checkIfCurrentRangeIsExtreme();
        displayContentOnPage('.page__content', $ul);
    };

    function createUnorderedListOfQuestions(questions) { 
        var $ul = $('<ul></ul>');

        for (var i = 0; i < questions.length; i++) {
            var questionCreator = factory.getCreator(questions[i].typeId);
            var question = questionCreator.create(
                questions[i], 
                unitOfWork.getAnswersToTheQuestion(questions[i])
            );

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

    function displayContentOnPage(page, contentToDisplay) {
        if (!$(page).is(':empty')) {
            $(page).children().remove();
        }

        $(page).append(contentToDisplay);
    }

    function checkIfCurrentRangeIsExtreme () {
        if (unitOfWork.currentRangeIsFirst()) {
            $('.pager__previous-button').css('display', 'none');
        } else {
            $('.pager__previous-button').css('display', 'inline');
        }
        if (unitOfWork.currentRangeIsLast()) {
            $('.pager__next-button').text('Отправить');
            changeNextButtonBehaviorToSend($('.pager__next-button'));
        } else {
            $('.pager__next-button').text('Далее');
            changeSendButtonBehaviorToNext($('.pager__next-button'));
        }
    }

    function extractValueAccordingToInpuType($input) {
        switch ($input.attr('type')) {
            case 'radio':
            case 'checkbox':
                return $input.prop('checked');
            case 'text':
                return $input.prop('value');
            default:
                return '';
        }
    }

    function saveValuesFromInputs() {
        $('.form input').each(
            function (index){  
                var input = $(this);

                unitOfWork.updateQuestionByAnswer(
                    input.attr('name'),
                    input.attr('id'),
                    extractValueAccordingToInpuType(input),
                );
            }
        );
    }

    function submitInterviewResults() {
        unitOfWork.saveResults();

        var savedMessageCreator = factory.getCreator(-1);

        displayContentOnPage('.page__content', savedMessageCreator.create());
    }

    function onNextButtonClick() {
        saveValuesFromInputs();
        createPageWithQuestions(unitOfWork.getNextRangeOfQuestions());
    }

    function onSendButtonClick() {
        submitInterviewResults();
    }

    function onPreviousButtonClick() {
        saveValuesFromInputs();
        createPageWithQuestions(unitOfWork.getPreviousRangeOfQuestions());
    }

    function changeNextButtonBehaviorToSend($button) {
        $button.off('click').click(onSendButtonClick);
    }

    function changeSendButtonBehaviorToNext($button) {
        $button.off('click').click(onNextButtonClick);
    }

    (function setOnNavigateButtonsHandlers () {
        $('.pager__next-button').click(onNextButtonClick);
        $('.pager__previous-button').click(onPreviousButtonClick);
    })();
})();