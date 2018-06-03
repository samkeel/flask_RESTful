var ItemsClient = function (url) {
    // base url for the rest service
    var baseUrl = url;

    // retrieve items
    var getItems = function(callback) {
        $.ajax({
            dataType: "json",
            url: "http://127.0.0.1:5000/items",
            type: "GET",
            success: function(result) {
                console.log("items retrieved: " + JSON.stringify(result));
                callback(result);
            }
        });
    };

    return {
        // publicly exposed members
        getItems: getItems
    }
};