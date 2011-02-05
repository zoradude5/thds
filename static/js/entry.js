Entry = function(parent) {
	this.dom = $('#orig').find('.entry').clone().appendTo(parent);
	this.hiddenReply = true;
}

Entry.prototype.bindEvents = function() {
	this.dom.find('#reply_toggle').click(function() {
		this.dom.find('#reply').
	});
	this.dom.find('submit').click(function() {
		this.addChild(this.dom.find('#text').text());
	});


}

Entry.prototype.setContent = function(content) {
	this.dom.find('content').setText(content);
}

Entry.prototype.addChild = function(content) {
	e = new Entry(this.dom);
	e.setContent(content);
}

Entry.prototype.toggleReply = function() {
	if(this.hiddenReply) {
		this.dom.find('#reply').show();
		this.hiddenReply = false;
	}
	else {
		this.dom.find('#reply').hide();
		this.hiddenReply = true;
	}

}
