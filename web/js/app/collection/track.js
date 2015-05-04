define(["models/track"],function(TrackModel){
    return Backbone.Collection.extend({
        model: TrackModel,
        bpm: 90
    })
});

