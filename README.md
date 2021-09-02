# **RWBY Fan-Made Quiz**

## # Table of contents

1. [Link to live site](#linktolivesite)
2. [Wireframes](#wireframes)
3. [Overview](#overview)
4. [User Stories](#userstories)
5. [Features](#features)
    1. [Style Choices](#stylechoices)
    2. [Favicon](#favicon)
    3. [Index Page](#indexpage)
    4. [About Modal](#aboutmodal)
    5. [Game Page](#gamepage)
    6. [Rules Modal](#rulesmodal)
    7. [Congrats Game Modal](#congratsgamemodal)
    8. [Game Over Modal](#gameovermodal)
6. [Implementation](#implementation)
7. [Testing](#testing)
    1. [HTML](#html)
    2. [CSS](#css)
8. [Unfixed Bugs](#unfixedbugs)
9. [Deployment](#deployment)
    1. [Local Deployment](#localdeployment)
    2. [Remote Deployment](#remotedeployment)
10. [Credits](#credits)

## **Link to live site**

https://lukemunsch.github.io/rwbyQuiz/

## **Wireframes**

[Index Page Here](/workspace/rwbyQuiz/assets/images/wireframes/rwbyQuizIndex.png)

[Game Page Here](/workspace/rwbyQuiz/assets/images/wireframes/rwbyQuizGame.png)

## Overview

The RWBY Fan-Made Quiz is designed for people to have fun testing their knowledge of the Remnant 
universe and the characters that they have fallen in love or hate with.

The quiz is intended to give the user a brief (and occasionally funny) answer set to questions 
about events/people/places they have met/visited within the story told about Ruby Rose and 
her collection of Huntsmen. They can run the quiz multiple times in order to see how they 
fare against a randomly assigned set of questions.

## User Stories

On the user's first visit to my Quiz site, this will allow the user to test the site and 
try out their knowledge. They can appreciate the aesthetic of the page and how they link 
to the main themes and colors of the RWBY show.

On the second and all further visits to the RWBY Fan-Made Quiz, they will test their knowledge 
further with a series of randomly assigned questions that will differ every time they are 
running the quiz: the number of questions to answer are 20 and the life lines add extra points 
depending on how many lives are remaining. The randomly selecting questions will be chosen from 
over 60 available, so they may be able to run the quiz 3 times with only occasional repeats.

## Features

### Style Choices

Using some of the main logo images and personal experience from viewing the show myself;
- I have styled the quiz pages and elements using the themes of the main RWBY team with 
the prominant theme being Ruby Rose (the main protagonsit for the show and leader of 
team RWBY) in black and red buttons and highlights. 
- The answer buttons are shown in the 4 main character colors: Ruby - red, Weiss - white, 
Blake - black (dark elements), and Yang - yellow. 
- The text color is supposed to represent the blade color for Crescent Rose (the large 
scythe weapon).

### Favicon

As the most iconic weapon in the RWBY universe, I have chosen Crescent Rose as the favicon.ico to represent the site in the browser tab. 

### Index page

This is the Entry page for the RWBY Quiz - the first page that allows user to enter 
the actual quiz.
- Headed by the main logo for RWBY and a smaller design when the screen responds 
to the smaller widths.
- The main protagonists icon of Red Rose (for Ruby Rose), used to enter the quiz 
along with the text below just in case the icon fails to load.
- The footer which is fixd to the bottom of the page as to peices of text (or one 
if the screen size is too small) with simple text.


image

### About Modal

description

image

### Game Page

Description

image

### Rules Modal

description

image

### Congrats Game Modal

description

image

### Game Over Modal

description

image


## Implementations

The main page

The game page

The pop up modals


## Testing

The quiz has been put through validator checks to confirm that there are no issues with teh code.
I have provided screen shots below to confirm the results of the validator checks.


### HTML

#### Index Page Check

![Index page Validator](assets/images/validators/indexValidator.png)

#### Game page Check

![Game page Validator](aassets/images/validators/gameValidator.png)

### CSS Check

![CSS Code Validator](assets/images/validators/cssValidator.png)

## Unfixed Bugs

any bugs?

## Deployment

### Local Deployment

forking 

cloning - downloading or copying using git

remote deplayment see below:


### remote deployment

assuming that you have somehow retrieved a copy of this repository; you can then:
1. Navigate to settings (upper right of page).
2. On the left, navigate downwards to the Pages section.
3. When page loads there would be a dropdown in main section of page, choose main/master.
4. Hit Save and wait for link to show as: "Your site is published at 
https://<'your-github-repo'>.github.io/rwbyQuiz/"


## Credits

In the beginnging of the JavaScript section of my project I created numerous versions of my 
code but I couldn't make the code compelete what I wanted it to. Through my research i have 
managed to find an example of quiz site that i have copied the structure it help build my 
site and I have adapted the code to make it my own and evolved it for my own quiz. The main 
video I used was James Q Quick's video on youtube, https://www.youtube.com/watch?v=zZdQGs62cR8
is the video for fixing the issues I had with my quiz code.

I did have a few issues with a pop up modal that failed to appear and disappear with the clicking
of certain elements but another user called Dean Andrejevic was able to assist me. Together we were 
able to resolve the issue and made the modals appear as necessary.

I was also having trouble with my lifeline icons not disappearing - and then once they did, not
reappearing when game restarted - and together with my mentor Chris Quinn i was able to adapt
my code and identify the issues with targeting my specific elements and then making sure the 
elements were styled correctly in the start game function.

The images I have used for my site were found through google searches for specific logos/icons/images:
- The larger main logo is from https://geekdad.com/wp-content/uploads/2015/10/RWBYLogo.png,
- The smaller main logo is from https://i.kym-cdn.com/photos/images/original/000/628/214/9ed.png,
- The rose emblem is from https://static.wikia.nocookie.net/rwby/images/3/34/Ruby_Rose_Emblem.svg/revision/latest/scale-to-width-down/250?cb=20150103071935
- The scythe icon for lifelines is from https://e7.pngegg.com/pngimages/790/597/png-clipart-scythe-rwby-volume-4-chapter-1-the-next-step-rooster-teeth-cosplay-anime-ruby-others-miscellaneous-weapon.png
- The salem game over image is from https://ladygeekgirl.files.wordpress.com/2016/06/rwby-salem.png
- the Successful game image is from https://static.wikia.nocookie.net/rwby/images/2/2c/Team_RWBY_charges.jpeg/revision/latest?cb=20171029001801