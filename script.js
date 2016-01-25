var rows = 16;
var columns = 16;
var r = 225;
var g = 225;
var b = 225;
var rColor = 'rgb(150, 150, 150)';

$(document).ready(function() {
	makeTable();
	$('button').click(function() {
		clearTable();
		rows = prompt('How many rows and columns?');
		columns = rows;
		makeTable();
	});
});

function makeTable() {
	for (j=0; j<rows; j++) {
		for (i=0; i<columns; i++) {
			$('#container').append('<div id="grid"></div>');
		};
		$('#container').append('<br/>');
	};
	trails();
};

function clearTable() {
	$('div > #grid').remove();
	$('div > br').remove();
}

function trails() {
	$('div > #grid').mouseenter(function() {
		rColor = randColor();
		$(this).css('background-color', rColor);
	});
}

function randColor() {
	r = Math.floor((Math.random() * 225) + 1);
	g = Math.floor((Math.random() * 225) + 1);
	b = Math.floor((Math.random() * 225) + 1);
	return 'rgb('+r+', '+g+', '+b+')';
}