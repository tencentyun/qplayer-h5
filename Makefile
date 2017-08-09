all: build

build: build-normal build-min


build-normal:
	./node_modules/.bin/browserify  --standalone QPlayer index.js > dist/qplayer.js

build-min:
	./node_modules/.bin/browserify --standalone QPlayer index.js | ./node_modules/.bin/uglifyjs > dist/qplayer.min.js

.PHONY: all build