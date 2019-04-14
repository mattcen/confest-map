#!/bin/bash
geojson2ndjson "$@" | ndjson2geojson
