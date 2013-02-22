/**************************
* Application
**************************/
var Hubski = Ember.Application.create();

Hubski.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
});
/**************************
* Models
**************************/

Hubski.ApplicationController = Ember.Controller.extend();

/**************************
* Views
**************************/
Hubski.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

Hubski.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: '/'
    })
  })
})

/**************************
* Controllers
**************************/

Hubski.initialize();