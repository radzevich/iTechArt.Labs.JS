function createMultyAnswerQuestion() {
    var self = {};

    self.create = function (questionInfo) {
        var repository = new Repository();

        var div = (document.createElement('div')); 
        var $form = $('<form></form>'); 

        for (var i = 0; i < questionInfo.answers.length; i++) { 
            var answer = repository.loadAnswer(questionInfo.answers[i].id); 

            $form.append(createCheckboxWithLabel(
                answer.questionId, 
                answer.id, 
                answer.text
            )); 
        }

        $(div).append('<h4>' + questionInfo.text + '</h4>');  
        $(div).append($form);

        return div; 
    };

    function createCheckboxWithLabel(name, id, text) {
        var $div = $('<div></div>');
        var $radio = $('<input>').attr({ 
                type: 'checkbox',  
                name: name, 
                id: id 
        });
        var $label = $("<label>").text(text);

        $div.append($radio)
            .append($label);

        return $div;
    }

    return self;
}   
