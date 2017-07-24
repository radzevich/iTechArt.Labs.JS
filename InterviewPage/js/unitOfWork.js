/**
 * It's not an implementation of the "Unit of work" pattern.
 * I just don't know how to name this module in other away.
 */

var UnitOfWork = function () {
    const NUMBER_OF_QUESTIONS_ON_THE_PAGE = 10;

    var repository = new Repository();
    var questions = repository.loadQuestion();
    var iterator = new Iterator(questions.length);

    return {
        getNextRangeOfQuestions: function () {
            rangeOfIndexes = iterator.getNextRange(NUMBER_OF_QUESTIONS_ON_THE_PAGE);

            return questions.slice(rangeOfIndexes.start, rangeOfIndexes.end);
        },

        getPreviousRangeOfQuestions: function () {
            rangeOfIndexes = iterator.getPreviousRange(NUMBER_OF_QUESTIONS_ON_THE_PAGE);

            return questions.slice(rangeOfIndexes.start, rangeOfIndexes.end);
        },

        currentRangeIsFirst: function () {
            return iterator.getCurrentRange().start === 0;
        },

        currentRangeIsLast: function () {
            return iterator.getCurrentRange().end === questions.length;
        },

        getAnswersToTheQuestion: function (question) {
            var answers = [];

            for (var i = 0; i < question.answers.length; i++) {
                answers.push(repository.loadAnswer(question.answers[i]))
            }

            return answers;
        },

        getQuestionsCount: function () {
            return questions.length;
        }
    }
}
 