function FileReader() {
    return {
        /**
         * This is a small hack to avoid using local web server. 
         * The thing is that it's unable to read any file from user's computer,
         * we need some server (localhost though).
         * But now it's not the main aim to deploy this page.
         */
        read(fileName) {
            switch (fileName) {
                case 'templates/fileAnswerTemplate.html':
                    return '<div><input type="file" name="{NAME}" id="{ID}"</div>';

                case 'templates/multiAnswerTemplate.html':
                    return '<div><input class="interview-input_checkbox" type="checkbox" name="{NAME}" id="{ID}" {IS_CHECKED}">' +
                                '<label class="interview-input_label">{TEXT}</label></div>';

                case 'templates/ratingAnswerTemplate.html':
                    return  '<input class="rating-input" type="radio" id="{ID}star" {IS_CHECKED_FULL} name="{NAME}"/>' + 
                            '<label class="rating-label full" for="{ID}star"></label>' +
                            '<input class="rating-input" type="radio" id="{ID_HALF}star_half" {IS_CHECKED_HALF} name="{NAME}"/>' + 
                            '<label class="rating-label half" for="{ID_HALF}star_half"></label>'

                case 'templates/rangeAnswerTemplate.html':
                    return '<div><input type="range" name="{NAME}" id="{ID}" value="{VALUE}"></div>';

                case 'templates/singleAnswerTemplate.html':
                    return '<div><input class="interview-input_radio" type="radio" name="{NAME}" id="{ID}" {IS_CHECKED}">' +
                                '<label class="interview-input_label">{TEXT}</label></div>';

                case 'templates/textAnswerTemplate.html':    
                    return '<input type="text" name="{NAME}" id="{ID}" value="{VALUE}">';

                case 'templates/wrapper.html':
                    return '<div><h4>{NUM} {HEADER}</h4><form class="form" id="{TYPE_ID}">{ANSWERS}</form></div>';

                case 'templates/resultsSavedMessageTemplate.html':
                    return '<div class="results-saved-message"><p>Ваши ответы получены, спасибо!</p></div>'
            }
        }
    }
}
