function TableTimeLogger() {
	function deriveFrom(base) {
		function F() {};
		F.prototype = base;
		return new F();
	}

	var self = deriveFrom(TableLogger);
	debugger;

	self.processString = function (inputStringToLog) {

		return 'hello';
	}

	return self;
}