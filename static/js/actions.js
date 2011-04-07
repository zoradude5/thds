var key = 'store';

$(function() {
	var s = localStorage.getItem(key);
	var json;
	if(s)
		json = JSON.parse(s);
	e = new Entry($('#main'), json);
	//e.dom.hide();
	$('#main').append(e.reply).append(e.childrenDom);
	$('#main').find('#reply').show();
	$('#main').find('#children').show();
	$(window).unload(function() {
		localStorage.setItem(key,JSON.stringify(e.export()));
	});
});
