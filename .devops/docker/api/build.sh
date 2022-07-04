#!/usr/bin/env bash
set -e

SOURCE_ROOT="/var/source"
$SOURCE_ROOT/.devops/devsh/switch_user.sh "node"

cp "$SOURCE_ROOT/.devops/docker/api/config/entrypoint.sh" /usr/local/bin

#cleanup
rm -Rf "$SOURCE_ROOT"
