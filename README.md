# Code Your Own Pet

## Class `Game`
The game is the the class that handles the user inputs, and manages the state of the pet, its food, and the activities the user can do with it.
### Properties
| Name | Notes |
| ---   | --- |
| `pet` |  Initialized with a `name` by user input |
| `userName` | Initialized by user input |
|  `availableFood` | An `Array` of `Food` objects:
| |                 > `Apple(5)`|
| |                 > `Spaghetti(50)`|
| |                 > `Granola(25)` |
|  `activities` | An `Array` of `Activity` objects:
| |                 > `Cuddle(5)`|
| |                 > `Walk(50)`|
| |                 > `Pet(25)` |
| `isGameOver` | Game over is set to `true` if `!Pet.isAlive` or user quit |

### Methods
| Name | Logic |
| ---   | --- |
| `startGame()` | creates new `Pet` with `pet.name` and `userName` |
| `turn()` | ticks the `timer` clock |
|  `run()` | keeps the `timer` running, checks `Pet.isAlive` and runs `quit()` when appropiate |
| `quit()` | Game over is set to `true` if `!Pet.isAlive` or user quit |


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