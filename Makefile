console:
	docker run --rm -it -v $$PWD:/app -w="/app" --user "1000:1000" node:10.14.2 bash
