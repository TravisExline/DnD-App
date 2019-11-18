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