/**
 * It's not an implementation of the "Unit of work" pattern.
 * I just don't know how to name this module in other away.
 */

var UnitOfWork = function () {
    const NUMBER_OF_QUESTIONS_ON_THE_PAGE = 4;

    var repository = new Repository();
    var questions = repository.loadQuestion();
    var iterator = new Iterator(questions.length);

    return {
        getNextRangeOfQuestions: function () {
            var rangeOfIndexes = iterator.getNextRange(NUMBER_OF_QUESTIONS_ON_THE_PAGE);

            return questions.slice(rangeOfIndexes.startIndex, rangeOfIndexes.endIndex);
        },

        getPreviousRangeOfQuestions: function () {
            var rangeOfIndexes = iterator.getPreviousRange(NUMBER_OF_QUESTIONS_ON_THE_PAGE);

            return questions.slice(rangeOfIndexes.startIndex, rangeOfIndexes.endIndex);
        },

        getFirstIndex: function () {
            return iterator.getCurrentRange().startIdex;
        },

        getLastIndex: function () {
            return iterator.getCurrentRange().endIdex;
        },

        currentRangeIsFirst: function () {
            return this.getFirstIndex() === 0;
        },

        currentRangeIsLast: function () {
            return this.getLastIndex() === questions.length;
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
 