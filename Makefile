aai.min.js : aai.js
	curl -L -X POST -s --data-urlencode 'input@aai.js' https://javascript-minifier.com/raw > aai.min.js
