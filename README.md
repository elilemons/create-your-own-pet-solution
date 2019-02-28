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
| Name | Notes |
| ---   | --- |
| `name` | The name of the pet the user entered |
| `energyLevel` | The name of the user the user entered  |
| `funLevel` |  Initialized with the `petName` and `userName` |
| `happiness` | Initialized by user input |
| `isAlive` | Set to `true` |

### Methods
| Name | Notes |
| --- | --- |
| `feed(food);`|
- Takes a `food` as a parameter
- Adds the `food.energyValue` to the pet's `energyValue` |
| `play();` |
- Takes an `activity` as a parameter
- Adds the `activity.funValue` to the pet's `funLevel` |
| `checkEnergy()` |
  - returns the pet's `energyLevel` |
| `checkBoredom()` |
  - returns the pet's `funLevel |
| `checkHappiness()` |
  - returns `energyLevel + funLevel / 2` |
| `die()` |
  - sets `isAlive` to false |
| `die()` |
  - Sets `isAlive` to false |

## Class `Food`

## Class `Activity`
## Class `Timer` (premade)