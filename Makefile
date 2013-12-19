aai.min.js :
	@uglifyjs aai.js -o aai.min.js --source-map aai.min.js.map -c -m
