#!/bin/bash

# Move to the images directory if needed
# cd /path/to/images

# Rename files by removing brackets and spaces
for file in *.png; do
    # Replace " (number)" with just the number and remove spaces
    newname=$(echo "$file" | sed 's/ ([0-9])/\1/g' | sed 's/ //g')
    
    # Rename the file if the new name is different
    if [ "$file" != "$newname" ]; then
        mv "$file" "$newname"
        echo "Renamed: $file -> $newname"
    fi
done
