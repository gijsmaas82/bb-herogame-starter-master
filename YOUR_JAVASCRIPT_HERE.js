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
    heroInventory.id = "heroInventory"
    heroInventory.textContent = 'Items: ' + hero.inventory[0].type
    heroStatsDisplay.appendChild(heroInventory)
}

function equipWeapon(hero) {
    
    if (hero.inventory[0]) {
        hero.weapon = hero.inventory[0]
    }
    updateStats()
    
}

function displayStats() {
    
    const heroStatsDisplay = document.getElementById('heroStats')
    const heroHealth = document.createElement('h3')
    heroHealth.textContent = 'Health: ' + hero.health + '/10'
    heroHealth.id = 'heroHealth'
    heroStatsDisplay.appendChild(heroHealth)
    const heroWeapon = document.createElement('h3')
    heroWeapon.id = 'heroWeapon'
    heroWeapon.innerHTML = 'Weapon: ' + hero.weapon.type + ' <br> Damage: ' + hero.weapon.damage
    heroStatsDisplay.appendChild(heroWeapon)
    
}

function updateStats() {
    const heroWeapon = document.getElementById('heroWeapon')
    heroWeapon.innerHTML = 'Weapon: ' + hero.weapon.type + ' <br> Damage: ' + hero.weapon.damage
    const heroInventory = document.getElementById('heroInventory')
    heroInventory.textContent = 'Items: none'

}

function startGame() {
    const startButton = document.getElementById('startButton')
    startButton.innerHTML = '<button onclick="attack()" id="attackButton">Attack!</button><button onclick="respawn()">reSpawn new hero and monster!</button>'
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
    hero.src = 'heroes/hero' + getRandomInt(3) + '.png'
    hero.style.position = 'absolute'
    hero.style.left = '40vh'
    hero.style.top = '40vh'
    hero.id = 'hero'
    gameArea.appendChild(hero)

    const monster = document.createElement('img')
    monster.alt = 'the monster'
    monster.src = 'monsters/monster' + getRandomInt(3) + '.png'
    monster.style.position = 'absolute'
    monster.style.left = '120vh'
    monster.style.top = '40vh'
    monster.id = 'monster'
    gameArea.appendChild(monster)
}

function generateWeapons() {
    const gameArea = document.getElementById('content')
    const weapon = document.createElement('img')
    weapon.alt = 'weapon'
    weapon.src = 'weapons/weapon' + getRandomInt(3) + '.png'
    weapon.style.height = '5vh'
    weapon.style.position = 'absolute'
    weapon.style.left = '50vh'
    weapon.style.top = '50vh'
    weapon.style.opacity = '0'
    weapon.id = 'weapon'
    weapon.classList.add('attack')
    gameArea.appendChild(weapon)
}

function attack() {
    const attackButton = document.getElementById('attackButton')
    attackButton.style.display = 'none'
    generateWeapons()
    const weapon = document.getElementById('weapon')
    const monster = document.getElementById('monster')
    monster.classList.add('monsterAnimation')
    if (weapon.style.left = '130vh') {
        monster.style.opacity = '0'
    }
    winOrLose()
}

function winOrLose() {

    const monster = document.getElementById('monster')
    const heroPic = document.getElementById('hero')
    hero.health = hero.health - getRandomInt(16)
    const heroHealth = document.getElementById('heroHealth')
    heroHealth.textContent = 'Health: ' + hero.health + '/10'
    if (hero.health <= 0) {
        const displayLostMessage = document.getElementById('content')
        const lostMessage = document.createElement('h2')
        lostMessage.textContent = "You have been slain by your enemy!"
        displayLostMessage.appendChild(lostMessage)
        heroPic.style.opacity = '0'
        monster.style.opacity = '1'
    } else {
        const displayWonMessage = document.getElementById('content')
        const wonMessage = document.createElement('h2')
        wonMessage.textContent = "Won! You have vanquished your enemy!"
        displayWonMessage.appendChild(wonMessage)
        heroPic.style.opacity = '1'
        monster.style.opacity = '0'
    }

}

function getRandomInt(x) {
    let number = Math.floor(Math.random() * x)
    return number
}

function respawn() {
    location.reload()
}

