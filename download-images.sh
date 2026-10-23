#!/bin/sh
# Downloads every site photo into ./images (same folder structure as luxxata.com/wp-content/uploads).
cd "$(dirname "$0")"
while IFS= read -r p; do [ -z "$p" ] && continue; mkdir -p "images/$(dirname "$p")"; [ -f "images/$p" ] || curl -fsSL "https://www.luxxata.com/wp-content/uploads/$p" -o "images/$p" || echo "FAILED $p"; done < images-list.txt
echo done
