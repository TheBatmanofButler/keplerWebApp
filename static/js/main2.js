var $container = $('#grid-wrapper').packery({
	columnWidth: '#likelihood-plot-pl-panel',
	rowHeight: '#likelihood-plot-pl-panel',
});

$container.find('.draggable').each( function( i, itemElem ) {
	// make element draggable with Draggabilly
	console.log($.type(itemElem));
	var draggie = new Draggabilly( itemElem );
	// bind Draggabilly events to Packery
	$container.packery( 'bindDraggabillyEvents', draggie );
});

function removeFromGrid(liObj) {
	$divObj = $('#' + liObj.id + '-panel');

	if ($divObj.length){
		$container.packery('remove', $divObj);
	}
	else {
		$container.packery('addItems', gg);
	}
	$container.packery();
}

$('#show-hide').click( function() {

});

$('#submit').click( function() {
	$('#hiddenSubmit').trigger('click');
});

$('#fpp-summary').click( function() {
	$('#fpp-summary-panel').toggle();
});

$('#dartmouth-physical-single-star').click( function() {

	$divObj = $('#dartmouth-physical-single-star-panel');

	if ($divObj.length) {
		$container.packery('remove', $divObj);
	}
	else {
		gg = $('<div style="border: 5px solid #000" id="dartmouth-physical-single-star-panel" class="dartmouth draggable">\
					<img src="http://tigress-web.princeton.edu/~tmorton/koi-fpp/K00087.01/dartmouth_triangle_single_physical.png">\
				</div>');
		$container.packery('addItems', gg);
	}
	$container.packery();
});

$("#dartmouth-physical-binary-star").click( function() {
	$("#dartmouth-physical-binary-star-panel").toggle();
});

$("#dartmouth-physical-triple-star").click( function() {
	$("#dartmouth-physical-triple-star-panel").toggle();
});

$("#dartmouth-observed-single-star").click( function() {
	$("#dartmouth-observed-single-star-panel").toggle();
});

$("#dartmouth-observed-binary-star").click( function() {
	$("#dartmouth-observed-binary-star-panel").toggle();
});

$("#dartmouth-observed-triple-star").click( function() {
	$("#dartmouth-observed-triple-star-panel").toggle();
});

$("#likelihood-plot-pl").click( function() {
	$("#likelihood-plot-pl-panel").toggle();
});

$("#likelihood-plot-eb").click( function() {
	$("#likelihood-plot-eb-panel").toggle();
});

$("#likelihood-plot-beb").click( function() {
	$("#likelihood-plot-beb-panel").toggle();
});

$("#likelihood-plot-heb").click( function() {
	$("#likelihood-plot-heb-panel").toggle();
});

$("#signal").click( function() {
	$("#signal-panel").toggle();
});