# Anchors and Acorns
###### A React Native based squirrel pirate game.
Created on April 4th, 2018.
We are using React Navigation for app navigation and React Game Kit for sprite and game elements. All artwork and design was done by Tim Fox. For more info/official docs, visit:
* https://github.com/react-navigation/react-navigation - React Navigation
* https://github.com/FormidableLabs/react-game-kit - React Game Kit
* http://firstfox.wixsite.com/foxist - Tim Fox
___
### Instructions to start:
 1. After forking from github into your own repository
 - In the terminal, type `npm init` or `yarn init` and press enter.
 - Then type either `npm install` or `yarn install` and press enter.
 - After creating your package.json, make sure you have the dev dependencies
    `enzyme`, `enzyme-adapter-react-16`, `jest-expo`, `react-native-scripts`,
    and `react-test-rendrer`.
 - Make sure that you have the npm packages `expo`, `react-game-kit`, `react`, `react-dom`,
    `react-native`, and `react-navigation`.

___
### Anchors and Acorns Game Rules
* The object of the game is to navigate past the "squirrelpools" towards the island with the treasure.
* The first player to LEAVE the island with the treasure will win.
* The game starts at a title page where the app displays an image and requires the user to press the pirate flag to begin.
* From there the game navigates to an instruction page where the user will be presented with a very basic set of rules. To navigate to the full game the user taps "Tap here to play".
* The main game page begins with two boats, red and green, on the map.
* The ships are navigated by using the colored arrow keys located at the bottom of the screen. Each ship is moved by the corresponding colored arrows.
* Each ship has three moves on their turn.
* Once the red ship takes its three moves the color of the arrows will switch to green and then the red ship will take its turn.
* The ships will alternate turns.
* When a ship navigates into a whirlpool, referred to as a "squirrelpool", they will lose any remaining moves they have left on their turn.

___
### On the horizon
Future features we will be looking to implement include:
* User Auth to save progress and different ships etc.
* Randomizing player movement based on a "dice roller" feature.
* A point tracker for longer games or multiple games in a row.
* Turn tracker to display how many moves a player has left.
* Choices of ships/captains, with options to name your ships and/or captains.
* A button to silence the music.
* Randomized Maps with more/less hazards and treasure.
* New modes like Player vs Player and Treasure Hoarding.
* Animations for the ships, "squirrelpools", and water.
* Weather conditions that would affect gameplay.
___
Questions? Comments? The dev team is happy to address and concerns you may have 24/7. 1-800-867-5309 :wink:
