/**************************
* Application
**************************/
var Hubski = Em.Application.create();

Hubski.Router = Em.Router.extend({
  root: Em.Route.extend({
    index: Em.Route.extend({
      route: '/'
    })
  })
});
/**************************
* Models
**************************/



/**************************
* Views
**************************/

Hubski.LoadView = Em.View.extend({
    templateName: 'loadButton',
    click: function(evt) {
        urlControler.loadUrl();
    }
})

/**************************
* Controllers
**************************/

Hubski.ApplicationController = Em.Controller.extend();

Hubski.urlControler = Em.ArrayControler.create({
    content = [],
    loadUrl: function() {
        var me = this;
        var url = 'http://hubski.com';

        $.get(url, function(data) {
            $('.result').html(data);
            alert('Load was performed.');
        });
    }
})

/**************************
* Initialization
**************************/
Hubski.initialize();