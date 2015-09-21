(function() {
        var libBase = '../bower_components';
        var lib = function(rel) {
            return [libBase, rel].join('/');
        };
        requirejs.config({
                baseUrl: 'js',
                paths: {
                    'jquery': lib('jquery/dist/jquery.min'),
                    'ember': lib('ember/ember.debug'),
                    'handlebars': lib('handlebars/handlebars'),
                    'ember-template-compiler': lib('ember/ember-template-compiler'),
                    'ember-data': lib('ember-data/ember-data')
                },
                map: {
                    '*': { 'jquery': 'jquery-private' },
                    'ember': { 'jquery': 'jquery' } // interesting: ember requires access to the real jquery
                },
                shim: {
                    'ember': {
                        deps: [ 'jquery', 'handlebars', 'ember-template-compiler' ],
                        exports: 'Ember'
                    },
                    'ember-data': {
                        deps: ['ember']
                    }
                }
        });
})();

