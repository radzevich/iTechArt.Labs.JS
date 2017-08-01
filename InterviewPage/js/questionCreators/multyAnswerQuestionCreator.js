function createMultyAnswerQuestion() {
    var self = {};

    self.create = function (question, answers) {
        var $div = $('<div></div'); 
        var $form = $('<form class="form"></form>'); 

        for (var key in question.answers) {
            $form.append(createAnswerBlock(
                question.id,
                answers[key].id, 
                answers[key].text,
                !!question.answers[key] ? 'checked="true"' : ''
            )); 
        }

        $div.append('<h4>' + question.text + '</h4>');  
        $div.append($form);

        return $div; 
    };
    //getAnswerTemplate
    function createAnswerBlock(qeustionId, answerId, text, isChecked) {
        return  '<div>' + 
                    '<input class="interview-input_checkbox" type="checkbox" name="' + qeustionId + '" id="' + answerId + '"' + isChecked + '">' +
                    '<label class="interview-input_label">' + text + '</label>' +
                '</div>';
    }

    function addStylesToCheckbox($checkbox) {
        $checkbox.css('float', 'left');
    }

    return self;
}   
