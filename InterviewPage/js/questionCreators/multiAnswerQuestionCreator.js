function createMultiAnswerQuestion() {
    var fileReader = new FileReader();
    var templateParser = new TemplateParser();

    function createAnswers(template, question, answers) {
        var answersTemplate = '';

        templateParser.setTemplateVariable('{NAME}', question.id);

        for (var key in answers) {
            templateParser.setTemplate(template);
            
            templateParser.setTemplateVariable('{ID}', answers[key].id);
            templateParser.setTemplateVariable('{TEXT}', answers[key].text);
            templateParser.setTemplateVariable('{IS_CHECKED}', !!question.answers[key] ? 'checked="true"' : '');

            answersTemplate += templateParser.parseTemplate();
        }

        return answersTemplate;
    }

    return {
        create: function (question, answers) {
            var fileAnswerTemplate = fileReader.read('templates/multiAnswerTemplate.html');

            return createAnswers(fileAnswerTemplate, question, answers);
        }
    }
}