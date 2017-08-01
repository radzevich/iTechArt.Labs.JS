function createFileQuestion() {
    return {
        create: function (question) {
            var $div = $('<div></div'); 
            var $form = $('<form class="form"></form>');
            var $input = $('<input>').attr({ 
                type: 'file',  
                name: question.id, 
                id: 0,
            });

            $form.append($input);
            $div.append('<h4>' + question.text + '</h4>');  
            $div.append($form);

            return $div;
        }
    }
}