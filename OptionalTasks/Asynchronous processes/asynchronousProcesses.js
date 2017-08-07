function asyncMethod(arrayOfUrls, callback) {
	var https = require('https');

	for (var i = 0; i < arrayOfUrls.length; i++) {
		var url = arrayOfUrls[i];
		var headersLength = 0;
		var bodyLength = 0;

		var request = https.get(url, function(responce) {
			headersLength = JSON.stringify(responce.headers).length;
		  	var bodyChunks = [];

		  	responce.on('data', function(chunk) {
		    			bodyChunks.push(chunk);
		  			})
			  		.on('end', function() {
			  			headersLength = JSON.stringify(responce.headers).length;
			    		bodyLength = Buffer.concat(bodyChunks).length;

			    		callback(headersLength + bodyLength);
			  		})
		});

		request.on('error', function(e) {
		  	console.log('ERROR: ' + e.message);
		});		
	}
}

function main() {
	var urls = [
		'https://www.w3schools.com',
		'https://www.w3schools.com/js/default.asp',
		'https://www.w3schools.com/js/js_assignment.asp'			
	]

	asyncMethod(urls, function(responceLength) {
		console.log(responceLength);
	})
}
