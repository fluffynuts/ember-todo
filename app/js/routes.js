define([
], function() {
    return {
        configure: function(router) {
            router.map(function() {
                // ember library barfs unless you use this.route
                // (also, it barfs with the message that you should give 3
                // arguments, the second being an instruction to reset namespaces (?)
                // and the last a function to return the object I pass in below?!
                this.route('todos', {
                        path: '/'
                });
                // the tutorial uses this, but apparently it's deprecated
                // (hooray for out-of-date docs)
                // this.resource('todos', { path: '/' });
            });
        }
    };
})
