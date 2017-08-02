function createFileQuestion() {
    var fileReader = new FileReader();
    var templateParser = new TemplateParser();

    function createAnswers(template, question) {
        templateParser.setTemplate(template);
        templateParser.setTemplateVariable('{NAME}', question.id);
        templateParser.setTemplateVariable('{ID}', 0);

        return templateParser.parseTemplate(true);
    }

    return {
        create: function (question) {
            var fileAnswerTemplate = fileReader.read('templates/fileAnswerTemplate.html');

            return createAnswers(fileAnswerTemplate, question);
        }
    }
}