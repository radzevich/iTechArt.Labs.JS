function createMultyAnswerQuestion() {
    var self = {};

    self.create = function (question, answers) {
        var $div = $('<div></div'); 
        var $form = $('<form class="form"></form>'); 

        for (var key in question.answers) {
            $form.append(createCheckboxWithLabel(
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
    //getAnswerTemplate
    function createCheckboxWithLabel(parentId, id, text, isChecked) {
        var $div = $('<div></div>');
        var $checkbox = $('<input>').attr({ 
                type: 'checkbox',  
                name: parentId, 
                id: id,
                checked: !!isChecked,
        });
        var $label = $("<label>").text(text);

        addStylesToCheckbox($checkbox);
        addStylesToLabel($label);

        $div.append($checkbox)
            .append($label);

        return $div;
    }

    function addStylesToCheckbox($checkbox) {
        $checkbox.css('float', 'left');
    }

    function addStylesToLabel($label) {
        $label.css(
            'display', 'block',
            'marginLeft', '20px'
        );
    }

    return self;
}   
