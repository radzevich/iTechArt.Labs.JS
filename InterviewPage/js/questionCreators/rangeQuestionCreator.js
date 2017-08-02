function createRangeQuestion() {
    var fileReader = new FileReader();
    var templateParser = new TemplateParser();

    function createAnswers(template, question) {
        templateParser.setTemplate(template);
        templateParser.setTemplateVariable('{NAME}', question.id);
        templateParser.setTemplateVariable('{ID}', 0);
        templateParser.setTemplateVariable('{VALUE}', question.answers[0]);
        templateParser.setTemplateVariable('{MIN}', question.answers[1]);
        templateParser.setTemplateVariable('{MAX}', question.answers[2]);

        return templateParser.parseTemplate(true);
    }

    return {
        create: function (question) {
            var fileAnswerTemplate = fileReader.read('templates/rangeAnswerTemplate.html');

            return createAnswers(fileAnswerTemplate, question);
        }
    }
}