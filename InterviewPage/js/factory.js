function QuestionVisualElementFactory() {}

/**
 * Factory. Returns creator of visual element according to the key
 *
 * @param {number=} questionTypeId the key value for choosing the creator.
 * @return {function ()} function that knows how to create necessary object  
 */
QuestionVisualElementFactory.prototype.getCreator = function (questionTypeId) {
    var _templateCreators = [
        createSingleAnswerQuestion,
        createMultyAnswerQuestion,
        textAnswerQuestion
    ];

    var creator = _templateCreators[questionTypeId] || null;
    
    return creator();
}
