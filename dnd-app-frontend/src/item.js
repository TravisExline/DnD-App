class Item {
    constructor(item) {
        this.name = item.name
        this.category = item.category
        this.description = item.description
        this.stats = item.stats
        this.id = item.id
    }

    render() {
        return `<div class="new-item-sheet">
    <h3>${this.name}</h3>
    <p>${this.category}</p>
    <p>${this.description}</p>
    <p>${this.stats}</p>
    </div>`
    }

    renderAll() {
        return `<div id='item-card'>
        <h3 id='item-header'>${this.name}</h3>
        <p id='item-category'>${this.category}</p>
        <p id='item-description'>${this.description}</p>
        <p id='item-stats'>${this.stats}</p>
        <button class='add-item-to-character' onclick=addItemToCharacter(event) data-item-id=${this.id}>Give Away ${this.name}</button>
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
    }
}