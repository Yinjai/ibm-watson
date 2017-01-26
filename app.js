const express = require('express');
const path = require('path');
const port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;
const app = express();
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
  username: '6e9de448-9263-42e3-995b-26305462cf3a',
  password: 'PU0UoyNMaxL6',
  version_date: '2016-15-20'
});

var params = {
  // Get the content items from the JSON file.
  content_items: require('./profile.json').contentItems,
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    'accept': 'application/json'
  }
};

app.use(express.static(__dirname));

app.get('/test', function(req, res){
    personality_insights.profile(params,
      function (err, response) {
        if (err)
          console.log('error:', err);
        else{
            var str = JSON.stringify(response, null, 2);
            console.log(str);
            res.send(str);
      }
    });

})

app.listen(port);
console.log('server started');
