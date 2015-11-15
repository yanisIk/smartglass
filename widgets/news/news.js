
/**
 * Collections.
 */

Headlines = new Mongo.Collection("headlines");

/**
 * Client.
 */

if (Meteor.isClient) {

  // When Headlines updates, send update to news template.
  Template.newsWidget.helpers({
    headlines: function() {
      return Headlines.find({});
    },
  });

  Template.newsLarge.helpers({
    headlines: function() {
      return Headlines.find({});
    },
  });

  Meteor.call('newsStart');
}


/**
 * Server.
 */

if (Meteor.isServer) {

  Meteor.methods({
    newsStart: function() {
      nytimes();
      // SyncedCron.start();
    }
  });
}

// Every hour, ping nyt for new headlines.
function nytimes() {
  var apiKey = 'beabcdb1445a9d428c8e67c070b8babb:19:73127967';
  var url = 'http://api.nytimes.com/svc/topstories/v1/home.json?api-key=';
  var get = Meteor.wrapAsync(HTTP.get);
  var res = get(url + apiKey);
  var content = JSON.parse(res.content);

  // Save to Collection.
  Headlines.remove({});
  for (var i = 0; i < content.results.length; i++) {
    console.log(content.results[i]);
    Headlines.insert(content.results[i]);
  }
}

function pageScroll() {

}

/**
 * Cronjob.
 */

// SyncedCron.add({
//   name: 'Get headlines',
//   schedule: function(parser) {
//     return parser.cron('0 0 0/1 1/1 * ? *');
//   },
//   job: nytimes
// });
