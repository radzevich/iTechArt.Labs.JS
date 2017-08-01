// function QuestionVisualElementFactory() {}

// /**
//  * Factory. Returns creator of visual element according to the key
//  *
//  * @param {number=} questionTypeId the key value for choosing the creator.
//  * @return {function ()} function that knows how to create necessary object  
//  */
// QuestionVisualElementFactory.prototype.getCreator = function (questionTypeId) {
//     /**
//      * Templates are devided into templates of questions and another templates 
//      * such as the one for creating message about saving interview results (service template).
//      * And creators of both of them are contained in the _templateCreators array.
//      * Some service templates can be both added or removed in the future. 
//      * To make numeration of question types independent of it we should use the next value
//      * to get expected creator.
//      * However, we should use negative keys to get service template creator.
//      */
//     const NUMBER_OF_SERVICE_TEMPLATES = 1;

//     var creator = null;

//     switch (questionTypeId + NUMBER_OF_SERVICE_TEMPLATES) {
//         case 0:
//             requirejs(["js/questionCreators/resultsSavedMessageCreator"], function () {
//                 creator = createResultsSavedMessage();
//             });
//             break;
//         case 1:
//             requirejs(["js/questionCreators/singleAnswerQuestionCreator"], function () {
//                 creator = createSingleAnswerQuestion();
//             });
//             break;
//         case 2:
//             requirejs(["js/questionCreators/multyAnswerQuestionCreator"], function () {
//                 creator = createMultyAnswerQuestion();
//             });
//             break;
//         case 3:
//             requirejs(["js/questionCreators/textAnswerQuestionCreator"], function () {
//                 creator = textAnswerQuestion();
//             });
//             break;
//         case 4:
//             requirejs(["js/questionCreators/ratingQuestionCreator"], function () {
//                 creator = crateRatingQuestion();
//             });
//             break;   
//         case 5:
//             requirejs(["js/questionCreators/fileQuestionCreator"], function () {
//                 creator = createFileQuestion();
//             });
//             break;    
//         case 6:
//             requirejs(["js/questionCreators/rangeQuestionCreator"], function () {
//                 creator = createRangeQuestion();
//             });
//             break;          
//     }
// debugger;
//     return creator;
// }

function QuestionVisualElementFactory() {}

/**
 * Factory. Returns creator of visual element according to the key
 *
 * @param {number=} questionTypeId the key value for choosing the creator.
 * @return {function ()} function that knows how to create necessary object  
 */

QuestionVisualElementFactory.prototype.getCreator = function (questionTypeId) {
    /**
     * Templates are devided into templates of questions and another templates 
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
        createMultiAnswerQuestion,
        textAnswerQuestion,
        crateRatingQuestion,
        createFileQuestion,
        createRangeQuestion,
    ];

    var creator = _templateCreators[questionTypeId + NUMBER_OF_SERVICE_TEMPLATES] || null;    

    return creator();
}