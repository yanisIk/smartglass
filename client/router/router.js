FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',  {page: 'dashboard'});
    },
    name: 'dashboard'
});

FlowRouter.route('/weather', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',  {page: 'weatherLarge'});
    },
    name: 'weather'
});

FlowRouter.route('/news', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',  {page: 'newsLarge'});
    },
    name: 'news'
});

FlowRouter.route('/stocks', {
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',  {page: 'stocksLarge'});
    },
    name: 'stocks'
});