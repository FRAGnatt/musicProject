define(["models/instrument"],function(InstrumentModel){
    return Backbone.Collection.extend({
        model: InstrumentModel
    })
});
