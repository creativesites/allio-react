# Project Title
Allio-React. Deployed to Firebase Hosting for the project autoservice1-wfjfmj.
## Description
A React client with Add and view functionality for the following:
* Advisors
* Agents
* Dealers
* Create Emails

## Application URL: 

https://autoservice1-wfjfmj.web.app/

## Login Details
username: bena
pwd: Allio12@

## Getting Started
``` npm install ```

To Run

``` npm start ```

To Deploy to Firebase

``` firebase deploy ```


### Create Email
* Was setup to use Namecheap.
* In Namecheap enable two-factor-authentication
* Select Authentication App (TOTP) option
* Add the backup codes to the App, through the Create Email Page.
* The backend uses the backup codes to authenticate with Namecheap.
* Each of the backup codes is used only once, so when they are all used up, you can regenerate new codes and add them.
* To regenerate go to: Profile → Security →  Two-Factor Authentication -> Backup Codes --> REGENERATE BACKUP CODES
