function textAnswerQuestion() {
    var self = {};

    self.create = function (question) {
        var $div = $('<div></div'); 
        var $form = $('<form class="form"></form>'); 
        var $text = $('<input>').attr({ 
            type: 'text', 
            id: 0,
            name: question.id,  
            value: question.answers[0],
        }) 

        $form.append($text); 
        $div.append('<h4>' + question.text + '</h4>'); 
        $div.append($form); 
        return $div;
    };

    return self;
}   
