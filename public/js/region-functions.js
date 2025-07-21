// helper to convert to region array to the db variant
const createRegionDbJSON = () => {
    const result = []

    tiiki.forEach((region, index) => {
        result.push({
            "id": index,
            "name": region
        })
    })

    console.log(JSON.stringify(result))
}

// helper to add the region to the monster
const updateMonsterDbWithRegions = () => {

    monsterDb.forEach((monster) => {
        monster.regionIds = []

        MonMap.forEach((row, rowIndex) => {
            // skip first row -> all regions
            if(rowIndex > 0 & row.indexOf(monster.id) > -1) {
                 monster.regionIds.push(rowIndex)
            }
        })
    })

    console.log(JSON.stringify(monsterDb))
}

const createFlatRegionNameArray = (regionDb) => {
    return regionDb.map((region) => {
        return region.name
    })
}

const createMonMapArray = (monsterDb, regionDb) => {
    const result = []

    // all regions
    result.push([0])

    // init the array
    regionDb.forEach((el, index) => {
        if(index != 0) {
            result.push([])
        }
    })

    // loop over the monster db and fill the data
    monsterDb.forEach((monster) => {
        monster.regionIds.forEach((regionId) => {
            result[regionId].push(monster.id)
        })
    })

    // add "N" string, except for the first element
    result.forEach((row, index) => {
        if(index > 0) {
            row.push("N")
        }
    })

    return result
}