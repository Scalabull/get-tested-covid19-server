# get-tested-covid19-server

Backend for get-tested-covid19

## Table of Contents

- [Requirements](#requirements)
  - [Required Installations](#required-installations)
  - [Required Accounts](#required-accounts)
- [Setup](#setup)
  - [Initial Setup](#initial-setup)
- [Daily Cadence](#daily-cadence)
  - [Development Workflow](#development-workflow)
    - [Pivotal Trackerj](#pivotal-tracker)
      - [Stories](#stories)
      - [Bugs](#bugs)
      - [Chores and Releases](#chores-and-releases)
      - [Tracker Workflow](#tracker-workflow)

## Requirements

### Required Installations

- Node 12.x

### Required Accounts

- Github for code Storage
- CircleCi for deployment
- As an open source project, we have free access to `Pivotal Tracker`. Once you setup your account, let us know in the Get Tested COVID-19 #developers channel on Slack so we can add you to the project.

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

### Pivotal Tracker

#### Stories

- Create stories in the `Icebox`: `As a User, I can enter my zip code and retrieve a list of testing centers sorted by distance.`

#### Bugs

- Create bugs using `should`: `As a Developer, I should be able to enter my zip code and retieve a list of testing centers sorted by distance.`

#### Chores and Releases

- Chores and Releases can use any structure that communicates the work to the team.

#### Tracker Workflow

- To work on a story, set yourself as the `owner` (there can be multiple owners), select the points (the level of effort from 0 - 3), fill out any other form fields and click `Start`.
- Add Tasks you can cross off as completed. ie: `Add zipcode routes`, `Add tests for zipcode routes`.
- Update activity notes as needed, ie: `I've created all the tests for zipcode routes`.
- Unfortunately there are times when we start out as an owner and life gets in the way. If you find you are in that situation, you can remove yourself as an owner and update the team for clarity.
- Anyone picking up the story adds themselves as an owner and complete the next task: click `Finished`.
- Once you create your PULL REQUEST click `Deliver` and drag your story to the top of the backlog list.
- Acceptance
  - When your story is `Accepted` merge it to master and delete the old branch.
  - If your story is `Declined` check the activity notes for the reasons, make changes and resubmit.
