class Character {
    constructor(character) {
        this.name = character.name
        this.spec = character.spec
        this.race = character.race
        this.age = character.age
        this.str = character.str
        this.dex = character.dex
        this.const = character.const 
        this.int = character.int
        this.wis = character.wis
        this.char = character.char
        this.details = character.details
        this.user_id = character.user_id
        this.id = character.id
    }

    render() {
        return `<div class='new-character-sheet'>
        <h2 id='new-character-header'>${this.name}</h2>
        <p id='new-character-class'>Class: ${this.spec}</p>
        <p id='new-character-race'>Race: ${this.race}</p>
        <p id='new-character-age'>Age: ${this.age}</p>
        <p id='new-character-str'>Strength: ${this.str}</p>
        <p id='new-character-dex'>Dexterity: ${this.dex}</p>
        <p id='new-character-const'>Constitution: ${this.const}</p>
        <p id='new-character-int'>Intellect: ${this.int}</p>
        <p id='new-character-wis'>Wisdom: ${this.wis}</p>
        <p id='new-character-char'>Charisma: ${this.char}</p>
        <p id='new-character-details'>Level: ${this.details}</p>
        </div>`
    }

    renderAll() {
        return `<div class='character-card'>
        <h3 id='character-render-header'>${this.name}</h3>
        <h4 id='character-render-spec'>${this.spec}</h4>
        <p id='character-render-race'>Race: ${this.race}</p>
        <p id='character-render-age'>Age: ${this.age}</p>
        <p id='character-render-str'>Strength: ${this.str}</p>
        <p id='character-render-dex'>Dexterity: ${this.dex}</p>
        <p id='character-render-const'>Constitution: ${this.const}</p>
        <p id='character-render-int'>Intellect: ${this.int}</p>
        <p id='character-render-wis'>Wisdom: ${this.wis}</p>
        <p id='character-render-char'>Charisma: ${this.char}</p>
        <p id='character-render-details'>Level: ${this.details}</p>
        <button id='character-kill-btn' onclick=killCharacter(event)>Kill ${this.name}</button>
        <button id='character-res-btn' onclick=resCharacter(event)>Resurrect ${this.name}</button>
        </div>
        </br>
        </br>`
    }
}
{/* <button id='view-single-character-btn' onclick=viewSingleCharacter(event) data-character-id=${this.id}>View ${this.name}</button> */}