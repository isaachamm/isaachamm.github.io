## The Cinnamon Game - React + TS Web App

<img src="src/assets/cinnamon-screenshot.jpg" style="width:30em; height:auto;" alt="Cinnamon Game Image" title="Cinnamon Game Image" />

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

## Better Conversations:
<img src="src/assets/bc-figma.jpg" style="width:30em; height:auto;" alt="Better Conversations Figma Image" title="Better Conversations Figma Image" />

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

## Animated Git tutorial:

>**Description:** Use Disney animations to make a free tuturial on how to use Git\
>**Status:** Ideating\
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
>**Status:** Ideating\
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