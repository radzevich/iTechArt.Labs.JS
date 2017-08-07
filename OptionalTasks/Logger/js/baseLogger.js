function BaseLogger() {
	this.processString = function (inputStringToLog) {
		return inputStringToLog;
	}

	this.log = function (inputStringToLog) {
		var stringToLog = this.processString(inputStringToLog);
		console.log(stringToLog);
	}
}