(function () {
    const NUMBER_OF_ITEMS_ON_PAGE = 4;
    const RESULTS_SAVING_ERROR_MESSAGE = 'Ответы не на все обязательные вопросы получены!';

    var unitOfWork = new UnitOfWork();
    var templateCreator = new TemplateCreator(); 
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
            var questionNum = pagingController.getPageNum() * NUMBER_OF_ITEMS_ON_PAGE + i;

            var $question = $(templateCreator.createQuestion(
                questions[i],
                unitOfWork.getAnswersToTheQuestion(questions[i]),
                questionNum
            ));

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
            hidePreviousButton('.pager__previous-button');
        } else {
            showPreviousButton('.pager__previous-button');
        }
        if (pagingController.currentRangeIsLast()) {
            $('.pager__next-button').text('Отправить');
            changeNextButtonBehaviorToSend('.pager__next-button');
        } else {
            $('.pager__next-button').text('Далее');
            changeSendButtonBehaviorToNext('.pager__next-button');
        }
    }

    function extractValueAccordingToQuestionType($input, questionTypeId) {
        switch (questionTypeId) {
            case '0':
            case '1':
            case '4':
                return $input.prop('checked');
            case '2':
            case '3':
            case '5':
            case '6':
                return $input.prop('value');
            default:
                return '';
        }
    }

    function saveValuesFromInputsWithValidation() {
        $('.page__content li').children('div').each(
            function() {
                var questionIsRequired = !!(this.className === 'required'); 
                var answerReceived = saveValuesFromInputs.call(this, questionIsRequired);

                if (!answerIsValid(questionIsRequired, answerReceived)) {
                    throw RESULTS_SAVING_ERROR_MESSAGE;
                }
            }
        ) 
    }

    function saveValuesFromInputs() {
        var answerReceived = false;

        var $inputForm = $(this).find('.form');
        var questionTypeId = $inputForm.attr('id');

        $(this).find('input').each(
            function () {  
                var $input = $(this);
                var answerValue = getAnswersAccordingToQuestionType($input, questionTypeId);
                
                answerReceived = (!!answerValue) ? true : answerReceived;

                unitOfWork.updateQuestionByAnswer(
                    $input.attr('name'),
                    getInputId($input),
                    answerValue,
                );
            }   
        );
        return answerReceived;
    }

    function getAnswersAccordingToQuestionType($input, questionTypeId) {
        switch (questionTypeId) {
            case '0':
            case '1':
            case '3':
                return $input.prop('checked')
            case '2':
            case '4':
            case '5':
            case '6':
                return $input.prop('value');
            default:
                return '';
        }
    }

    function getInputId($input) {
        var inputId = $input.attr('id');
        var numberFromInputId = '';

        for (var i = 0; i < inputId.length; i++) {
            if (inputId[i] >= '0' && inputId[i] <= '9') {
                numberFromInputId += inputId[i];
            }
        }
        
        return numberFromInputId;
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

        displayContentOnPage('.page', templateCreator.createMessage(-1));
    }

    function onNextButtonClick() {
        try {
            saveValuesFromInputsWithValidation();
            createPageWithQuestions(pagingController.getNextRangeOfItems());
        } catch(err) {
            alert(err);
        }
    }

    function onSendButtonClick() {
        try {
            saveValuesFromInputsWithValidation();
            submitInterviewResults();
            removeBorderAroundInterviewBlock();
            swapPagerButtonsToReload();
        } catch(err) {
            alert(err);
        }
    }

    function onPreviousButtonClick() {
        saveValuesFromInputs();
        createPageWithQuestions(pagingController.getPreviousRangeOfItems());
    }

    function changeNextButtonBehaviorToSend(button) {
        $(button).off('click')
                 .on ('click', onSendButtonClick);
    }

    function changeSendButtonBehaviorToNext(button) {
        $(button).off('click')
                 .on ('click', onNextButtonClick);
    }

    function hidePreviousButton(button) {
        $(button).hide();
    }

    function showPreviousButton(button) {
        $(button).show();
    }

    function swapPagerButtonsToReload() {
        var li = convertToListItem('<a class="pager__previous-button" href="">Пройти заново</a>');
        displayContentOnPage('.pager', li);
    }

    function removeBorderAroundInterviewBlock() {
        $('.page').css('border', 'none');
    }

    (function setOnNavigateButtonsHandlers () {
        $('.pager__previous-button').on('click', onPreviousButtonClick);
    })();
})();

