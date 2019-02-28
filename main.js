(function() {
    class Game {
        constructor(petName, userName) {
            this.petName = petName;
            this.userName = userName;
            this.pet = new Pet(petName);
            this.food = [
                new Food("Apple", 5),
                new Food("Granola", 25),
                new Food("Spaghetti", 50)
            ];
            this.activities = [
                new Activity("Pet", 5),
                new Activity("Cuddle", 25),
                new Activity("Walk", 50)
            ];
            this.gameOn = true;
        }
        runGame() {
            let game = setInterval(() => {
                if (this.pet.checkEnergy() !== 0 && this.pet.isAlive && this.gameOn) {
                    this.pet.energyLevel -= 10;
                    this.pet.funLevel -= 10;
                    this.updateEnergyLevel();
                    this.updateFunLevel();
                    this.updateHappinessLevel();
                } else {                              
                    this.pet.die();
                    this.gameOver();          
                    clearInterval(game);
                }
            }, 10000);
        }
        setupGame() {
            // Call all of the setup functions here
            this.setupPet();
            this.setupFood();
            this.setupActivites();
            this.runGame();
        }
        setupPet() {
            document.getElementById('pet-name').innerText = `${this.pet.name}`;
            this.updateEnergyLevel();
            this.updateFunLevel();
            this.updateHappinessLevel();
            
            
        }
        setupFood() {
            for (let food of this.food) {
                document.getElementById(`btnFeed${food.name}`).addEventListener('click', () => 
                { 
                    this.pet.feed(food);
                    this.updateEnergyLevel();
                });
            }           
        }
        setupActivites() {
            for (let activity of this.activities) {
                document.getElementById(`btnPlay${activity.name}`).addEventListener('click', () => 
                { 
                    this.pet.play(activity);
                    this.updateFunLevel();
                });
            }   
        }
        updateEnergyLevel() {
            document.getElementById('energy-level').innerText = this.pet.checkEnergy();
            this.updateHappinessLevel();
        }
        updateFunLevel() {
            document.getElementById('fun-level').innerText = this.pet.checkFun();
            this.updateHappinessLevel();
        }
        updateHappinessLevel() {
            document.getElementById('happiness-level').innerText = this.pet.checkHappiness();
        }
        gameOver() {
            this.gameOn = false;
            alert("GAME OVER");
        }
    }
    class Pet {
        constructor(name) {
            this.name = name;
            this.energyLevel = 50;
            this.funLevel = 50;
            this.happinessLevel = 100;
            this.isAlive = true;
        }

        feed(food) {
            this.energyLevel += food.energyValue;
            if (this.energyLevel > 100) {
                this.energyLevel = 100;
            }
        }

        play(activity) {
            this.funLevel += activity.funValue;

            if (this.funLevel > 100) {
                this.funLevel = 100;
            }
        }

        checkEnergy() {
            return this.energyLevel;
        }

        checkFun() {
            return this.funLevel;
        }

        checkHappiness() {
            return Math.floor((this.energyLevel + this.funLevel)/2)
        }
        die() {
            this.isAlive = false;
        }
    }
    class Food {
        constructor(name, energyValue) {
            this.name = name;
            this.energyValue = energyValue;
        }
    }
    class Activity {
        constructor(name, funValue) {
            this.name = name;
            this.funValue = funValue;
        }
    }

    let gameOffContainer = document.getElementById('game-off'),
        gameOnContainer  = document.getElementById('game-on'),
        btnStartGame     = document.getElementById('btnStartGame'),
        btnQuitGame      = document.getElementById('btnQuitGame');

    function startGame() {
        gameOffContainer.classList.add('hide');
        gameOnContainer.classList.remove('hide');

        let theGame = new Game(
            document.getElementById('input-pet-name').value,
            document.getElementById('input-username').value
        );

        theGame.setupGame();
        btnQuitGame.addEventListener('dblclick', () => endGame(theGame));
    }

    function endGame(theGame) {
        gameOffContainer.classList.remove('hide');
        gameOnContainer.classList.add('hide');
        theGame.gameOver();
    }

    btnStartGame.addEventListener('click', startGame);
})();