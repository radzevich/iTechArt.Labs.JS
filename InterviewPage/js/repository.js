function Repository() {
    var questions = loadQuestions();
    var answers = loadAnswers();

    (function markQuestionsAsClean(questions, answers) {
        for (var i = 0; i < questions.length; i++) {
            var answers = questions[i].answers;

            for (var j = 0; j < answers.length; j++) {
                answers[j].stateValue = '';
            }
        }
    })(questions);

    function loadQuestions() {
        return [
        {
            id: 0,
            typeId: 0,
            text: '0В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 0,
            typeId: 1,
            text: '1В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 0,
            typeId: 2,
            text: '2В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        }];
    }

    function loadAnswers() {
        return [
        {
            id: 0,
            questionId: 0,
            text: 'В ньютонах'
        }, 
        {
            id: 1,
            questionId: 0,
            text: 'В амперах'
        },
        {
            id: 2,
            questionId: 0,
            text: 'В кольце власти'
        },
        {
            id: 3,
            questionId: 0,
            text: ', Брат'
        }];
    }

    return {
        getQuestions: function () {
            return questions;
        },

        getAnswerById: function (id) {
            for (var i = 0; i < answers.length; i++) {

                if (answers[i].id == id) {
                    return answers[i];
                }
            }
            return null;
        },

        updateQuastionByAnswer: function(quastion, answerId, answerValue) {
            quastion.answers[answerId].answerValue
        }
    }
}

