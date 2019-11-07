const baseURL = "http://localhost:3000"
const usersURL = `${baseURL}/users`
const charactersURL = `${baseURL}/characters`
const itemsURL = `${baseURL}/items`
const characterItemsURL = `${baseURL}/character_items`

const logoutBtn = document.querySelector('#logout-btn')

const mainBtn = document.querySelector('#main-btn')

const characterForm = document.querySelector('.character-form')
const characterCreationBtn = document.querySelector('#character-creation-page-btn')
const newCharacterPage = document.querySelector('.new-character-page')
const characterName = document.querySelector('#character-name')
const characterClass = document.querySelector('#character-spec')
const characterRace = document.querySelector('#character-race')
const characterAge = document.querySelector('#character-age')
const characterStrength = document.querySelector('#character-str')
const characterDexterity = document.querySelector('#character-dex')
const characterConstitution = document.querySelector('#character-const')
const characterIntellect = document.querySelector('#character-int')
const characterWisdom = document.querySelector('#character-wis')
const characterCharisma = document.querySelector('#character-char')
const characterDetails = document.querySelector('#character-details')
const allCharactersBtn = document.querySelector('#see-all-characters-btn')
const allCharactersPage = document.querySelector('.all-characters-page')
const characterKillBtn = document.querySelector('#character-kill-btn')
const characterResBtn = document.querySelector('#character-res-btn')
const singleCharacterPage = document.querySelector('.single-character-page')
const singleCharacterBtn = document.querySelector('#view-single-character-btn')

const itemCreationBtn = document.querySelector('#item-creation-button')
const allItemsBtn = document.querySelector('#see-all-items-btn')
const allItemsPage = document.querySelector('.all-items-page')
const itemForm = document.querySelector('.item-form')
const itemName = document.querySelector('#item-name')
const itemCategory = document.querySelector('#item-category')
const itemDescription = document.querySelector('#item-description')
const itemStats = document.querySelector('#item-stats')
const newItemPage = document.querySelector('.new-item-page')

const signInForm = document.querySelector('.sign-in-form')
const signInName = document.querySelector('#user-sign-in-name')
const signInEmail = document.querySelector('#user-sign-in-email')
const userGreeting = document.querySelector('.user-greeting')

const diceRoll = document.querySelector('#dice-roll')
const diceBtn = document.querySelector('#dice-btn')

const itemCard = document.getElementsByClassName('.item-card')

document.addEventListener('DOMContentLoaded', initialLoad())

function initialLoad(e) {
    hideCharacterForm()
    hideCharacterCreationBtn()
    hideAllCharactersBtn()
    hideMainBtn()
    hideItemForm()
    hideAllItemsBtn()
    hideAllItems()
    hideItemCreationBtn()
    hideLogoutBtn()
    hideDiceBtn()
    hideDiceRoll()
    hideSingleCharacter()
}

function hideLogoutBtn() {
    logoutBtn.style.display = 'none'
}

function showLogoutBtn() {
    logoutBtn.style.display = ""
}

function showMainBtn() {
    mainBtn.style.display = ""
}

function hideMainBtn() {
    mainBtn.style.display = 'none'
}

function hideAllCharactersBtn() {
    allCharactersBtn.style.display = 'none'
}

function showAllCharactersBtn() {
    allCharactersBtn.style.display = ""
}

function hideAllCharacters() {
    allCharactersPage.style.display = 'none'
}

function showAllCharacters() {
    allCharactersPage.style.display = ""
}

function hideCharacterCreationBtn() {
    characterCreationBtn.style.display = 'none'
}

function showCharacterCreationBtn() {
    characterCreationBtn.style.display = ""
}

function hideCharacterForm() {
    characterForm.style.display = 'none'
}

function showCharacterForm() {
    characterForm.style.display = ""
}

function hideNewCharacter() {
    newCharacterPage.style.display = 'none'
}

function showNewCharacter() {
    newCharacterPage.style.display = ""
}

function hideSignInForm() {
    signInForm.style.display = 'none'
}

function hideUserGreeting() {
    userGreeting.style.display = 'none'
}

function showUserGreeting() {
    userGreeting.style.display = ""
}

function hideItemForm() {
    itemForm.style.display = 'none'
}

function showItemForm() {
    itemForm.style.display = ""
}

function hideNewItem() {
    newItemPage.style.display = 'none'
}

function showNewItem() {
    newItemPage.style.display = ""
}

function hideItemCreationBtn() {
    itemCreationBtn.style.display = 'none'
}

function showItemCreationBtn() {
    itemCreationBtn.style.display = ""
}

