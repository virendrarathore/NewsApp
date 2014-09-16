$(function() {
var serviceURL = "http://www.app.setevent.in/news/";
var news;
$('#newsListPage').bind('pageinit', function(event) {
	getEmployeeList();
});
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
function getEmployeeList() {
var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'newsView.php?id='+id+'&page=index&callback=?', function(data) {
		$('#newsList li').remove();
		//news = data.items;
		$.each(data, function(index, news1) {
			$('#newsList').append('<li>' +
					'<img src="'+serviceURL+'img/' + news1.news_picture + '"/>' +
					'<h4>' + news1.news_title + '</h4>' +
					'<p>' + news1.news_description + '</p></li>');
		});
		
	});
}
getEmployeeList();
});
