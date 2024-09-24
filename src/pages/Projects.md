## The Cinnamon Game - React + TS Web App
>**Status:** MVP completed: functional, but has room for a lot of improvements/features\
>**Description:** A NY-Times style game that involves guessing words and synonyms based on definitions\
>**URL:** [The Cinnamon Game Site](https://isaachamm.github.io/cinnamon-game/)\
>**Github:** [The Cinnamon Game Github](https://github.com/isaachamm/cinnamon-game)\
>**Next Task:** Add navbar\
>**Task List:**

>- [ ] Make it possible for people to share with friends (need to create a scoring system in this case too)
>- [ ] Include more data to handle multiple meanings/definitions. OR choose one to roll with. 
>     - Currently, I just take the first one from the API call's meanings and definitions array. Can we do better?
>- [ ] Add navbar to link back to main site
>- [x] Make it so that new words are pulled in each day (currently has hardcoded data)
>- [x] Make a daily cinnamon logo
>- [x] Improve the UI/UX of the game

>**Technologies Used:**

>- Mostly vanilla React + TS using Vite
>- [Free Dictionary API](https://dictionaryapi.dev/)

>**Cool/Interesting Notes:**

>* I designed and created the cinnamon logo for this page
>* To prevent constant API use, the dictionary is actually loaded in its entirety into the browser—-don't cheat! This prevents constant API use, but does increase page load time. If the game gets more popular, I would love to have to fix this.

---

## Project template:

>**Status:** \
>**Description:** \
>**URL:** [Site Link]()\
>**Github:** [Github Link]()\
>**Next Task:** \
>**Task List:**

>- [ ] Todo 1

>**Cool/Interesting Notes:**

>* Point 1

---

## All Projects Notes
Notes on adding a new Github Pages Page:
- This process currently doesn't make a header that's available on all of them because it's a new page -- maybe desired behavior?
- Go to Settings -> Pages on a specific Github repo, and change the settings to be from a branch
- add .github/workflows/{build}.yml to the root directory to make a github actions workflow
- Add ```base: './',``` to vite.config.ts inside of ```defineConfig```