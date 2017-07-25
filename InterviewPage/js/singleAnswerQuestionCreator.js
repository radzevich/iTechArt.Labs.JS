function createSingleAnswerQuestion() {
    var self = {};

    self.create = function (questionInfo) {
        var div = (document.createElement('div')); 
        var $form = $('<form></form>'); 

        var answers = window.unitOfWork.getAnswersToTheQuestion(questionInfo); 

        for (var i = 0; i < answers.length; i++) {       
            $form.append(createRadioButtonWithLabel(
                answers[i].questionId, 
                answers[i].id, 
                answers[i].text,
                answers[i].updatedValue
            )); 
        }

        $(div).append('<h4>' + questionInfo.text + '</h4>');  
        $(div).append($form);

        return div; 
    };
    
    function createRadioButtonWithLabel(name, id, text, isChecked) {
        var $div = $('<div></div>');
        var $radio = $('<input>').attr({ 
                type: 'radio',  
                name: name, 
                id: id,
                checked: !!isChecked
        });

        var $label = $('<label>').text(text);

        addStylesToRadioButton($radio);
        addStylesToLabel($label);

        $div.append($radio)
            .append($label);

        return $div;
    }

    function addStylesToRadioButton($radioButton) {
        $radioButton.css('float', 'left');
    }

    function addStylesToLabel($label) {
        $label.css('display', 'block');
        $label.css('marginLeft', '20px');
    }

    return self;
}   