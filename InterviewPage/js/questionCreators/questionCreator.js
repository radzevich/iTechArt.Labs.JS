function TemplateCreator() {
    var factory = new QuestionVisualElementFactory();
    var fileReader = new FileReader();
    var templateParser = new TemplateParser();

    function createQuestion(wrapperTemplate, answerTemplate) {
        templateParser.setTemplate(wrapperTemplate);
        templateParser.setTemplateVariable('{ANSWERS}', answerTemplate);

        return templateParser.parseTemplate();
    }

    return {
        createQuestion: function (question, answers, questionNum) {
            var wrapperCreator = new WrapperCreator();
            var answersTemplateCreator = factory.getCreator(question.typeId);

            var wrapperTemplate = wrapperCreator.create(question, questionNum);
            var answersTemplate = answersTemplateCreator.create(question, answers);

            return createQuestion(wrapperTemplate, answersTemplate);
        },

        createMessage: function (messageTypeId) {
            var messageCreator = factory.getCreator(messageTypeId);

            return messageCreator.create();
        }
    }
}