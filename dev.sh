#!/bin/bash

# Define the directory you want to serve files from
web_root="./"

# Define the port number you want to use
port=8080

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "Python 3 is not installed. Please install Python 3 and try again."
    exit 1
fi

# Change to the web root directory
cd "$web_root" || exit 1

echo "http://localhost:$port"

# Start the web server
python3 -m http.server "$port"

# Print a message indicating the server has started


