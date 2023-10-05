#!/bin/bash

# Define the JSON file path
name="$1"
json_file="sketches.json"

# Get the current date in the format YYYY-MM-DD
current_date=$(date +%F)

# Define the new object you want to add (replace with your own data)
new_object="{\"title\": \"$name\",\"url\": \"$name\",\"final\": false,\"tags\": [],\"date\": \"$current_date\",\"thumb\": \"placeholder.png\"}"

# Check if the JSON file exists
if [ ! -f "$json_file" ]; then
    echo "Error: JSON file '$json_file' not found."
    exit 1
fi

# Check if the JSON file is valid
if ! jq empty "$json_file" &>/dev/null; then
    echo "Error: '$json_file' is not a valid JSON file."
    exit 1
fi

# Add the new object to the JSON array
jq ". += [$new_object]" "$json_file" > temp.json && mv temp.json "$json_file"


sorted_json=$(jq 'sort_by(.date) | reverse' "$json_file")
echo "$sorted_json" > "$json_file"

echo "New object added to $json_file:"
cat "$json_file"


# Set the source folder and destination folder names
source_folder="./templates/simple"  

# Replace with the actual source folder path

destination_folder="./sketches/$name"

# Check if the destination folder already exists
if [ -d "$destination_folder" ]; then
    echo "Destination folder '$destination_folder' already exists."
    exit 1
fi

# Create the destination folder
mkdir "$destination_folder"


# Copy the contents from the source folder to the destination folder
cp -r "$source_folder"/* "$destination_folder"

echo "Folder '$destination_folder' created and contents copied successfully."