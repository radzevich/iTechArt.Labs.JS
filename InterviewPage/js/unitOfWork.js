/**
 * It's not an implementation of the "Unit of work" pattern.
 * I just don't know how to name this module in other away.
 */

var UnitOfWork = function () {
    const NUMBER_OF_QUESTIONS_ON_THE_PAGE = 4;

    var repository = new Repository();
    var questions = convertJsonObjectsToQuestions(repository.getQuestions());

    var getQuestionById = function (id) {
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].id == id) {
                return questions[i];
            } 
        }
        return null;
    };

    function convertJsonObjectsToQuestions(jsonObjects) {
        var resultQuestionList = [];

        for (var i = 0; i < jsonObjects.length; i++) {
            var question = Object.assign({}, jsonObjects[i]);
            var answerIdList = question.answers;
            var resultAnswerList = {};

            for (var j = 0; j < answerIdList.length; j++) {
                var answerId = answerIdList[j];

                
                resultAnswerList[answerId] = '';
            }
            question.answers = resultAnswerList;
            resultQuestionList[i] = question;
        }
        return resultQuestionList;
    }

    function createListOfJsonAnswers(questionList) {
        var jsonAnswerList = {};
        
        for (var i = 0; i < questionList.length; i++) {
            var questionId = questionList[i].id;
            var answers = questionList[i].answers;

            jsonAnswerList[questionId] = {};
            jsonAnswerList[questionId].answers = {};

            for (var id in answers) {
                if (!answers[id]) {
                    continue;
                }

                jsonAnswerList[questionId].answers[id] = answers[id];
            } 
        }   
        return jsonAnswerList;   
    }

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
            var listOfJsonAnswers = createListOfJsonAnswers(questions);

            repository.save(listOfJsonAnswers);
        }
    }
}
 