(function () {
    const NUMBER_OF_ITEMS_ON_PAGE = 4;
    const RESULTS_SAVING_ERROR_MESSAGE = 'Ответы не на все обязательные вопросы получены!';

    var unitOfWork = new UnitOfWork();
    var factory = new QuestionVisualElementFactory(); 
    var pagingController = new PagingController(unitOfWork.getQuestions(), NUMBER_OF_ITEMS_ON_PAGE);

    createPageWithQuestions(pagingController.getNextRangeOfItems());

    function createPageWithQuestions(questions) {
        var $ul = createUnorderedListOfQuestions(questions);

        checkIfCurrentRangeIsExtreme();
        displayContentOnPage('.page__content', $ul);
    };

    function createUnorderedListOfQuestions(questions) { 
        var $ul = $('<ul></ul>');

        for (var i = 0; i < questions.length; i++) {
            var questionCreator = factory.getCreator(questions[i].typeId);
            var $question = questionCreator.create(
                questions[i], 
                unitOfWork.getAnswersToTheQuestion(questions[i])
            );

            if (questions[i].isRequired) {
                markQuestionAsRequired($question);
            }

            addItemToList($ul, $question);
        }

        return $ul;
    }

    function markQuestionAsRequired($questionElement) {
        $questionElement.addClass('required');
    }

    function convertToListItem(stringToConvert) {
        return $('<li></li>').append(stringToConvert); 
    }

    function addItemToList(list, item) {
        if ($(list).has("li").length !== 0) {
            $(list).append('<hr>');
        }

        $(list).append(convertToListItem(item))
                        .css('listStyleType', 'none');
    }

    function displayContentOnPage(page, contentToDisplay) {
        $(page).html(contentToDisplay);
    }

    function checkIfCurrentRangeIsExtreme () {
        if (pagingController.currentRangeIsFirst()) {
            $('.pager__previous-button').css('display', 'none');
        } else {
            $('.pager__previous-button').css('display', 'inline');
        }
        if (pagingController.currentRangeIsLast()) {
            $('.pager__next-button').text('Отправить');
            changeNextButtonBehaviorToSend($('.pager__next-button'));
        } else {
            $('.pager__next-button').text('Далее');
            changeSendButtonBehaviorToNext($('.pager__next-button'));
        }
    }

    // TODO: make indepent of another value but not of the type.
    function extractValueAccordingToInpuType($input) {
        switch ($input.attr('type')) {
            case 'radio':
            case 'checkbox':
                return $input.prop('checked');
            case 'text':
            case 'file':
            case 'range':
                return $input.prop('value');
            default:
                return '';
        }
    }

    function saveValuesFromInputsWithValidation() {
        $('.page__content li').children('div').each(
            function() {
                // var questionIsRequired = !!(this.className === 'required'); 
                // var answerReceived = saveValuesFromInputs.call(this, questionIsRequired);

                // if (!answerIsValid(questionIsRequired, answerReceived)) {
                //     debugger;
                //     throw RESULTS_SAVING_ERROR_MESSAGE;
                // }
                console.log(this);
            }
        ) 
    }

    function saveValuesFromInputs() {
        var answerReceived = false;

        $(this).find('.form input').each(
            function (index) {  
                var $input = $(this);
                var answerValue = extractValueAccordingToInpuType($input);

                answerReceived = (!!answerValue) ? true : answerReceived;

                unitOfWork.updateQuestionByAnswer(
                    $input.attr('name'),
                    $input.attr('id'),
                    answerValue,
                );
            }   
        );

        return answerReceived;
    }

    function validateAnswers() {
        $('.required').each()
    }

    function answerIsValid(questionIsRequired, answerToQuestionReceived) {
        if (questionIsRequired && !answerToQuestionReceived) {
            return false;
        } else {
            return true;
        }
    }

    function submitInterviewResults() {
        unitOfWork.saveResults();

        var savedMessageCreator = factory.getCreator(-1);

        displayContentOnPage('.page', savedMessageCreator.create());
    }

    function onNextButtonClick() {
        try {
            debugger;
            saveValuesFromInputsWithValidation();
            createPageWithQuestions(pagingController.getNextRangeOfItems());
        } catch(err) {
            alert(err);
        }
    }

    function onSendButtonClick() {
        submitInterviewResults();
        removeBorderAroundInterviewBlock();
        swapPagerButtonsToReload();
    }

    function onPreviousButtonClick() {
        saveValuesFromInputs();
        createPageWithQuestions(pagingController.getPreviousRangeOfItems());
    }

    function changeNextButtonBehaviorToSend($button) {
        $button.off('click').click(onSendButtonClick);
    }

    function changeSendButtonBehaviorToNext($button) {
        $button.off('click').click(onNextButtonClick);
    }

    function swapPagerButtonsToReload() {
        var li = convertToListItem('<a class="pager__previous-button" href="">Пройти заново</a>');
        displayContentOnPage('.pager', li);
    }

    function removeBorderAroundInterviewBlock() {
        $('.page').css('border', 'none');
    }

    (function setOnNavigateButtonsHandlers () {
        $('.pager__next-button').click(onNextButtonClick);
        $('.pager__previous-button').click(onPreviousButtonClick);
    })();
})();