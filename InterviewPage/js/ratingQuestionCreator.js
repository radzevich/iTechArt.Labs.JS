function crateRatingQuestion() {
    const RATING_VALUES_NUMBER = 5;

    function createCustomCheckbox(parentId, id, isChecked) {
        var $div = $('<div></div>');
        var $checkbox = $('<input>').attr({ 
                type: 'checkbox',  
                name: parentId, 
                id: id,
                checked: !!isChecked,
        });

        addCustomBehavior($checkbox);
        addStyleToCheckBox($checkbox);
        addStylesToDiv($div);

        $div.append($checkbox)
            .append('<span class="glyphicon glyphicon-star-empty"></span>');

        return $div;
    }

    function addStyleToCheckBox($checkbox) {
        $checkbox.hide()
                 .width('15px')
                 .height('15px');
    }

    function addStylesToDiv($div) {
        $div.css(
            'display', 'inline',
            'margin', '3px'
        );                           
    }

    function addCustomBehavior($checkbox) {
        $checkbox.click(function () {
            var clickedCheckboxId = $checkbox.attr('id');
            var $parentForm = $checkbox.closest('form');
            var childInputs = $parentForm.children('input');

            debugger;
            for (var i = 0; i <= childInputs.length; i++) {
                var $span = childInputs[i].children('span');

                if (i <= clickedCheckboxId) {
                    setActiveClass($span);
                } else {
                    setPassiveClass($span);
                }
            }     
        })
    }

    function setActiveClass($span) {
        $span.removeClass('glyphicon glyphicon-star-empty');
        $span.addClass('glyphicon glyphicon-star');
    }

    function setPassiveClass($span) {
        $span.removeClass('glyphicon glyphicon-star');
        $span.addClass('glyphicon glyphicon-star-empty');   
    }

    return {
        create: function (question) {
            var div = (document.createElement('div')); 
            var $form = $('<form class="form"></form>');

            for (var i = 0; i < RATING_VALUES_NUMBER; i++) {
                $form.append(createCustomCheckbox(
                    question.id,
                    i + 1, 
                    question.answers[0],
                )); 
            }

            $(div).append('<h4>' + question.text + '</h4>');  
            $(div).append($form);

            return div;
        }
    }
}