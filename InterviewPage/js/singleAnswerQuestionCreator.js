function createSingleAnswerQuestion() {
    var self = {};

    self.create = function (questionInfo) {
        var repository = new Repository();

        var div = (document.createElement('div')); 
        var $form = $('<form></form>'); 

        for (var i = 0; i < questionInfo.answers.length; i++) { 
            var answer = repository.loadAnswer(questionInfo.answers[i].id); 

            $form.append(createRadioButtonWithLabel(
                answer.questionId, 
                answer.id, 
                answer.text
            )); 
        }

        $(div).append('<h4>' + questionInfo.text + '</h4>');  
        $(div).append($form);

        return div; 
    };
    
    function createRadioButtonWithLabel(name, id, text) {
        var $div = $('<div></div>');
        var $radio = $('<input>').attr({ 
                type: 'radio',  
                name: name, 
                id: id 
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