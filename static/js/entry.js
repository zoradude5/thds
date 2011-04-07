Entry = function(parent, json) {
	var self = this;
	this.dom = $('#orig').find('.entry').clone().prependTo(parent);
	this.text = this.dom.find('#text');
	this.childrenDom = this.dom.find('#children');
	this.children = [];
	this.reply = this.dom.find('#reply');
	this.content = this.dom.find('#content');
	this.childrenToggle = this.dom.find('#toggle_children');
	this.childrenExpanded = true;
	this.bindEvents();

	if(json) {

		this.content.text(json.content);
		if(!json.childrenExpanded) {
			this.hideChildren();
		}
		$(json.children).each(function() {
			self.addChild(this.content, this);
		});
		

	}
}

Entry.prototype.toggleChildren = function() {
	if(this.childrenExpanded)
		this.hideChildren();
	else
		this.showChildren();
}

Entry.prototype.hideChildren = function() {
	this.childrenExpanded = false;
	this.childrenDom.hide();
	this.childrenToggle.text('[+]');
}

Entry.prototype.showChildren = function() {
	this.childrenExpanded = true;
	this.childrenDom.show();
	this.childrenToggle.text('[-]');
}

Entry.prototype.bindEvents = function() {
	var self = this;
	this.dom.find('#toggle_reply').click(function() {
		self.reply.toggle();
	});
	this.dom.find('#submit').click(function() {
		if(self.text.val()) {
			self.addChild(self.text.val());
			self.showChildren();
			self.text.val("");
		}
	});
	this.childrenToggle.click(function() {
		self.toggleChildren();
	});


}

Entry.prototype.export = function() {
	var o = {}
	o.content = this.content.text();
	o.children = [];
	o.childrenExpanded = this.childrenExpanded;
	$(this.children).each(function() {
		o.children.unshift(this.export());
	});
	return o;
}

Entry.prototype.setContent = function(content) {
	this.content.text(content);
}

Entry.prototype.addChild = function(content, json) {
	var e = new Entry(this.childrenDom, json);
	e.setContent(content);
	this.children.unshift(e);
	//this.childrenToggle.text('children ('+this.children.length+')');
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
