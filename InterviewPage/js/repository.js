function Repository() {
    var questions = loadQuestions();
    var answers = transformArrayToKeyList(loadAnswers());

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
            isRequired: true,
            text: 'В чём сила?',
            answers: [
                0,
                1,
                2,
                3,
            ]
        },
        {
            id: 1,
            typeId: 1,
            isRequired: true,
            text: 'В чём сила?',
            answers: [
                0,
                1,
                2,
                3,
            ]
        },
        {
            id: 2,
            typeId: 2,
            text: 'В чём сила?',
            answers: [
                0,
                1,
                2,
                3,
            ]
        },
        {
            id: 3,
            typeId: 3,
            text: 'В чём сила?',
            answers: {}
        },
        {
            id: 4,
            typeId: 4,
            text: 'В чём сила?',
            answers: []
        },
        {
            id: 5,
            typeId: 5,
            text: 'В чём сила?',
            answers: []
        },
        {
            id: 6,
            typeId: 0,
            isRequired: true,
            text: 'В чём сила?',
            answers: [
                0,
                1,
                2,
                3,
            ]
        },
        {
            id: 7,
            typeId: 1,
            text: 'В чём сила?',
            answers: [
                0,
                1,
                2,
                3,
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
            console.log(questions);
        },
    }
}

