#!/usr/bin/env bash

npm uninstall ng2-ui
npm install ng2-ui
rm -rf ng2-ui
cp -R node_modules/ng2-ui ng2-ui
