(function () {
    var repository = new Repository();
    var $ul = createUnorderedListOfQuestions(repository.loadQuestion());

    displayQuestionsOnPage('.page__content', $ul);

    function createUnorderedListOfQuestions(questions) {
        var factory = new QuestionVisualElementFactory();
        var $ul = $('<ul></ul>');

        for (var i = 0; i < questions.length; i++) {
            var questionCreator = factory.getCreator(questions[i].typeId);
            var question = questionCreator.create(questions[i]);

            addItemToList($ul, $(question).html());
        }

        return $ul;
    }

    function convertToListItem(stringToConvert) {
        return '<li>' + stringToConvert + '</li>'; 
    }

    function addItemToList(list, item) {
        if ($(list).has("li").length !== 0) {
            $(list).append('<hr>');
        }

        $(list).append(convertToListItem(item))
                        .css('listStyleType', 'none');
    }

    function displayQuestionsOnPage(page, $element) {
        $element.appendTo(page);
    }
})();