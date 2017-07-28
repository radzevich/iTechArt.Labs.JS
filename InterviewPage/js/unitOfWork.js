/**
 * It's not an implementation of the "Unit of work" pattern.
 * I just don't know how to name this module in other away.
 */

var UnitOfWork = function () {
    const NUMBER_OF_QUESTIONS_ON_THE_PAGE = 4;

    var repository = new Repository();
    var questions = repository.getQuestions();

    var getQuestionById = function (id) {
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].id == id) {
                return questions[i];
            } 
        }
        return null;
    };

    return {
        getAnswersToTheQuestion: function (question) {
            var answers = {};

            for (var id in question.answers) {
                answers[id] = repository.getAnswerById(id);
            }

            return answers;
        },

        getQuestions: function () {
            return questions;
        },

        getQuestionsCount: function () {
            return questions.length;
        },

        updateQuestionByAnswer: function (questionId, answerId, newValueToUpdate) {
            var question = getQuestionById(questionId);
 
            question.answers[answerId] = newValueToUpdate;
        },

        saveResults() {
            repository.save(questions);
        }
    }
}
 