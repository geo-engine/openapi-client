#!/bin/bash

# FOR DEVELOPMENT USE ONLY
#
# Usage (from the repo root): ./util/ui-dev-update.sh [-a] [commit-message]
#
# this script uses the OpenAPI json from a Geo Engine instance running on port 3030
# it generates the openapi-client and pushes it to the current branch (-a to amend the last commit)
# then it updates the geoengine-ui's openapi-client dependency to the development branch
# note: the geoengine-ui git repo must be in the same directory as the openapi-client repo

set -e

wget -O .generation/input/openapi.json \
  http://localhost:4200/api/api-docs/openapi.json
.generation/generate.py --no-spec-fetch --no-container-build python
.generation/generate.py --no-spec-fetch --no-container-build typescript

git add .

current_branch=$(git rev-parse --abbrev-ref HEAD)

if [ "$current_branch" == "main" ]; then
    echo "Error: You are on the main branch. Exiting."
    exit 1
fi

# Check if -a is passed as an argument
if [[ "$*" == *"-a"* ]]; then
    # Use git commit --amend
    git commit --amend --no-edit

    git push -f origin ${current_branch}
else
    # Get all arguments as a single string
    args_as_string="$*"

    # Set the commit message to the input arguments or a default message
    message=${args_as_string:-"update openapi-client"}

    git commit -m "$message"

    git push -u origin ${current_branch}
fi

cd ../geoengine-ui

npm uninstall @geoengine/openapi-client
npm install @geoengine/openapi-client@https://gitpkg.now.sh/geo-engine/openapi-client/typescript?${current_branch}

cd -
