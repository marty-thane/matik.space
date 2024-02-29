#!/bin/sh

# Inserts non-breakable spaces after one-letter words.

sed -i -e 's/\b\([[:alpha:]]\)\b/\1\&nbsp;/g' -e 's/&nbsp; /&nbsp;/g' $1
