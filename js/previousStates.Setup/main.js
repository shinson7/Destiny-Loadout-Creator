/*
Item Class: 0 = Titan, 1 = Hunter, 2 = Warlock
Item Tier: Basic, Common, Uncommon, Rare, Legendary, Exotic
Item Buckets (Linked with Type): 
    Armor (Not a Bucket): 
        Helmet: Helmet, Helmet Engram
        Gauntlets: Gauntlets, Gauntlet Engram
        Chest Armor: Chest Armor, Chest Armor Engram
        Leg Armor: Leg Armor, Leg Armor Engram
        Class Armor: Titan Mark, Hunter Cloak, Warlock Bond, Class Item Engram
    Weapons (Not a Bucket):
        Primary Weapons: Auto Rifle, Pulse Rifle, Scout Rifle, Hand Cannon, Fusion Rifle, Primary Weapon Engram, Shotgun, Sniper Rifle
        Special Weapons: Fusion Rifle, Shotgun, Sniper Rifle, Special Weapon Engram
        Heavy Weapons: Rocket Launcher, Machine Gun, Heavy Weapon Engram
    Materials: Material, Currency, Engram
    Ships: Ship, Ship Schematic
    Vehicle: Vehicle, Message from Tess
    Emblems: Emblem
    Consumables: Vehicle Upgrade, Consumable, Currency
    Ghost: Message from Tess, Ghost Shell
*/
    var bugout = new debugout();


function Item(itemName, itemHash, itemIcon, tierTypeName, tierType, itemTypeName, itemType) {
    this.itemName = itemName;
    this.itemHash = itemHash;
    this.itemIcon = itemIcon;
    this.tierTypeName = tierTypeName;
    this.tierType = tierType;
    this.itemTypeName = itemTypeName;
    this.itemType = itemType;
}
function init() {
    var sorted = itemDefs.filter(function(item) {
        return item.itemType === 2;
    }).map(function(item) {return new Item(item.itemName, item.itemHash, item.icon, item.tierTypeName, item.tierType, item.itemTypeName, item.itemType);
    });
    sorted = JSON.stringify(sorted);
    bugout.log(sorted);
}

/*function loadImages() {
    items.forEach(function(item) {
    document.write("<IMG ALIGN='center' "+
                    "SRC='https://www.bungie.net" + item.icon + "'>");  
    });
}
     */           
init();
//loadImages();