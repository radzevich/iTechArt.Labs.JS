function createResultsSavedMessage() {
    const MESSAGE_TEXT = 'Ваши ответы получены, спасибо!';

    return {
        create: function () {
            var $div = $('<div></div'); 
            var $p = $('<p>' + MESSAGE_TEXT + '</p>');

            $p.css('textAlign', 'center')
              .css('fontSize', '20px');

            $div.append($p);
            
            return $div;
        }
    }
}