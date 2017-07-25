function Repository() {
    var answers = loadAnswers();

    (function markAnswersAsClean(answers) {
        for (var i = 0; i < answers.length; i++) {
            answers[i].updatedValue = '';
        }
    })(answers);

    function getAnswerById(id) {
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].id === id) {
                return answers[i];
            }
        }
        return null;
    }

    function loadQuestions() {
        return [
        {
            id: 0,
            typeId: 0,
            text: '0В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 1,
            text: '1В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 2,
            text: '2В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 0,
            text: '3В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 1,
            text: '4В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 2,
            text: '5В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 0,
            text: '6В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 1,
            text: '7В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 2,
            text: '8В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 0,
            text: '9В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 1,
            text: '10В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 2,
            text: '11В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
            ]
        },
        {
            id: 0,
            typeId: 0,
            text: '12В чём сила?',
            answers: [
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3}
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
            return loadQuestions();
        },

        getAnswer: function (id) {
            return getAnswerById(id);
        },

        updateAnswer: function(answer, value) {
            answer.updatedValue = value;
        }
    }
}

