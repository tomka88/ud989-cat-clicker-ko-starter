var initialCats = [
   {
        clickCount : 0,
        name : 'Tabby',
        imgSrc : 'img/cat1.jpg',
        imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
        nicknames: ['Tata', 'Homie', 'Cutie', 'Tejfel', 'Grabowsky']
    },
    {
        clickCount : 0,
        name : 'Tiger',
        imgSrc : 'img/cat2.jpg',
        imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
        nicknames: ['tigris']
    },
    {
        clickCount : 0,
        name : 'Scaredy',
        imgSrc : 'img/cat3.jpg',
        imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
        nicknames: ['felelmes']
    },
    {
        clickCount : 0,
        name : 'Shadow',
        imgSrc : 'img/cat4.jpg',
        imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559',
        nicknames: ['arnyek']

    },
    {
        clickCount : 0,
        name : 'Sleepy',
        imgSrc : 'img/cat5.jpg',
        imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
        nicknames: ['almi']
    }
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

	this.level = ko.computed(function() {
        var level;
        var clicks = this.clickCount();

        if (clicks < 10) {
        	level = 'newborn';
        } else if ( clicks < 50) {
        	level = 'infant';
        } else if (clicks < 100) {
        	level = 'child';
        } else {
        	level = 'ninja';
        }
        return level;
    }, this);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray ([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	};

};

ko.applyBindings(new ViewModel());