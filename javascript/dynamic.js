var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var dynamicContent = urlParams.get('p');
//console.log(dynamicContent);

$(document).ready(function() {
	// Check if the URL parameter is news
	if (dynamicContent == 'news') {
		$('#news').show();
	} 
	// Check if the URL parameter is heroes
	else if (dynamicContent == 'heroes') {
		$('#heroes').show();
	}
	// Check if the URL parameter is about
	else if (dynamicContent == 'about') {
		$('#about').show();
	} 
	// Check if the URL parmeter is empty or not defined, display default content
	else {
		$('#default-content').show();
	}
});