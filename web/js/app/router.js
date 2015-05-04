define(["template/precompiled.handlebars"],function (Templates) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            "(#)(/)": "mainPage"
        },

        initialize: function () {
            //User.bind("logout", this.mainPageInit, this);
        },

        mainPage: function () {
           require(["views/main"],function(mainView){
               mainView.render();
           })
        }
    });
    var initialize = function() {
        var router = new AppRouter();
        Backbone.history.start();
    };
    return{
        initialize: initialize
    }
});