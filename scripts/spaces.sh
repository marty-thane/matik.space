#!/bin/sh

# Inserts non-breakable spaces after one-letter words.

sed -i 's/\b\([[:alpha:]]\)\b/\1\&nbsp;/g' $1
