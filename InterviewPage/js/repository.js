function Repository() {
    var questions = loadQuestions();
    var answers = transformArrayToKeyList(loadAnswers());

    (function markQuestionsAsClean(questions, answers) {
        for (var i = 0; i < questions.length; i++) {
            var answerList = questions[i].answers;

            for (var id in answerList) {
                answerList[id] = '';
            }
        }
    })(questions);

    function transformArrayToKeyList(arrayOfAnswers) {
        var keyList = {};

        for (var i = 0; i < arrayOfAnswers.length; i++) {
            var answer = arrayOfAnswers[i];
            keyList[answer.id] = answer;
        }

        return keyList;
    }

    function loadQuestions() {
        return [
        {
            id: 0,
            typeId: 0,
            text: '0 В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 1,
            typeId: 1,
            text: '1 В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 2,
            typeId: 2,
            text: '2 В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 3,
            typeId: 0,
            text: '3 В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 4,
            typeId: 1,
            text: '4 В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 5,
            typeId: 2,
            text: '5 В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 6,
            typeId: 0,
            text: '6 В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        {
            id: 7,
            typeId: 1,
            text: '7 В чём сила?',
            answers: [
                {0: ''},
                {1: ''},
                {2: ''},
                {3: ''},
            ]
        },
        ];
    }

    function loadAnswers() {
        return [
        {
            id: 0,
            text: 'В ньютонах'
        }, 
        {
            id: 1,
            text: 'В амперах'
        },
        {
            id: 2,
            text: 'В кольце власти'
        },
        {
            id: 3,
            text: ', Брат'
        },
        ];
    }

    return {
        getQuestions: function () {
            return questions;
        },

        getAnswerById: function (id) {
            return answers[id];
        },

        updateQuestionByAnswer: function (question, answerId, answerValue) {
            question.answers[answerId].answerValue
        },

        save: function (questions) {
            //Your code for working with data base could be there.
        },
    }
}

