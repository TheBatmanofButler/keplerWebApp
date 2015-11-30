var $container = $('#grid-wrapper').packery({
	columnWidth: 20,
	rowHeight: 20,
});

$container.find('.draggable').each(makeEachDraggable);

function makeEachDraggable(i, itemElem) {
	// make element draggable with Draggabilly
	var draggie = new Draggabilly( itemElem );
	// bind Draggabilly events to Packery
	$container.packery( 'bindDraggabillyEvents', draggie );
}

function packeryToggle(liObj, extraClass, imgName) {
	objID = liObj.id + '-panel';
	if ($('#' + objID).length){
		$container.packery('remove', $('#' + objID));
	}
	else {
		$addObj = $('<div id="' + objID + '" class="' + extraClass + ' draggable">\
						<img src="http://tigress-web.princeton.edu/~tmorton/koi-fpp/K00087.01/' + imgName + '.png">\
					</div>');
		$container.append($addObj).packery('appended', $addObj);
		$addObj.each(makeEachDraggable);
	}
	$container.packery();
}

$('#show-hide').click( function() {

});

$('#submit').click( function() {
	$('#hiddenSubmit').trigger('click');
});

$('#fpp-summary').click( function() {
	packeryToggle(this, '', 'FPPsummary');
});

$('#dartmouth-physical-single-star').click( function() {
	packeryToggle(this, 'dartmouth', 'dartmouth_triangle_single_physical');
});

$("#dartmouth-physical-binary-star").click( function() {
	packeryToggle(this, 'dartmouth', 'dartmouth_triangle_binary_physical');
});

$("#dartmouth-physical-triple-star").click( function() {
	packeryToggle(this, 'dartmouth', 'dartmouth_triangle_triple_physical');
});

$("#dartmouth-observed-single-star").click( function() {
	packeryToggle(this, 'dartmouth', 'dartmouth_triangle_single_observed');
});

$("#dartmouth-observed-binary-star").click( function() {
	packeryToggle(this, 'dartmouth', 'dartmouth_triangle_binary_observed');
});

$("#dartmouth-observed-triple-star").click( function() {
	packeryToggle(this, 'dartmouth', 'dartmouth_triangle_triple_observed');
});

$("#likelihood-plot-pl").click( function() {
	packeryToggle(this, 'likelihood-plot', 'pl');
});

$("#likelihood-plot-eb").click( function() {
	packeryToggle(this, 'likelihood-plot', 'eb');
});

$("#likelihood-plot-beb").click( function() {
	packeryToggle(this, 'likelihood-plot', 'beb');
});

$("#likelihood-plot-heb").click( function() {
	packeryToggle(this, 'likelihood-plot', 'heb');
});

$("#signal").click( function() {
	packeryToggle(this, 'signal-plot', 'signal');
});

$('#control-panel>ul>li').click( function(){
	$(this).toggleClass('selected');
});