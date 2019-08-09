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
}

function equipWeapon(hero) {
    if (hero.inventory[0]) {
        hero.weapon = hero.inventory[0]
    }
}
