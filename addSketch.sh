#!/bin/bash

cp -R ./templates/simple ./sketches/$1
jq '.[] |= . + {"title": "aaaa", "url": "aaaa","final": true, "tags": [],"date": "2022-01-01"}' ./tests.json