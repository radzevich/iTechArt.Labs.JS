/**
 * It's not an implementation of the "Unit of work" pattern.
 * I just don't know how to name this module in other away.
 */

var UnitOfWork = function () {
    const NUMBER_OF_QUESTIONS_ON_THE_PAGE = 4;

    var repository = new Repository();
    var questions = repository.getQuestions();
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

        currentRangeIsFirst: function () {
            return iterator.getCurrentRange().startIndex === 0;
        },

        currentRangeIsLast: function () {
            return iterator.getCurrentRange().endIndex === questions.length;
        },

        getAnswersToTheQuestion: function (question) {
            var answers = {};

            for (var id in question.answers) {
                answers[id] = repository.getAnswerById(id);
            }
            
            return answers;
        },

        getQuestionsCount: function () {
            return questions.length;
        }
    }
}
 