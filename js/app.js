var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/cat1.jpg');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);

		var count = 0;
		count++;
	};
}

ko.applyBindings(new ViewModel());