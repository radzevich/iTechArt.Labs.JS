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
        questionId: 0,
        text: "В ньютонах"
    }, 
    {
        id: 1,
        questionId: 0,
        text: "В амперах"
    },
    {
        id: 2,
        questionId: 0,
        text: "В кольце власти"
    },
    {
        id: 3,
        questionId: 0,
        text: ", Брат"
    }
]

$(document).ready(function() {
    // show('.page__list', '<p>Some text1</p>');
    // show('.page__list', '<p>Some text2</p>');
    // show('.page__list', '<p>Some text3</p>');

    createQuestionTemplate.call(loadQuestion(0));
}); 

function singleAnswerQuestionCreator(jsonQuestion) {
    var _div = (document.createElement('div'));
    var $form = $('<form></form>');

    for (var i = 0; i < jsonQuestion.answers.length; i++) {
        var _answer = loadAnswer(jsonQuestion.answers[i].id);     

        var $radio = $('<input>').attr({
                                        type: 'radio', 
                                        name: 'colorinput', 
                                        value: _answer.id
                                      })
        
        $radio.append(_answer.text);
        $form.append($radio);
    }

    $(_div).append('<h4>' + jsonQuestion.text + '</h4>');
    $(_div).append($form);
    
    return _div;
}

function polyAnswerQuestionCreator(jsonQuestion) {
    
}

function textInputAnswerQuestionCreator(jsonQuestion) {
    
}

function createQuestionTemplate() {
    var questionTemplateCreators = [
        singleAnswerQuestionCreator,
        polyAnswerQuestionCreator,
        textInputAnswerQuestionCreator
    ]

    questionTemplateCreators[this.typeId](this);
}


function loadQuestion(id) {
    //TODO: getting question with pointed @id.
    return jsonQuestion;
}

function loadAnswer(id) {
    for (var i = 0; i < answers.length; i++) {
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