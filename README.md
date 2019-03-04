# MIPS Educational Game for CSE442 semester long project

Purpose: Educational game for MIPS beginner

Authors: Hanzhang Bai, Sai Cao, Xiang Li, Tianyu Cao

Last updated on 21 February 2019

Website: https://testbench.cse442-project.miku.hbai.me

~~Project webpage will be available soon! Stay tuned!~~

# Internal Contact Channels
**IMPORTANT: We have MANDATORY meetings each Wednesday at 6pm(18:00-18:50) in Baldy 19**
* Issue tracker on this github repository 
* [Bulletin and Scrum Board](https://trello.com/b/NIahwqsH/cse442-mips-educational-game "Official Channel")
* [Official Slack channel](https://cse442-workspace.slack.com/messages/GG14R0RF1/details/ "Official Slack channel for group activities")

# Branch Protection Settings Overview
* `master` branch requires TWO(2) people to approve other than the author
* `development` branch reuiqres ONE(1) person to approve other than the author

# Environment setup 

Google Chrome + NPM + Mocha 

Since it is OS independent, it should be able to debug on both Linux and Windows 10

For more details please visit [here](https://github.com/sxht4/MIPS-Edu-Game/tree/hbai/instructions)

As `package.json` suggests, you will need to have `mocha`, `chai`, and `mocha-simple-http-reporter` in order to start debugging and using unit tests

Use `install.sh` under testScripts folder

# Deploy our project
If this is released to the end user, use `deploy.sh`

However, if it is internal testing, just use `install.sh --deployment-only` , where `install.sh` is under testScripts folder