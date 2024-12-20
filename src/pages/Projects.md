## The Cinnamon Game - React + TS Web App

<img src="" style="width:30em; height:auto;" alt="Placeholder Image" title="Placeholder Image" />

>**Description:** A Golang RESTful HTTP server that acts as an API for using Google Sheets as a DB for quick iterations.\
>**URL:** [Empty Link]()\
>**Github:** [Google Sheets API](https://github.com/isaachamm/google-sheets-api)\
>**Technologies Used:**
>- Golang
>- Google Sheets API

<details>
<summary><strong>Additional details</strong></summary>

>**Status:** In Development\
>**Next Task:** Make Creation of sheets compare against existing (i.e., no duplicate sheet names)\
>**Task List:**

>- [ ] Make Creation of sheets compare against existing (i.e., no duplicate sheet names)
>- [ ] Be able to write data to sheets
>- [ ] Be able to update data on sheets
>- [ ] Be able to delete data on sheets
>- [ ] Be able to read data from sheets


>**Interesting Notes:**

<!-- >* Point 1
>* Point 2 -->
</details>

---

<img src="/cinnamon-screenshot.jpg" style="width:30em; height:auto;" alt="Cinnamon Game Image" title="Cinnamon Game Image" />

>**Description:** A NY-Times style game that involves guessing words and synonyms based on definitions\
>**Status:** MVP completed: functional, but has room for a lot of improvements/features\
>**URL:** [The Cinnamon Game Site](https://isaachamm.github.io/cinnamon-game/)\
>**Github:** [The Cinnamon Game Github](https://github.com/isaachamm/cinnamon-game)\
>**Technologies Used:**
>- React + TypeScript using Vite
>- [Free Dictionary API](https://dictionaryapi.dev/)

<details>
<summary><strong>Additional details</strong></summary>

>**Next Task:** Share with friends\
>**Task List:**

>- [ ] Make it possible for people to share with friends (need to create a scoring system in this case too)
>- [x] Make it possible to choose other dates and play the Cinnamon from that date
>- [ ] Include more data to handle multiple meanings/definitions. OR choose one to roll with. 
>     - Currently, I just take the first one from the API call's meanings and definitions array. Can we do better?
>- [x] Add navbar to link back to main site
>- [x] Make it so that new words are pulled in each day (currently has hardcoded data)
>- [x] Make a daily cinnamon logo
>- [x] Improve the UI/UX of the game


>**Interesting Notes:**

>* I designed and created the cinnamon logo for this page
>* To prevent constant API use, the dictionary is actually loaded in its entirety into the browser—-don't cheat! This prevents constant API use, but does increase page load time. If the game gets more popular, I would love to have to fix this.
</details>

---

## Session Stats Trackmania Plugin:
<img src="" style="width:30em; height:auto;" alt="Placeholder Image" title="Placeholder Image" />

>**Description:** A plugin for the Nadeo game Trackmania 2020 that allows a player to set a time limit, or other limits such as no. of respawns, while also offering statistics on specific sessions for playing\
>**URL:** [Empty Link]()\
>**Github:** [Session Stats Plugin](https://github.com/isaachamm/control-yourself-tm-plugin)\
>**Technologies Used:**
>- AngelScript / C++
>- OpenPlanet API

<details>
<summary><strong>Additional details</strong></summary>

>**Status:** V1 completed, but not launched\
>**Next Task:** Submit an application to OpenPlanet\
>**Task List:**

>- [x] Store respawn number/timer across different maps
>- [x] Display total respawn number/timer on screen
>- [x] Allow user to determine total number of respawns/total time before a message appears
>- [ ] Encourage users to take a break every so often? (i.e., every 45 minutes, display a message that says "go touch grass")


>**Interesting Notes:**

>* I am a Top 50 Trackmania player in Utah
>* I stream on Twitch as a Trackmania player. Max no. of viewers I've achieved for a single stream: 157
</details>

---

## Better Conversations:
<img src="/bc-figma.jpg" style="width:30em; height:auto;" alt="Better Conversations Figma Image" title="Better Conversations Figma Image" />

>**Description:** An app that gives you thought-provoking questions to ask people\
>**Status:** Designing using Figma\
>**URL:** [Empty Link]()\
>**Github:** [Empty Link]()\
>**Technologies Used:**
>- Technology 1

<details>
<summary><strong>Additional details</strong></summary>

>**Next Task:** \
>**Task List:**

>- [ ] Todo 2
>- [ ] Todo 2


>**Interesting Notes:**

>* Point 1
>* Point 2
</details>

---

## Film Site:

>**Description:** A photo display for film pictures, and a film photography tutorial/playground\
>**Status:** Looking into CSS solutions for toying with images' brightness and blur, but need more specific film pictures to be able to play with things like aperture and depth of field.\
>**URL:** [Empty Link]()\
>**Github:** [Empty Link]()\
>**Technologies Used:**
>- Technology 1

<details>
<summary><strong>Additional details</strong></summary>

>**Next Task:** \
>**Task List:**

>- [ ] Todo 2
>- [ ] Todo 2


>**Interesting Notes:**

>* Point 1
>* Point 2
</details>

---

## Animated Git tutorial:

>**Description:** Use Disney/anime animations to make a free tuturial on how to use Git\
>**Status:** On the backburner for now because of Copyright issues. Would have to create our own animations and/or music.\
>**URL:** [Empty Link]()\
>**Github:** [Empty Link]()\
>**Technologies Used:**
>- Technology 1

<details>
<summary><strong>Additional details</strong></summary>

>**Next Task:** \
>**Task List:**

>- [ ] Todo 2
>- [ ] Todo 2


>**Interesting Notes:**

>* Point 1
>* Point 2
</details>

---

## Project template:
<img src="" style="width:30em; height:auto;" alt="Placeholder Image" title="Placeholder Image" />

>**Description:** Summary\
>**URL:** [Empty Link]()\
>**Github:** [Empty Link]()\
>**Technologies Used:**
>- Technology 1

<details>
<summary><strong>Additional details</strong></summary>

>**Status:** \
>**Next Task:** \
>**Task List:**

>- [ ] Todo 2
>- [ ] Todo 2


>**Interesting Notes:**

>* Point 1
>* Point 2
</details>

---

## All Projects Notes
Notes on adding a new Github Pages Page:
- This process currently doesn't make a header that's available on all of them because it's a new page -- maybe desired behavior?
- Go to Settings -> Pages on a specific Github repo, and change the settings to be from a branch
- add .github/workflows/{build}.yml to the root directory to make a github actions workflow
- Add ```base: './',``` to vite.config.ts inside of ```defineConfig```