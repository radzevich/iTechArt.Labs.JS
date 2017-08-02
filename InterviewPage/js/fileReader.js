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
                    return '<div><input type="file" name="{NAME}" id="{ID}"</div';

                case 'templates/multiAnswerTemplate.html':
                    return '<div><input class="interview-input_checkbox" type="checkbox" name="{NAME}" id="{ID}" {IS_CHECKED}">' +
                                '<label class="interview-input_label">{TEXT}</label></div';

                case 'templates/ratingAnswerTemplate.html':
                    //TODO
                    return '<div><input class="interview-input_rating-checkbox" type="checkbox" name="{NAME}" id="{ID}" {IS_CHECKED}">' +
                                '<label class="interview-input_label">{TEXT}</label></div';

                case 'templates/rangeAnswerTemplate.html':
                    return '<div><input type="range" name="{NAME}" id="{ID}" value="{VALUE}"></div';

                case 'templates/singleAnswerTemplate.html':
                    return '<div><input class="interview-input_radio" type="radio" name="{NAME}" id="{ID}" {IS_CHECKED}">' +
                                '<label class="interview-input_label">{TEXT}</label></div';

                case 'templates/textAnswerTemplate.html':    
                    return '<input type="text" name="{NAME}" id="{ID}" value="{VALUE}">';

                case 'templates/wrapper.html':
                    return '<div><h4>{NUM} {HEADER}</h4><form class="form">{ANSWERS}</form></div';

                case 'templates/resultsSavedMessageTemplate.html':
                    return '<div><p class="results-saved">Ваши ответы получены, спасибо!</p></div>'
            }
        }
    }
}