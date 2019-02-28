# Code Your Own Pet

## Class `Game`
The game is the the class that handles the user inputs, and manages the state of the pet, its food, and the activities the user can do with it.
### Properties
| Name | Notes |
| ---   | --- |
| `petName` | The name of the pet the user entered |
| `userName` | The name of the user the user entered  |
| `pet` |  Initialized with the `petName` and `userName` |
| `userName` | Initialized by user input |
|  `food` | An `Array` of `Food` objects:
| |                 > `Apple(5)`|
| |                 > `Spaghetti(50)`|
| |                 > `Granola(25)` |
|  `activities` | An `Array` of `Activity` objects:
| |                 > `Cuddle(5)`|
| |                 > `Walk(50)`|
| |                 > `Pet(25)` |
| gameOn | set = true |
| gameClock | undefined |

### Methods
| Name | Logic |
| ---   | --- |
| `runGame()` | This has already been created |
| `setupGame()` | creates new `Pet` with `pet.name` and `userName` |
| `setupPet()` | sets up the relevant HTML for the pet |
|  `setupFood()` | sets up the relevant HTML for the food |
|  `setupActivities()` | sets up the relevant HTML for the Activities |
|  `updateEnergyLevel()` | updates the relevant HTML for the pets energy level |
|  `updateFunLevel()` | updates the relevant HTML for the Fun |
|  `updateHappinessLevel()` | updates the relevant HTML for the Happiness |
| `gameOver()` | GameOn is set to `false`, the interval is cleared, and the user is alerted the game is over|


## Class: `Pet`
### Properties

- `name`
- `hunger`
  - Starts at 0
- `boredom`
  - Starts at 0
- `happiness`
  - Starts at 100
- `isAlive`
  - Is true until `die()` is called

### Methods
#### `feed(food);`
- Takes a `food` as a parameter
- TODO Write what this does
#### `play();`
- if `!isAlive`, do nothing. otherwise...
- takes an `action` object as a parameter
- TODO Write what this does
### `checkHunger()`
  - if `!isAlive`, do nothing. otherwise...
  - if 0, `die()`
### `checkBoredom()`
  - if `!isAlive`, do nothing. otherwise...
  - if 0, hunger decreases twice as fast?
#### `checkHappiness()`
  - if `!isAlive`, do nothing. otherwise...
  - Happiness is calculated with the following equation:
  - `Math.floor((hunger + boredom) / 2))`
  - `this.happiness` between 65 - 100 is `happy`
  - `this.happiness` between 35 - 64 is `meh`
  - `this.happiness` between 0 - 34 is `sad`
  - if 0, `die()`
#### `die()`
  - sets `isAlive` to false

```js
function checkHappiness(i) {
  if (i >= 65 && i <= 100) {
      return "happy"
  }
  if (i >= 35 && i < 65) {
      return "meh"
  }
  if (i >= 0 && i < 35 ) {
      return "sad"
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(checkHappiness(i));
}
```
- `die()`
  - Stops the timer
- `makeNoise()`

## Class `Food`
## Class `Activity`
## Class `Timer` (premade)