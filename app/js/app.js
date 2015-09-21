define([
        'ember',
        'routes',
        'ember-data'
    ], function(Ember, Routes) {
        // Ember does not play properly with AMD )':
        // and one of the main devs, Tom Dale, is quite vocal
        // about it:
        // http://tomdale.net/2012/01/amd-is-not-the-answer/
        // pity.
        window.Todos = Ember.Application.create();
        Routes.configure(window.Todos.Router);
        return window.Todos;
});
