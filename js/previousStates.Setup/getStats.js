var bugout = new debugout();
var newItems = [];
function Item(itemName, itemHash, itemIcon, tierTypeName, tierType, itemTypeName, itemType, data) {
    this.itemName = itemName;
    this.itemHash = itemHash;
    this.itemIcon = itemIcon;
    this.tierTypeName = tierTypeName;
    this.tierType = tierType;
    this.itemTypeName = itemTypeName;
    this.itemType = itemType;
    this.chargeRate = parseInt(data.query.results.div[0].div[2].content);
    this.impact = parseInt(data.query.results.div[1].div[2].content);
    this.range = parseInt(data.query.results.div[2].div[2].content);
    this.stability = parseInt(data.query.results.div[3].div[2].content);
    this.reload = parseInt(data.query.results.div[4].div[2].content);
    this.magazine = parseInt(data.query.results.div[5].div[1].content);
    return this;
}

$(function () {
    var t = $('#content').empty();
    items.forEach(function createQuery(item) {
        var url = "url='www.destinydb.com/items/" + item.itemHash.toString() + "'";
        var statement = "select * from html where " + url + "and xpath='//div[@class=\"box\"]'";
        $.queryYQL(statement, "json", undefined, function (data) {
            var tempItems = new Item(item.itemName, item.itemHash, item.itemIcon, item.tierTypeName, item.tierType, item.itemTypeName, item.itemType, data);
            bugout.log(tempItems);
            bugout.log(",");
            newItems.push(tempItems);
        });
    });
});
/*

// Construct your query:
var query = "select * from html where url='http://en.wikipedia.org/wiki/Yahoo' and xpath='//table/*[contains(.,'Founder')]//a'";

// Define your callback:
var callback = function(data) {
    console.log(data.query.results.a[0].class);
};

// Instantiate with the query:
var firstFeedItem = new YQLQuery(query, callback);

// If you're ready then go:
firstFeedItem.fetch(); // Go!!

console.log(callback);

/*
items.forEach(function createQuery(items) {
var url = "url='www.destinydb.com/items/" + items.itemHash.toString() + "'";
var query = "select * from html where " + url + "and xpath='//div[@class='stat-bar']'";

// Define your callback:
var callback = function(data) {
    console.log(data);
};

// Instantiate with the query:
var firstFeedItem = new YQLQuery(query, callback);

// If you're ready then go:
firstFeedItem.fetch(); // Go!!
});
*/