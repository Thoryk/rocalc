const getItemDescription = (itemId) => {
    const result = itemDescriptionDb.find((el) => {
        return el.itemId == itemId
    })

    return result ? result.description : ''
}

const itemDescriptionDb = [
    {
        "itemId": 442,
        "description": `A thief exclusive ring that contains magic that increases a thief's abilities.<br>
            [Base Strength >= 90]<br>
            HIT + 10, FLEE + 10.<br>
            [Base Agility >= 90]<br>
            ATK + 10, CRIT + 10.`
    }
]
