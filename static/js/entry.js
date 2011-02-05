Entry = function(parent) {
	this.dom = $('#orig').find('.entry').clone().prependTo(parent);
	//this.hiddenReply = true;
	//this.hiddenChildren = false;
	this.bindEvents();
	this.text = this.dom.find('#text');
	this.children = this.dom.find('#children');
	this.reply = this.dom.find('#reply');
}

Entry.prototype.bindEvents = function() {
	var self = this;
	this.dom.find('#toggle_reply').click(function() {
		self.reply.toggle();
	});
	this.dom.find('#submit').click(function() {
		if(self.text.val()) {
			self.addChild(self.text.val());
			self.children.show();
			self.text.val("");
		}
	});
	this.dom.find('#toggle_children').click(function() {
		self.children.toggle();
	});


}

Entry.prototype.setContent = function(content) {
	this.dom.find('#content').text(content);
}

Entry.prototype.addChild = function(content) {
	e = new Entry(this.children);
	e.setContent(content);
}

Entry.prototype.ztoggleChildren = function() {
	if(this.hiddenChildren) {
		this.children.show();
		this.hiddenChildren = false;
	}
	else {
		this.children.hide();
		this.hiddenChildren = true;
	}

}
Entry.prototype.ztoggleReply = function() {
	if(this.hiddenReply) {
		this.dom.find('#reply').show();
		this.hiddenReply = false;
	}
	else {
		this.dom.find('#reply').hide();
		this.hiddenReply = true;
	}

}