function hideAllItemsBtn() {
    allItemsBtn.style.display = 'none'
}

function showAllItemsBtn() {
    allItemsBtn.style.display = ""
}

function showAllItems() {
    allItemsPage.style.display = ""
}

function hideAllItems() {
    allItemsPage.style.display = 'none'
}

function hideKillBtn() {
    characterKillBtn.style.display = 'none'
}

function showKillBtn() {
    characterKillBtn.style.display = ""
}

function hideResBtn() {
    document.querySelectorAll('#character-res-btn').forEach(button => {
        button.style.display = "none"
    })
}

function hideDiceBtn() {
    diceBtn.style.display = 'none'
}

function showDiceBtn() {
    diceBtn.style.display = ""
}

function hideDiceRoll() {
    diceRoll.style.display = 'none'
}

function showDiceRoll() {
    diceRoll.style.display = ""
}

function showResBtn() {
    characterResBtn.style.display = ""
}


function hideSingleCharacter() {
    singleCharacterPage.style.display = "none"
}

function showSingleCharacter() {
    singleCharacterPage.style.display = ""
}

logoutBtn.addEventListener('click', () => {
    localStorage.clear(currentUser)
    window.location.reload()
})

signInForm.addEventListener('submit', function(e) {
    e.preventDefault()
    fetch(usersURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: signInName.value,
            email: signInEmail.value
        })
    })
    .then(res => res.json())
    .then(function(newUser) {
        currentUser = newUser
        localStorage.currentUser = newUser.id
        renderCurrentUser()
        hideSignInForm()
    })
})

function renderCurrentUser() {
    userGreeting.innerText = " "
    userGreeting.innerText = `Welcome, ${currentUser.name}`
    showAllCharactersBtn()
    showCharacterCreationBtn()
    showAllItemsBtn()
    showItemCreationBtn()
    showLogoutBtn()
}

itemCreationBtn.addEventListener('click', function() {
    hideItemCreationBtn()
    hideAllItems()
    hideUserGreeting()
    hideAllCharacters()
    hideNewCharacter()
    hideCharacterForm()
    hideNewItem()
    hideDiceRoll()
    hideDiceBtn()
    hideSingleCharacter()
    showCharacterCreationBtn()
    showAllItemsBtn()
    showAllCharactersBtn()
    showMainBtn()
    showItemForm()
})

allItemsBtn.addEventListener('click', function() {
    hideUserGreeting()
    hideAllItemsBtn()
    hideCharacterForm()
    hideItemForm()
    hideNewCharacter()
    hideAllCharacters()
    hideNewItem()
    hideDiceRoll()
    hideDiceBtn()
    hideSingleCharacter()
    showMainBtn()
    showAllCharactersBtn()
    showCharacterCreationBtn()
    showItemCreationBtn()
    showAllItems()
    fetchItems()
})

characterCreationBtn.addEventListener('click', function() {
    hideUserGreeting()
    hideAllItems()
    hideCharacterCreationBtn()
    hideAllCharacters()
    hideItemForm()
    hideNewItem()
    hideSingleCharacter()
    showMainBtn()
    showDiceBtn()
    showDiceRoll()
    showItemCreationBtn()
    showAllItemsBtn()
    showAllCharactersBtn()
    showCharacterForm()
})

allCharactersBtn.addEventListener('click', function() {
    hideAllCharactersBtn()
    hideUserGreeting()
    hideCharacterForm()
    hideNewCharacter()
    hideItemForm()
    hideAllItems()
    hideNewItem()
    hideDiceRoll()
    hideDiceBtn()
    hideSingleCharacter()
    showAllCharacters()
    showCharacterCreationBtn()
    showItemCreationBtn()
    showMainBtn()
    showAllItemsBtn()
    fetchCharacters()
})

mainBtn.addEventListener('click', function() {
    hideNewCharacter()
    showAllCharactersBtn()
    hideAllCharacters()
    hideMainBtn()
    hideCharacterForm()
    hideItemForm()
    hideAllItems()
    hideNewItem()
    hideDiceRoll()
    hideDiceBtn()
    hideSingleCharacter()
    showAllItemsBtn()
    showItemCreationBtn()
    showUserGreeting()
    showCharacterCreationBtn()
})

characterForm.addEventListener('submit', function(e) {
    e.preventDefault()
    fetch(charactersURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: characterName.value,
            spec: characterClass.value,
            race: characterRace.value,
            age: characterAge.value,
            str: characterStrength.value,
            dex: characterDexterity.value,
            const: characterConstitution.value,
            int: characterIntellect.value,
            wis: characterWisdom.value,
            char: characterCharisma.value,
            details: characterDetails.value,
            user_id: currentUser.id
        })
    })
    .then(res => res.json())
    .then(function(newCharacter) {
        currentCharacter = newCharacter
        hideCharacterForm()
        hideDiceRoll()
        hideDiceBtn()
        showMainBtn()
        showNewCharacter()
        displayNewCharacter()
    })
})

