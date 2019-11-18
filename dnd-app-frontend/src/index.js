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
    .then(newUser => {
        currentUser = newUser
        localStorage.currentUser = newUser.id
        const userObj =  new User(newUser)
        hideSignInForm()
        showAllCharactersBtn()
        showCharacterCreationBtn()
        showAllItemsBtn()
        showItemCreationBtn()
        showLogoutBtn()
        userGreeting.innerText = userObj.render()
    })
})

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
    .then(newCharacter => {
        const character = new Character(newCharacter)
        hideCharacterForm()
        hideDiceRoll()
        hideDiceBtn()
        showMainBtn()
        showNewCharacter()
        newCharacterPage.innerHTML = character.render()
    })
})

function fetchCharacters() {
    fetch(charactersURL)
    .then(res => res.json())
    .then(characters => renderCharacters(characters))
}

function renderCharacters(characters) {
    allCharactersPage.innerHTML=" "
    characters.sort(function(characterOne, characterTwo){
        return characterOne.name.localeCompare(characterTwo.name)
    })
    characters.forEach(character => {
        if(character.user_id === currentUser.id) {
        let characterObj = new Character(character)
        allCharactersPage.innerHTML += characterObj.renderAll()
        }
    })
    hideResBtn()
}

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
    .then(item => {
        const itemObj = new Item(item)
        hideItemForm()
        showNewItem()
        newItemPage.innerHTML = itemObj.render()
    })
})

function fetchItems() {
    fetch(itemsURL)
    .then(res => res.json())
    .then(items => renderItems(items))
}

function renderItems(items) {
    allItemsPage.innerHTML = " "
    items.forEach(item => {
        let itemObj = new Item(item)
        allItemsPage.innerHTML += itemObj.renderAll()
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
