<p align="center">
  <img alt="Naire Logo" height="128" src="https://user-images.githubusercontent.com/56566033/151099678-4fc99cd6-03f8-4f51-b44d-959828c0113e.png">
  <h1 align="center">A survey-based dating app</h1>
</p>

<p align="center">
  <a href="https://github.com/cwnicoletti/Naire/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-critical" alt="CC BY-NC 4.0">
  </a>
  <img src="https://img.shields.io/github/repo-size/cwnicoletti/Naire" alt="Repo Size">
  <img src="https://img.shields.io/github/commit-activity/m/cwnicoletti/Naire" alt="Repo Size">
  <a href="https://app.codacy.com/gh/cwnicoletti/Naire/dashboard">
    <img src="https://img.shields.io/codacy/grade/a5a52184b36940d9aac4438344861370" alt="Codacy Grade">
  </a>
</p>

## Table of Contents

  - [Purpose](#purpose)
  - [How it works](#how-it-works)
  - [Features](#features)
  - [Images Demo](#images)
  - [Videos Demo](#videos)
  - [Contributions](#contributions)
  - [Dependencies](#dependencies)
  - [Licensing](#licensing)

## Purpose

Systematically improve dates and relationships through the use of survey feedback on previous dates and relationships

## How it works

1. User A estimates certain qualities of the date or relationship (i.e. Enjoyment, Compatibility, Communication) with user B using sliders (All private)

2. User A determines the importance of each of these qualities

3. User A ties these specific qualities of user B to previous dates or relationships (if possible) creating a relational reference [database] of users' qualities

4. User(s) B that are most similar (relational) in qualities to other user(s) B and have higher positive experiences determined by user A (and those similar to user A determined by user(s) B) are considered for predicting the next user B that will improve the next date or relationship for user A (or a new user C). 
   - This creates a web (or graph) of users that are similar in certain qualities in relation to certain users
   - Relational data can also be used to determine depth of relation (similar to LinkedIn 1st, 2nd, 3rd connections)
   - In terms of morality, this is the best approach by far. Since these qualities are 100% subjective, a relational structure like this is crucial. A person attached to a number in a tally "scoring system" is obviously unethical and honestly even so I think it's just inefficient.
   - Best predictions will be determined by relation, how close these qualities are in value between user A and user B, and whether or not the qualities they have put importance in will improve if they match.

5. This prediction of a better overall quality of date or relationship is displayed to the user as a percent(%). (note: this isn't predicting a "100% quality" date or relationship. It's predicting whether or not the next date or relationship will simply be better than any other they have had)

6. User A finds/messages the best prediction and goes on a date or enters a relationship with that other user B

7. Cycle repeats

8. (Optional) User A and user B can choose to lock their app (or tell the app they've gone into a relationship. Both users hold a button for a certain amount of time to enable this feature, and either one can disable it from their own individual screen. Which obviously disables it for both users, signaling that the dating or relationship has ended) This assuress user A or user B can't use the app while they're in a relationship, and so that neither user can look at each other's statisics. (The only stat(%) that any user should see of each other is the prediction of whether their next date or relationship should improve).

## Features

  - Messaging
  - Chat System
  - Profile Building
  - Questionnaire system and UI database for questionnniares for the user (CRUD, basically)
  - Profile editing and previewing
  - Performance charts of previous dates and relationships

## Images

<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152225582-d4342e15-350e-4776-b378-36b495b2c9e5.PNG">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152225663-6745d2b2-f04a-456e-94e6-5cd3c3a83f47.PNG">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152225984-483b49b3-29ca-413e-8e8b-cfe4714f75c6.PNG">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152226027-11508cde-6420-46d8-8f9d-c227c3e1b9d0.PNG">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152226106-73d30826-9c8e-40ac-8afb-743f10ebe76d.PNG">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152623347-304ed94d-d086-48ac-ad88-ac59f71d88f6.PNG">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152226184-1b176cfb-f06f-47fb-be2c-46b6a29503a8.PNG">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152225272-a2c79e30-b643-48f7-bbae-9108c4b43164.PNG">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152616110-38c096ae-1913-4bf3-ac19-c33a798ec665.png">
<img alt="" width="300" src="https://user-images.githubusercontent.com/56566033/152623379-86883ee7-c62a-488f-b070-64b4e62cf5e1.PNG">


## Videos
https://user-images.githubusercontent.com/56566033/151604866-04605d5e-ebe8-4bbc-96b8-34fbb8b931d8.MOV

https://user-images.githubusercontent.com/56566033/151604918-b02ec624-7a49-4118-ac96-3d03d3c3a61f.MOV

https://user-images.githubusercontent.com/56566033/151604981-0f38b94e-789c-4da5-9ecc-941594379d7b.MP4

https://user-images.githubusercontent.com/56566033/152062250-38d773c3-b111-4949-9f9b-267ee676d723.MP4

https://user-images.githubusercontent.com/56566033/152052763-cd1a9624-f58d-4701-8802-6ddb2d8c3286.MP4

## Contributions
This is a "private" app in development, just for demo purposes, so I'm not taking any open-source contributions. If you'd like to join the project simply email me.

## Dependencies
[Package.json](https://github.com/cwnicoletti/Naire/blob/main/package.json)

## Licensing
The content of this repository is licensed under the terms specified in the [LICENSE](https://github.com/cwnicoletti/Naire/blob/main/LICENSE.md) file.
