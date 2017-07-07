var Twitter = require('twitter');

var keys = require("./keys.js");

//console.log("keys.js", keys);

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret,
});

//console.log(client);

client.get('statuses/user_timeline', function(error, tweets, response) {
   if(error) throw error;
   console.log(error);
   //console.log(tweets);  // The favorites. 
   var tweets = JSON.parse(response.body);
   console.log(tweets[0].text);  // Raw response object. 
  });
