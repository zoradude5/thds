$(function() {
	e = new Entry($('#main'));
	//e.dom.hide();
	$('#main').append(e.reply).append(e.children);
	$('#main').find('#reply').show();
	$('#main').find('#children').show();

});
