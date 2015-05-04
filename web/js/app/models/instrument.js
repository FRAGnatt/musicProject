define([],function(){
   return Backbone.Model.extend({

       defaults : {
           id : 0,
           name : "",
           sound_list: [],
           active: false
       },

       initialize : function(attrs) {
       }
   });

});
