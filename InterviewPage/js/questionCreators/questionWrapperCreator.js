function WrapperCreator() {
    var templateParser = new TemplateParser();
    var fileReader = new FileReader();

    return {
        create: function (question, num) {
            var wrapperTemplate = fileReader.read('templates/wrapper.html');

            templateParser.setTemplate(wrapperTemplate);
            templateParser.setTemplateVariable('{NUM}', num);
            templateParser.setTemplateVariable('{HEADER}', question.text);
            templateParser.setTemplateVariable('{TYPE_ID}', question.typeId);

            return templateParser.parseTemplate(true);
        }
    }
}