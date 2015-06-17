aai.min.js : aai.js
	curl -X POST -s --data-urlencode 'input@aai.js' http://javascript-minifier.com/raw > aai.min.js
