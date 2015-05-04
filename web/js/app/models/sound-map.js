define(["howler"],function(Howl){
    return Backbone.Model.extend({

        defaults : {
            "djembe-hi" : new Howl.Howl({urls: ['/sound/djembe-hi.wav']}),
            "djembe-lo" : new Howl.Howl({urls: ['/sound/djembe-lo.wav']}),
            "djembe-mid" : new Howl.Howl({urls: ['/sound/djembe-mid.wav']}),
            "agogo-hi" : new Howl.Howl({urls: ['/sound/agogo-hi.wav']}),
            "agogo-lo" : new Howl.Howl({urls: ['/sound/agogo-lo.wav']}),
            "metronome" : new Howl.Howl({urls: ['/sound/metronomeup.wav']})
        },

        initialize : function(attrs) {
            //log(Howl);
            //var a = new Howl({urls: ['/sound/djembe-hi.wav']});
            //log(a);
            //this.set("agogo-hi") = new Howl({urls:    ['/sound/agogo-hi.wav']});
            //"djembe-hi" : Howl({urls: ['/sound/djembe-hi.wav']}),
            //"djembe-lo" : new Howl({urls: ['/sound/djembe-lo.wav']}),
            //"djembe-mid" : new Howl({urls: ['/sound/djembe-mid.wav']}),
            //"agogo-hi" : new Howl({urls: ['/sound/agogo-hi.wav']}),
            //"agogo-lo" : new Howl({urls: ['/sound/agogo-lo.wav']}),
            //"metronome" : new Howl({urls: ['/sound/metronomeup.wav']})
        }
    });

});

