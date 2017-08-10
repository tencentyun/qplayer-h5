all: build

build: build-normal build-min


build-normal:
	./node_modules/.bin/browserify -t [ babelify --presets [ es2015] --plugins [ add-module-exports] ] --standalone QPlayer src/qplayer.js > dist/qplayer.js

build-min:
	cat dist/qplayer.js | ./node_modules/.bin/uglifyjs > dist/qplayer.min.js

.PHONY: all build