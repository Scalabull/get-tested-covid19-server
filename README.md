# get-tested-covid19-server

Backend for get-tested-covid19

## Table of Contents

- [Requirements](#requirements)
  - [Required Installations](#required-installations)
  - [Required Accounts](#required-accounts)
- [Setup](#setup)
  - [Initial Setup](#initial-setup)

## Requirements

### Required Installations

- Node 12.x

### Required Accounts

- Github for code Storage
- CircleCi for deployment

## Setup

### Initial Setup

1. Copy sample.env to dev.env `cp config/sample.env config/dev.env`.
1. Set values in `config/dev.env` for your system (note: this file is gitignored intentionally).
1. Install Node dependencies with `npm install` or `$ npm i`
1. Run app with `npm run start:dev`

## Daily Cadence

### Development Worflow

1. Follow an outside-in test-first methodolgy. When writing a new feature, first add or modify test spec, then change the next lowest level of the architecture that implements the functionality you want. Repeat until the feature is complete.
1. Clean up the code you have written.
1. If older specs are no longer useful, adjust and/or delete them.
1. Update documentation for changes in the config.
