function textAnswerQuestion() {
    var self = {};

    self.create = function (question) {
        var _div = (document.createElement('div')); 
        var $form = $('<form class="form"></form>'); 
        var $text = $('<input>').attr({ 
            type: 'text', 
            name: question.id,  
            value: question.answers[0],
        }) 

        $form.append($text); 
        $(_div).append('<h4>' + question.text + '</h4>'); 
        $(_div).append($form); 
        return _div;
    };

    return self;
}   
