function createResultsSavedMessage() {
    var fileReader = new FileReader();

    return {
        create: function () {
            return fileReader.read('templates/resultsSavedMessageTemplate.html');
        }
    }
}