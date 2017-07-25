function createMultyAnswerQuestion() {
    var self = {};

    self.create = function (question, answers) {
        var div = (document.createElement('div')); 
        var $form = $('<form></form>'); 

        for (var key in question.answers) {
            $form.append(createCheckboxWithLabel(
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

    function createCheckboxWithLabel(name, id, text, isChecked) {
        var $div = $('<div></div>');
        var $checkbox = $('<input>').attr({ 
                type: 'checkbox',  
                name: name, 
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
        $label.css('display', 'block');
        $label.css('marginLeft', '20px');
    }

    return self;
}   
