define(["models/instrument"],function(InstrumentModel){
    return Backbone.Model.extend({

        defaults : {
            id : 0,
            instrument: InstrumentModel,
            sector_list: [
                {
                    wave: [] //lo,hi,mid,0  // 100 элементов
                }
            ]
        },

        initialize : function(attrs) {
        }
    });

});
