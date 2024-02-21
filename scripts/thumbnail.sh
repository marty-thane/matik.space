#!/bin/sh

# Generates thumbnail from input.

convert $1 -gravity center -crop 760x760+0+0 thumb.webp
