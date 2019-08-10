// Write your JS here
const hero = {
    name: 'Melle the Destroyer',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'kusarigama sickle and chain',
        damage: 2
    }
}

function rest(hero) {
    if (hero.health === 10) {
        alert('Dude! Your health is already at 10!!')
    } else { 
        hero.health = 10
        return hero
    }

}

function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
    displayItem() 
}

function displayItem() {
    const heroStatsDisplay = document.getElementById('heroStats')
    const heroInventory = document.createElement('h3')
    heroInventory.textContent = 'Items: ' + hero.inventory[0].type
    heroStatsDisplay.appendChild(heroInventory)
}

function equipWeapon(hero) {
    if (hero.inventory[0]) {
        hero.weapon = hero.inventory[0]
    }
}

function displayStats() {
    
    const heroStatsDisplay = document.getElementById('heroStats')
    const heroHealth = document.createElement('h3')
    heroHealth.textContent = 'Health: ' + hero.health + '/10'
    heroStatsDisplay.appendChild(heroHealth)
    const heroWeapon = document.createElement('h3')
    heroWeapon.textContent = 'Weapon: ' + hero.weapon.type
    heroStatsDisplay.appendChild(heroWeapon)
    
}

function startGame() {
    const startButton = document.getElementById('startButton')
    startButton.style.display = 'none'
    const userName = prompt('Please enter your name')
    const heroName = document.getElementById('statsTitle')
    if (userName) {
        heroName.textContent = userName + ' the Destroyer';
    } else {
        heroName.textContent = hero.name;
    }
    const gameRules = document.getElementById('gameRules')
    gameRules.style.display = 'none'
    displayStats()
    generateHeroAndMonster()
    
}

function generateHeroAndMonster () {
    const gameArea = document.getElementById('content')
    const hero = document.createElement('img')
    hero.alt = 'the hero'
    hero.src = "hero.png"
    hero.style.position = 'absolute'
    hero.style.left = '40vh'
    hero.style.top = '40vh'
    gameArea.appendChild(hero)

    const monster = document.createElement('img')
    monster.alt = 'the monster'
    monster.src = "monster.png"
    monster.classList.add('monster')
    monster.style.position = 'absolute'
    monster.style.left = '120vh'
    monster.style.top = '40vh'
    gameArea.appendChild(monster)
}

function generateWeapons() {
    const gameArea = document.getElementById('content')
    const weapon = document.createElement('img')
    weapon.alt = 'weapon'
    weapon.src = 'sword.png'
    weapon.style.height = '5vh'
    weapon.style.position = 'absolute'
    weapon.style.left = '50vh'
    weapon.style.top = '50vh'
    gameArea.appendChild(weapon)
}

function attack() {
    generateWeapons()

}



