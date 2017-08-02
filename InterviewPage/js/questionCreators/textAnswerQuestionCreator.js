function textAnswerQuestion() {
    var fileReader = new FileReader();
    var templateParser = new TemplateParser();

    function createAnswers(template, question) {
        templateParser.setTemplate(template);
        templateParser.setTemplateVariable('{NAME}', question.id);
        templateParser.setTemplateVariable('{ID}', 0);
        templateParser.setTemplateVariable('{VALUE}', question.answers[0]);

        return templateParser.parseTemplate(true);
    }

    return {
        create: function (question) {
            var fileAnswerTemplate = fileReader.read('templates/textAnswerTemplate.html');

            return createAnswers(fileAnswerTemplate, question);
        }
    }
}