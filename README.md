Acceptance Criteria
=======================================================================================
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

# work_day_scheduler
link to my project:      https://bennygabel.github.io/work_day_scheduler/
link to the repository:  https://github.com/BennyGabel/work_day_scheduler/tree/main

# description
Will store activities for a work-day - 1 day only - 9 hours (9 to 17 inclusive)

# How to use this project 
The website works with moment.js API
The website will ONLY store 1 day (9 hours) in local storage. (Refer to Technical Aspects)


# Technical aspects
HTML
-----------------------------------------------------------------------------------------------
1 Additions regarding divs 
  - Container
  - row time-block  (9 divs)
    * Time
    * Task           id='hour_#'
    * Save Button    id='save_#'

JS
-----------------------------------------------------------------------------------------------
1 Gets today's date from moment.js
 Creates 

2) When the website is called for first time, will check localStorage information
   - If it is empty (for "dailyPlanner"), will work with Array pre-set  << aryDayScheduler >>
   - If date (in localStorage) matches the current day, will load values and display in screen
   - If date matches the current day, will load values and display in screen
If the website is called in a future dayit is 


