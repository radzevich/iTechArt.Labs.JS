function createSingleAnswerQuestion() {
    var self = {};

    self.create = function (question, answers) {
        var $div = $('<div></div');  
        var $form = $('<form class="form"></form>'); 

        for (var key in question.answers) {
            $form.append(createRadioButtonWithLabel(
                question.id,
                answers[key].id, 
                answers[key].text,
                question.answers[key],
            )); 
        }

        $div.append('<h4>' + question.text + '</h4>');  
        $div.append($form);

        return $div; 
    };
    
    function createRadioButtonWithLabel(parentId, id, text, isChecked) {
        var $div = $('<div></div>');
        var $radio = $('<input>').attr({ 
                type: 'radio',  
                name: parentId, 
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
        $label.css(
            'display', 'block',
            'marginLeft', '20px'
        );
    }

    return self;
}   