function displayNewCharacter() {
    if(currentCharacter) {
        let id = currentCharacter.id
        fetch(charactersURL + "/" + id)
        .then(res => res.json())
        .then(function(res) {
            currentCharacter = res
            renderNewCharacter()
        })
    }
}

function renderNewCharacter() {
    newCharacterPage.innerHTML = " "
    newCharacterPage.innerHTML = `<div class='new-character-sheet'>
    <h2 id='new-character-header'>${currentCharacter.name}</h2>
    <p id='new-character-class'>Class: ${currentCharacter.spec}</p>
    <p id='new-character-race'>Race: ${currentCharacter.race}</p>
    <p id='new-character-age'>Age: ${currentCharacter.age}</p>
    <p id='new-character-str'>Strength: ${currentCharacter.str}</p>
    <p id='new-character-dex'>Dexterity: ${currentCharacter.dex}</p>
    <p id='new-character-const'>Constitution: ${currentCharacter.const}</p>
    <p id='new-character-int'>Intellect: ${currentCharacter.int}</p>
    <p id='new-character-wis'>Wisdom: ${currentCharacter.wis}</p>
    <p id='new-character-char'>Charisma: ${currentCharacter.char}</p>
    <p id='new-character-details'>Level: ${currentCharacter.details}</p>
    </div>`
}

function fetchCharacters() {
    fetch(charactersURL)
    .then(res => res.json())
    .then(characters => renderCharacters(characters))
}

function renderCharacters(characters) {
    allCharactersPage.innerHTML=" "
    characters.forEach(character => {
        allCharactersPage.innerHTML += `<div class='character-card'>
        <h3 id='character-render-header'>${character.name}</h3>
        <h4 id='character-render-spec'>${character.spec}</h4>
        <p id='character-render-race'>Race: ${character.race}</p>
        <p id='character-render-age'>Age: ${character.age}</p>
        <p id='character-render-str'>Strength: ${character.str}</p>
        <p id='character-render-dex'>Dexterity: ${character.dex}</p>
        <p id='character-render-const'>Constitution: ${character.const}</p>
        <p id='character-render-int'>Intellect: ${character.int}</p>
        <p id='character-render-wis'>Wisdom: ${character.wis}</p>
        <p id='character-render-char'>Charisma: ${character.char}</p>
        <p id='character-render-details'>Level: ${character.details}</p>
        <button id='character-kill-btn' onclick=killCharacter(event)>Kill ${character.name}</button>
        <button id='character-res-btn' onclick=resCharacter(event)>Resurrect ${character.name}</button>
        <button id='view-single-character-btn' onclick=viewSingleCharacter(event) data-character-id=${character.id}>View ${character.name}</button>
        </div>
        </br>
        </br>`
    })
    hideResBtn()
}

//404 error:  routingerror for /characters/:id?????
// should this actually be going to characterItemsURL to be able to display the characters's items?
// function viewSingleCharacter(event) {
//     let characterId = event.target.dataset.characterId
//     debugger
//     fetch(charactersURL + "/" + characterId, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//             Allow: "application/json"
//         },
//         body: JSON.stringify({
//             name: currentUser.characters[characterId - 1].name,
//             spec: currentUser.characters[characterId - 1].spec,
//             race: currentUser.characters[characterId - 1].race,
//             age: currentUser.characters[characterId - 1].age,
//             str: currentUser.characters[characterId - 1].str,
//             dex: currentUser.characters[characterId - 1].dex,
//             const: currentUser.characters[characterId - 1].const,
//             int: currentUser.characters[characterId - 1].int,
//             wis: currentUser.characters[characterId - 1].wis,
//             char: currentUser.characters[characterId - 1].char,
//             details: currentUser.characters[characterId - 1].details,
//             user_id: currentUser.id,
//         })
//     })
//     .then(res => res.json())
//     .then(function(character) {
//         currentCharacter = character
//         hideAllCharacters()
//         showAllCharactersBtn()
//     })
// }


function killCharacter(event) {
    event.target.parentElement.style.backgroundImage = `url('C:/Users/Ellyn/Desktop/Dead/deceased.png')`
    event.target.parentElement.style.backgroundRepeat = 'no-repeat'
    event.target.parentElement.style.backgroundPosition = 'center'
    event.target.parentElement.style.backgroundSize = '500px 500px'
    event.target.style.display = 'none'
    event.target.parentElement.querySelector('#character-res-btn').style.display = ""
}

