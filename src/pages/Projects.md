# Projects List

## The Cinnamon Game
Status: In-progress: works with hardcoded data

Description: A NY-Times style game that involves guessing words and synonyms based on definitions

Cool/Interesting Notes:
- I designed the cinnamon logo for this page

URL: https://isaachamm.github.io/cinnamon-game/

Github:

Next Task: Make it so that new words are pulled in each day (currently has hardcoded data)

Task List:

- [ ] Make it possible for people to share with friends (need to create a scoring system in this case too)
- [ ] Make it so that new words are pulled in each day (currently has hardcoded data)
- [ ] Include more data to handle multiple meanings/definitions. OR choose one to roll with. 
     - Currently, I just take the first one from the API call's meanings and definitions array. Can we do better?
- [ ] Make a daily cinnamon logo
- [ ] Add navbar to link back to main site
- [x] Improve the UI/UX of the game

## Project 2

## Notes
Notes on adding a new Github Pages Page:
- This process currently doesn't make a header that's available on all of them because it's a new page -- maybe desired behavior?
- Go to Settings -> Pages on a specific Github repo, and change the settings to be from a branch
- add .github/workflows/{build}.yml to the root directory to make a github actions workflow
- Add ```base: './',``` to vite.config.ts inside of ```defineConfig```