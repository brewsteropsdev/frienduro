//diy down 10527401
//middle dh 11458821
//bobsled down 6140876
//outback dh 7060540




var strava = require('strava-v3');
var _ = require('underscore');
var timeformat = require('time-format-utils')
var segments = [10527401, 11458821, 6140876, 7060540];

strava.activities.get({id: 713872643},function(err,payload) {
    if(!err) {
        var sumefforts = 0
        var efforts = _.filter(payload.segment_efforts,
          function(effort){
            return _.contains(segments, effort.segment.id)
          }
        )

        _.each(efforts,
          function(effort){
            sumefforts += effort.moving_time
            console.log(effort.name + ": " + timeformat.secondsToExtHhmmss(effort.moving_time))
          }
        )
        console.log("Total effort time: " + timeformat.secondsToExtHhmmss(sumefforts))
    }
    else {
        console.log(err)
    }
});