function resCharacter(event) {
    event.target.parentElement.style.background = "none"
    event.target.style.display = 'none'
    event.target.parentElement.querySelector('#character-kill-btn').style.display = ""
}

itemForm.addEventListener('submit', function(e) {
    e.preventDefault()
    fetch(itemsURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: itemName.value,
            category: itemCategory.value,
            description: itemDescription.value,
            stats: itemStats.value
        })
    })
    .then(res => res.json())
    .then(function(newItem) {
        currentItem = newItem
        hideItemForm()
        displayNewItem()
    })
})

function displayNewItem() {
    let id = currentItem.id
    if(currentItem)
    fetch(itemsURL + "/" + id)
    .then(res => res.json())
    .then(function(res) {
        currentItem = res
        showNewItem()
        renderCurrentItem()
    })
}

function renderCurrentItem() {
    newItemPage.innerHTML = ""
    newItemPage.innerHTML = `<div class="new-item-sheet">
    <h3>${currentItem.name}</h3>
    <p>${currentItem.category}</p>
    <p>${currentItem.description}</p>
    <p>${currentItem.stats}</p>
    </div>`
}

function fetchItems() {
    fetch(itemsURL)
    .then(res => res.json())
    .then(items => renderItems(items))
}

function renderItems(items) {
    allItemsPage.innerHTML = " "
    items.forEach(item => {
        allItemsPage.innerHTML += `<div id='item-card'>
        <h3 id='item-header'>${item.name}</h3>
        <p id='item-category'>${item.category}</p>
        <p id='item-description'>${item.description}</p>
        <p id='item-stats'>${item.stats}</p>
        <button class='add-item-to-character' onclick=addItemToCharacter(event) data-item-id=${item.id}>Give Away ${item.name}</button>
        <div class='dropdown-options'>
            <div class="character-select-criteria">
                <strong><label for="select-character">To Which Character?</label><strong>
                <select class='character-options' name='character-select-options'>
                </select>
            </div>
        </div>
        </br>
        </br>
        </div>`
        currentUser.characters.map(character => {
            let select = document.getElementsByClassName('character-options')
            let option = document.createElement('option')
            for(var i = 0; i < select.length; i++) {
                option.value = `${character.id}`
                option.innerHTML = `${character.name}`
                select[i].appendChild(option)
            }
        })
    })
}



function addItemToCharacter(event) {
    characterId = event.target.parentElement.querySelector('.character-options').value
    fetch(characterItemsURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Allow: "application/json"
        },
        body: JSON.stringify({
            character_id: characterId,
            item_id: event.target.dataset.itemId
        }),
    })
    .then(res => res.json())
    .then(res => {
        currentCharacter = res
        let character_items = currentCharacter.character_items
        let items = character_items.map((character_items) => {
            return character_items.item
        })
        renderSingleCharacter(items, currentCharacter)
    })
}

function renderSingleCharacter(items, currentCharacter) {
    singleCharacterPage.innerHTML = " "
    singleCharacterPage.innerHTML = `<div id='character-section'>
        <h2 id='single-character-header'>${currentCharacter.name}</h2>
    <p id='single-character-class'>${currentCharacter.spec}</p>
    <p id='single-character-race'>${currentCharacter.race}</p>
    <p id='single-character-age'>Age: ${currentCharacter.age}</p>
    <p id='single-character-str'>Strength: ${currentCharacter.str}</p>
    <p id='single-character-dex'>Dexterity: ${currentCharacter.dex}</p>
    <p id='single-character-const'>Constitution: ${currentCharacter.const}</p>
    <p id='single-character-int'>Intellect: ${currentCharacter.int}</p>
    <p id='single-character-wis'>Wisdom: ${currentCharacter.wis}</p>
    <p id='single-character-char'>Charisma: ${currentCharacter.char}</p>
    <p id='single-character-details'>${currentCharacter.details}</p>
    </div>`
    items.forEach((item) => {
        singleCharacterPage.innerHTML += `<div id='item-section'>
        <h4 id='item-name'>${item.name}</h4>
        </div>`
    })
    showSingleCharacter()
    hideAllCharacters()
    hideAllItems()
}


diceBtn.addEventListener('click', function() {
    rollDice()
})

function rollDice() {
    let randomNum = Math.floor(Math.random() * (19 - 6) + 6) 
    diceRoll.innerHTML = " " 
    diceRoll.innerHTML = `${randomNum}`
}