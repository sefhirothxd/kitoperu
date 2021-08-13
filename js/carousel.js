var carousel1 = $('.carousel1'),
	currdeg = 0;

$('.siguiente').on('click', { d: 'n' }, rotate);
$('.anterior').on('click', { d: 'p' }, rotate);

function rotate(e) {
	if (e.data.d == 'n') {
		currdeg = currdeg - 60;
	}
	if (e.data.d == 'p') {
		currdeg = currdeg + 60;
	}
	carousel1.css({
		'-webkit-transform': 'rotateY(' + currdeg + 'deg)',
		'-moz-transform': 'rotateY(' + currdeg + 'deg)',
		'-o-transform': 'rotateY(' + currdeg + 'deg)',
		transform: 'rotateY(' + currdeg + 'deg)',
	});
}
