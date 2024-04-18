chmod +x .githooks/commit-msg
ln .githooks/commit-msg .git/hooks/

#!/bin/bash

# Define directories
githooks_dir=".githooks"
hooks_dir=".git/hooks"

# Iterate over files in .githooks directory
for file in "$githooks_dir"/*; do
    # Extract filename from path
    filename=$(basename "$file")
    
    # Make the hook executable
    chmod +x "$githooks_dir/$filename"

    # Create symlink in .git/hooks directory
    ln -sfn "../../$githooks_dir/$filename" "$hooks_dir/$filename"
done

echo "Hooks symlinked successfully."
