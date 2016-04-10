var mySocials = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  linkedin: 'http://linkedin.com/annapetlicka',
  meetup: 'http://meetup.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'

};

var addSocialToNav = function(){
	var output = '<ul>',
		handler = document.querySelectorAll('.socialmediaicons');

	for(var key in arguments[0]){
		output += '<li><a href="' 
					+ mySocials[key] + '" alt=" icon for ' 
					+ key + '" title = "'+ key + ' " target = "_blank" ><img src="images/'+ key + '.png" /></a></li>';
	}
	output += '</ul>';

	for(var i = 0; i < handler.length ; i++ ){
		handler[i].innerHTML = output;
	};

	}(mySocials);
