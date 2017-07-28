function textAnswerQuestion() {
    var self = {};

    self.create = function (question) {
        return  $('<div><h4>' + question.text + '</h4><form class="form">' + 
                    '<input type="text" name="' + question.id + '" id="' + 0 + '" value="' + question.answers[0] + '">' +
                '</form></div>');
    }

    return self;
}
