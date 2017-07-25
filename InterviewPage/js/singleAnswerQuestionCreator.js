function createSingleAnswerQuestion() {
    var self = {};

    self.create = function (question, answers) {
        var div = (document.createElement('div')); 
        var $form = $('<form></form>'); 

        for (var key in question.answers) {
            $form.append(createRadioButtonWithLabel(
                question.id,
                answers[key].id, 
                answers[key].text,
                question.answers[key].stateValue,
            )); 
        }

        $(div).append('<h4>' + question.text + '</h4>');  
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