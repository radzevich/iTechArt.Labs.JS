function QuestionVisualElementFactory() {}

/**
 * Factory. Returns creator of visual element according to the key
 *
 * @param {number=} questionTypeId the key value for choosing the creator.
 * @return {function ()} function that knows how to create necessary object  
 */
QuestionVisualElementFactory.prototype.getCreator = function (questionTypeId) {
    /**
     * Templates are devided into templates of quastions and another templates 
     * such as the one for creating message about saving interview results (service template).
     * And creators of both of them are contained in the _templateCreators array.
     * Some service templates can be both added or removed in the future. 
     * To make numeration of question types independent of it we should use the next value
     * to get expected creator.
     * However, we should use negative keys to get service template creator.
     */
    const NUMBER_OF_SERVICE_TEMPLATES = 1;

    var _templateCreators = [
        createResultsSavedMessage,
        createSingleAnswerQuestion,
        createMultyAnswerQuestion,
        textAnswerQuestion
    ];

    var creator = _templateCreators[questionTypeId + NUMBER_OF_SERVICE_TEMPLATES] || null;
    
    return creator();
}
