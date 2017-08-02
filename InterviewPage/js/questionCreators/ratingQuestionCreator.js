function crateRatingQuestion() {
    const STAR_NUMBER = 5;

    var fileReader = new FileReader();
    var templateParser = new TemplateParser();

    function createAnswers(template, question) {
        var answersTemplate = '<fieldset class="rating">';

        templateParser.setTemplateVariable('{NAME}', question.id);

        for (let i = 0; i < STAR_NUMBER; i++) {
            templateParser.setTemplate(template);
            templateParser.setTemplateVariable('{ID}', i * 2);
            templateParser.setTemplateVariable('{ID_HALF}', i * 2 + 1);
            templateParser.setTemplateVariable('{VALUE}', !!question.answers[0] ? ' checked="true" ' : '');

            answersTemplate += templateParser.parseTemplate();
        }
        
        return answersTemplate + '</fieldset>';
    }

    return {
        create: function (question) {
            var answerTemplate = fileReader.read('templates/ratingAnswerTemplate.html');

            return createAnswers(answerTemplate, question);
        }
    }
}