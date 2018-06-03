// Module for items grid application
var ItemsGrid = function () {

    // members
    var client = ItemsClient("http://127.0.0.1:5000");

    // model for items
    var itemModel = function(item) {
        this.data = {};
        this.data.name = ko.observable(item.name);
        this.data.price = ko.observable(item.price);
    };

    // observable array
    var itemsList = ko.observableArray();

    // retrieve items using the client
    var retrieveItems = function () {
        console.log("Retrieving items from server ...");
        client.getItems(retrieveItemsCallBack);
    };

    // callback for when the items are retrieved from the server
    var retrieveItemsCallBack = function (data) {
        console.log(data);
        data.items.forEach(function(item) {
            itemsList.push(new itemModel(item));
        });
     };

    var init = function() {
        // initialise module
        retrieveItems();

        // apply ko bindings
        ko.applyBindings(ItemsGrid);
    };

    // execute the init function when the DOM is ready
    $(init);

    return {
        itemsList: itemsList
    };

}();