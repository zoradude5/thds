Entry = function(parent) {
	this.dom = $('#orig').find('.entry').clone().appendTo(parent);
	this.hiddenReply = true;
	this.bindEvents();
}

Entry.prototype.bindEvents = function() {
	var self = this;
	this.dom.find('#reply_toggle').click(function() {
		self.toggleReply();
	});
	this.dom.find('#submit').click(function() {
		self.addChild(self.dom.find('#text').val());
	});


}

Entry.prototype.setContent = function(content) {
	this.dom.find('#content').text(content);
}

Entry.prototype.addChild = function(content) {
	e = new Entry(this.dom.find('#children'));
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
