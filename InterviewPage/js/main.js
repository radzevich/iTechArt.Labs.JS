var jsonQuestion = {
    id: 0,
    typeId: 0,
    text: "В чём сила?",
    answers: [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3}
    ]
}

var answers = [
    {
        id: 0,
        questionId: 1,
        text: "В ньютонах"
    }, 
    {
        id: 0,
        questionId: 1,
        text: "В кольце власти"
    },
    {
        id: 0,
        questionId: 1,
        text: "в Арни"
    },
    {
        id: 0,
        questionId: 1,
        text: ", Брат"
    }
]

$(document).ready(function() {
    show('.page__list', '<p>Some text1</p>');
    show('.page__list', '<p>Some text2</p>');
    show('.page__list', '<p>Some text3</p>');

    createQuestionTemplate.call(loadQuestion(0));
}); 

function singleAnswerQuestionCreator() {

}

function polyAnswerQuestionCreator() {
    
}

function textInputAnswerQuestionCreator() {
    
}

function createQuestionTemplate() {
    var questionTemplateCreators = [
        singleAnswerQuestionCreator(),
        polyAnswerQuestionCreator(),
        textInputAnswerQuestionCreator()
    ]

    
}

function loadQuestion(id) {
    //TODO: getting question with pointed @id.
    return jsonQuestion;
}

function loadAnswer(id) {
    for (var i = 0; i < answer.length; i++) {
        if (answers[i].id === id) {
            return answers[i];
        }
    }
    return null;
}

function convertToListItem(stringToConvert) {
    return '<li>' + stringToConvert + '</li>'; 
}

function show(displayContext, contentToShow) {
    if ($(displayContext).has("li").length !== 0) {
        $(displayContext).append('<hr>');
    }

    $(displayContext).append(convertToListItem(contentToShow))
                     .css('listStyleType', 'none');
}