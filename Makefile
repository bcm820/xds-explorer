build:
	@echo "--> building docker image"
	@cd docker build -t bcmendoza/xds-explorer:latest -f docker/xds-explorer/Dockerfile .

generate:
	@cd scripts && ./generate.sh