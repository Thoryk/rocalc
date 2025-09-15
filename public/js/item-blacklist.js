// Filter function
const itemIdBlacklistFilter = (itemId) => {
    // item blocks
    if (itemId >= 575 && itemId <= 599) {
        return true
    }

    if (itemId >= 610 && itemId <= 612) {
        return true
    }

    if (itemId >= 614 && itemId <= 632) {
        return true
    }

    // glorious gear
    if (itemId >= 1076 && itemId <= 1115) {
        return true
    }

    // single items
    return itemIdBlacklist.find((el) => {
        return el == itemId
    }) >= 0 ? true : false
}

// Add id to blacklist
const itemIdBlacklist = [
    84,
    102,
    443,
    444,
    528,
    529,
    530,
    531,
    532,
    533,
    562,
    563,
    634,
    881,
    882
]
