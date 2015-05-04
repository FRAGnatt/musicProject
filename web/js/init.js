requirejs.config({
    baseUrl: '/js/app/',
    paths: {
        jquery:     "../lib/jquery-2.1.3.min",
        lodash:     "../lib/lodash",
        backbone:   "../lib/backbone",
        howler:     "../lib/howler",
        handlebars: "../lib/handlebars-v3.0.3"
    },
    map: {
        "*": {
            "underscore": "lodash"
        }
    },
    shim: {
        'handlebars': {
                'exports': 'Handlebars'
        }
    }
});
window.log = function(first,second){
    if (first && second){
        console.log(first,second);
    } else {
        console.log(first);
    }
};
require(['jquery','backbone','lodash', "handlebars"],function($,Backbone,_,Handlebars){
    Handlebars.registerHelper("debug", function(optionalValue) {
        console.log("Current Context");
        console.log("====================");
        console.log(this);
        if (optionalValue) {
            console.log("Value");
            console.log("====================");
            console.log(optionalValue);
        }
    });
    Handlebars.registerHelper("counter", function (index){
        return index + 1;
    });
    require(["router"],function(App){
        App.initialize();
    })
});

