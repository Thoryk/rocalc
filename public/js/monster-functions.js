// helper funktion für die hit berechnung
const calculateMonsterHit95 = (baseLevel, agi) => {
    return 20 + baseLevel + agi
}

// helper funktion für die flee berechnung
const calculateMonsterFlee95 = (baseLevel, dex) => {
    return 75 + baseLevel + dex
}

// helper function for initial conversion
// save console output to a file, put it into jsonlint and paste update the variable monsterDb below
const convertToMonsterDbJSON = (monsterObj) => {
    const monsterList = [];

    monsterObj.forEach(monster => {
        monsterList.push({
            'id': monster[0],
            'name': monster[1],
            'raceId': monster[2],
            'elementId': monster[3],
            'sizeId': monster[4],
            'baseLevel': monster[5],
            'hp': monster[6],
            'vit': monster[7],
            'agi': monster[8],
            'int': monster[9],
            'dex': monster[10],
            'luk': monster[11],
            'minAtk': monster[12],
            'maxAtk': monster[13],
            'def': monster[14],
            'mDef': monster[15],
            'baseExp': monster[16],
            'jobExp': monster[17],
            'empty': monster[18],
            'monstertype': monster[19],
            'isRanged': monster[20],
            'hit95': calculateMonsterHit95(monster[5], monster[8]),
            'flee95': calculateMonsterFlee95(monster[5], monster[10])
        })
    })

    console.log(JSON.stringify(monsterList))
}

// function to convert the monsterDb to the MonsterOBJ 
const convertToMonsterOBJ = (database) => {
    const result = [];

    database.forEach(monster => {
        let monsterArray = []

        monsterArray.push(monster.id)
        monsterArray.push(monster.name)
        monsterArray.push(monster.raceId)
        monsterArray.push(monster.elementId)
        monsterArray.push(monster.sizeId)
        monsterArray.push(monster.baseLevel)
        monsterArray.push(monster.hp)
        monsterArray.push(monster.vit)
        monsterArray.push(monster.agi)
        monsterArray.push(monster.int)
        monsterArray.push(monster.dex)
        monsterArray.push(monster.luk)
        monsterArray.push(monster.minAtk)
        monsterArray.push(monster.maxAtk)
        monsterArray.push(monster.def)
        monsterArray.push(monster.mDef)

        // arcadia online exp rates
        if(monster.id == 484) {
            // anubis has 3x
            monsterArray.push(monster.baseExp * 3)
            monsterArray.push(monster.jobExp * 3)
        } else if(monster.id < 557) {
            // regular monsters 5x
            monsterArray.push(monster.baseExp * 5)
            monsterArray.push(monster.jobExp * 5)
        } else {
            // arcadia specific monsters are already 5x in the monster database
            monsterArray.push(monster.baseExp)
            monsterArray.push(monster.jobExp)
        }

        monsterArray.push(undefined)
        monsterArray.push(monster.monstertype)
        monsterArray.push(monster.isRanged)
        monsterArray.push(monster.hit95)
        monsterArray.push(monster.flee95)

        result.push(monsterArray)
    })

    return result
}

// function to create the sorting array
const createMonsterSortingArray = (database) => {
    const result = []

    const sortedDatabase = database.toSorted((a, b) => {
        if(a.name < b.name) { 
            return -1; 
        }
        if(a.name > b.name) { 
            return 1; 
        }
        return 0;
    })

    sortedDatabase.forEach((monster) => {
        result.push(monster.id)
    })
    result.push('N')

    return result
}

// test function to push a new monster to the database during runtime
const pushNewMonsterTest = () => {
    monsterDb.push(
        {
            "id": monsterDb.length,
            "name": "Thoryk Monster",
            "raceId": 9,
            "elementId": 42,
            "sizeId": 2,
            "baseLevel": 99,
            "hp": 100000,
            "vit": 99,
            "agi": 99,
            "int": 99,
            "dex": 99,
            "luk": 99,
            "minAtk": 1000,
            "maxAtk": 2000,
            "def": 50,
            "mDef": 50,
            "baseExp": 10000,
            "jobExp": 10000,
            "monstertype": 0,
            "isRanged": 0,
            "hit95": calculateMonsterHit95(99, 99),
            "flee95": calculateMonsterFlee95(99, 99)
        }
    )

    MonsterOBJ = convertToMonsterOBJ(monsterDb)
    EnemyNum = MonsterOBJ.length -1;
    MonsterABC = createMonsterSortingArray(monsterDb)
    EnemySort()
}
