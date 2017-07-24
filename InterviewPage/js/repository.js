function Repository() {}

Repository.prototype.loadQuestion = function () {
    return [
    {
        id: 0,
        typeId: 0,
        text: 'В чём сила?',
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
        text: 'В чём сила?',
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
        text: 'В чём сила?',
        answers: [
            {id: 0},
            {id: 1},
            {id: 2},
            {id: 3}
        ]
    }];
};

Repository.prototype.loadAnswer = function (id) {
    var answers = [
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

    for (var i = 0; i < answers.length; i++) {
        if (answers[i].id === id) {
            return answers[i];
        }
    }

    return null;
};