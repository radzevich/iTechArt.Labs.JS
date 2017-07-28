function createRangeQuestion() {
    return {
        create: function (question) {
            var $div = $('<div></div'); 
            var $form = $('<form class="form"></form>');
            var $startIndexValue = $('<label>').text(question.answers[1]);
            var $endIndexValue = $('<label>').text(question.answers[2]);
            var $input = $('<input>').attr({ 
                type: 'range',  
                name: question.id, 
                id: 0,
                value: question.answers[0],
                min: question.answers[1],
                max: question.answers[2],
            });
            
            $form.append($startIndexValue)
                 .append($input)
                 .append($endIndexValue);
            $div.append('<h4>' + question.text + '</h4>');  
            $div.append($form);

            return $div;
        }
    }
}