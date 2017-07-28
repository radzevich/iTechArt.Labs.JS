function crateRatingQuestion() {
    const RATING_VALUES_NUMBER = 5;

    function createCustomCheckbox(questionId, answerId, isChecked) {
        return  '<div class="interview-input_rating-div">' + 
                    '<input class="interview-input_rating-checkbox" type="checkbox" name="' + questionId + '" id="' + answerId + '" checked="' + !!isChecked + '">' +
                    '<label><span class="glyphicon glyphicon-star-empty"></span></label>' +
                '</div>';
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
            var $div = $('<div></div>');
            var $form = $('<form class="form"></form>');

            for (var i = 0; i < RATING_VALUES_NUMBER; i++) {
                $form.append(createCustomCheckbox(
                    question.id,
                    i + 1, 
                    question.answers[0],
                )); 
            }

            $div.append('<h4>' + question.text + '</h4>');  
            $div.append($form);

            return $div;
        }
    }
}