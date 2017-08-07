function TemplateParser() {
    var varsToReplace = {};
    var template = '';

    function resetVariables () {
        varsToReplace = {};
    }
      
    return {
        setTemplate: function (templateString) {
            template = templateString;
        },

        setTemplateVariable: function (key, valueForReplacing) {
            varsToReplace[key] = valueForReplacing;
        },

        parseTemplate: function (resetAfterParsingFlag) {
            for (var keyToFind in varsToReplace) {
                do {
                    var previousVersion = template; 
                    template = template.replace(keyToFind, varsToReplace[keyToFind]);
                } while (previousVersion !== template);
            }

            if (resetAfterParsingFlag) {
                resetVariables();
            }

            return template;
        },
    }    
}