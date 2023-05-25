#!/bin/bash

# Set your variables
SOURCE_FOLDER="build"
TARGET_REPO="https://github.com/premkumar0/premkumar0.github.io.git"
TARGET_BRANCH="main" # Or any branch you want to use for the build folder
COMMIT_MESSAGE=$(git log -1 --pretty=%B)

# Store the current branch and directory
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)
CURRENT_DIR=$(pwd)

# Build the project (if needed)
npm run build

# Create a temporary directory and clone the target repo
TEMP_DIR=$(mktemp -d)
git clone "$TARGET_REPO" "$TEMP_DIR" --branch "$TARGET_BRANCH" --single-branch --depth 1

# Copy the build folder to the temporary directory
rsync -a --delete --exclude='.*/' "$SOURCE_FOLDER/" "$TEMP_DIR/"

cd "$TEMP_DIR"
git config user.name "premkumar0"
git config user.email "premkumarnunna@gmail.com"

# Commit and push changes to the target repo
git add .
git commit -m "$COMMIT_MESSAGE"
git push origin "$TARGET_BRANCH"

# Cleanup
cd "$CURRENT_DIR"
rm -rf "$TEMP_DIR"

# Switch back to the original branch (if needed)
git checkout "$CURRENT_BRANCH"
