// profileCtrl.js
var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];

module.exports = {
    getFriendsProfiles: function(req, res, next){
        var arr = [];
        var user = req.session.currentUser;
        // NESTED FOR LOOP: looking through my users array THEN through my profiles array and finding the matching parameters.
        for(var i in user.friends){
            for(var j in profiles){
                if(user.friends[i] === profiles[j].name){
                    arr.push(profiles[j].name);
                }
                
            }
        }
            res.send({
                currentUser: user,
                friends: arr
            })
    }
}