#!/bin/bash

blank=$(printf "%-50s" " ")
rm -rf ../src/envoy/

# envoyDir=/usr/local/Cellar/protobuf/3.7.1/include/envoy
envoyDir=../envoy

for filePath in $(find $envoyDir -name '*.proto'); do
  
  inputDir=$(dirname $filePath)
  fullFilename=$(basename $filePath)
  outputDir="../src/${inputDir#"../"}"
  filename="${fullFilename%.*}"

  echo -ne "--> Compiling $fullFilename...\r"
  sleep .025
  echo -ne "$blank\r"

  if [[ ! -e $outputDir ]]; then
    mkdir -p $outputDir
  fi

  protoc -I=$inputDir $fullFilename \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:$outputDir \
    --js_out=import_style=commonjs:$outputDir

done

for filePath in $(find ../src/envoy -name '*.js'); do

  lintRule="/* eslint-disable */\n\n"
  echo -e "${lintRule}$(cat $filePath)" > $filePath

  fullFilename=$(basename $filePath)
  echo -ne "--> Wrote $fullFilename...\r"
  sleep .025
  echo -ne "$blank\r"

done

echo "--> Generated gRPC-Web client modules for Envoy v2 API."