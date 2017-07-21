function QuestionTemplateFactory() {
    var _templateCreators = [
        createQuestionWithSingleAnswer,
        createQuestionWithMultyAnswer,
        createQuestionWithTextAnswer
    ];

    /**
     * Creates the template of question with it's answers according to it's type.
     *
     * @param {question-info} questionPrototype the object that contains question, 
     * it's meta-info and the array of answer's id-s as well.
     * @param {function()} creator the function that will create answer field 
     * according to the question type.
     * @return {HTML object} html template of question.
     */
    function createTemplate(questionPrototype, creator) {
        var div = (document.createElement('div'));

        var $form = $('<form></form>');
        var $answers = $(creator(questionPrototype));

        $form.append($answers);
        $(div).append('<h4>' + questionPrototype.text + '</h4>');
        $(div).append($form);

        return div;
    }

    function createJqueryInput(type, parentId, id) {
        var $input = $('<input>').attr({
                                            type: type, 
                                            name: parentId,
                                            value: id
                                        });
        return $input;
    }

    function createQuestionWithAnswerSelection(questionPrototype, type) {
        var $answers = {};

        for (var i = 0; i < questionPrototype.answers.length; i++) {
            var _answer = loadAnswer(questionPrototype.answers[i].id);     
            var $input = createJqueryInput(type, questionPrototype.Id, _answer.id);

            $input.append(_answer.text);
            $answers.append($input);
        }

        return $answers;
    }

    function createQuestionWithSingleAnswer(questionPrototype) {
        return createQuastionWithAnswerSelection(questionPrototype, 'radio')
    }

    function createQuestionWithMultyAnswer(questionPrototype) {
        return createQuastionWithAnswerSelection(questionPrototype, 'checkbox')
    }

    function createQuestionWithTextAnswer(questionPrototype) {
        return createJqueryInput('text', questionPrototype.Id, questionPrototype.Id);
    }
}

QuestionVisualElementFactory.prototype.createTemplae = function createTemplate(questionPrototype) {
    var creator = _templateCreators[questionPrototype.typeId] || null;

    if (creator) {
        return createTemplate(questionPrototype, creator);    
    } else {
        return null;
    }
}
