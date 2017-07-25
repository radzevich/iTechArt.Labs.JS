function textAnswerQuestion() {
    var self = {};

    self.create = function (questionInfo) {
        var _div = (document.createElement('div')); 
        var $form = $('<form></form>'); 
        var $text = $('<input>').attr({ 
            type: 'text', 
            name: questionInfo.id,  
            value: 'saf'
        }) 

        $form.append($text); 
        $(_div).append('<h4>' + questionInfo.text + '</h4>'); 
        $(_div).append($form); 
        return _div;
    };

    return self;
}   
