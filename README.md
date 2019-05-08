# MIPS Educational Game for CSE442 semester-long project

Purpose: A web-based game for teaching MIPS to its beginner, such as students in UB CSE341.

Authors: Hanzhang Bai, Sai Cao, Xiang Li, Tianyu Cao

Last updated on 08 May 2019

Sprint 1 deployed website: https://hbai.me/sprint1

Sprint 2 deployed website: https://hbai.me/sprint2

Sprint 3 deployed website: https://hbai.me/sprint3

Trello board: https://hbai.me/trello

Presentation slide: https://hbai.me/442-ppt

# Release Note

Version 3 (8th May 2019)

Highlights:

* A lot of grammar fixes
* A complete tutorial chapter
* Execution speed control
* Execution line highlight
* Ability to change which line is currently executed
* All arithmetic operations are now supported
* Credit page
* The most important one: we have a return button now!



### Game UI for sprint 3
![UI](https://github.com/sxht4/MIPS-Edu-Game/blob/master/Assets/game_UI/UI_sprint3.jpg)

Version 2 (10th April 2019)

Highlights:

* Integrated interpreter
* A working game that accepts `add` and `addi`
* A more completed UI compared to the first sprint 

### Game UI for sprint 2
![UI](https://github.com/sxht4/MIPS-Edu-Game/blob/master/Assets/game_UI/UI_sprint2.jpg)

Version 1 (5th March 2019)

Highlights:

* Main menu
* Animation
* Working buttons

### Game UI
![UI](https://github.com/sxht4/MIPS-Edu-Game/blob/master/Assets/game_UI/game_UI.jpg)

1. MIPS code can be write in this area
2. Show memory status in runtime of MIPS code 
3. Show registers in MIPS
4. Show the MIPS instruction menu. player can drag from the menu and choose registers and meomory instead of typing the code.
5. Buttons that control game speed, run the code and pause.
6. NPC to provide help and give the task.
7. A character play role of CPU.
Animation will show the prococess that how the MIPS instruction is excuted for player.

# Deploy our project

System requirement:

* Fresh installed `CentOS 7.x` is officially supported for deployment script

* Apache 2

Run this script on your Linux OS.

`wget https://hbai.me/442-getLatestBuild && sudo chmod u+x install.sh && sudo ./install.sh --deployment-only`

If you already setup your Apache or nginx, just extract our project into your `public_html` folder.

# Licence

MIT Licence

Note for future CSE442 groups: You may build more functionalities on top of this project. You MUST not claim these work as your own, otherwise you are violating academic integrity policy that is explained in your syllabus.