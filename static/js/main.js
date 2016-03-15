var physical = 1;
var observed = 0;
var singleStarImg = 0;
var doubleStarImg = 0;
var tripleStarImg = 0;
var fppSummary = 0;

var width = $('#FPP-stars-images').width();
var height = $('#FPP-stars-images').height();
$('.stars-img').css({
	'width': width,
	'height': height
});

// wheelzoom code
wheelzoom($('.stars-img'));

// left panel code
function leftImageDisplayer(obj) {

	$('.stars-img, #FPP-img').hide();

	if (singleStarImg == 1 || doubleStarImg == 1 || tripleStarImg == 1) {

		$('#stars-tab').css('background-color', '#fff');
		$('#FPP-tab').css('background-color', '#26408B');

		$('.stars-tab-label, .stars-tab-label-2').css('color', '#26408B');
		$('#FPP-tab-label').css('color', '#fff');

		if (singleStarImg == 1) {
			if (physical == 1) {
				$('#single-star-img-physical').show();
				$('#single-star').css('color','#fff');
				$('#physical-triangle').css('color','#fff');
			}
			if (observed == 1) {
				$('#single-star-img-observed').show();
				$('#single-star').css('color','#fff');
				$('#observed-triangle').css('color','#fff');
			}
		}

		else if (doubleStarImg == 1) {
			if (physical == 1) {
				$('#double-star-img-physical').show();
				$('#double-star').css('color','#fff');
				$('#physical-triangle').css('color','#fff');
			}
			if (observed == 1) {
				$('#double-star-img-observed').show();
				$('#double-star').css('color','#fff');
				$('#observed-triangle').css('color','#fff');
			}
		}

		else if (tripleStarImg == 1) {
			if (physical == 1) {
				$('#triple-star-img-physical').show();
				$('#triple-star').css('color','#fff');
				$('#physical-triangle').css('color','#fff');
			}
			if (observed == 1) {
				$('#triple-star-img-observed').show();
				$('#triple-star').css('color','#fff');
				$('#observed-triangle').css('color','#fff');
			}
		}
	}

	if (fppSummary == 1) {
		$('#FPP-img').show();

		$('#stars-tab').css('background-color', '#26408B');
		$('#FPP-tab').css('background-color', '#fff');

		$('.stars-tab-label, .stars-tab-label-2').css('color', '#fff');
		$('#FPP-tab-label').css('color', '#26408B');

		$(obj).css('background-color','#fff');
	}
}

$('#single-star').click( function() {
	singleStarImg = 1;
	doubleStarImg = 0;
	tripleStarImg = 0;
	fppSummary = 0;
	leftImageDisplayer(this);
});

$('#double-star').click( function() {
	singleStarImg = 0;
	doubleStarImg = 1;
	tripleStarImg = 0;
	fppSummary = 0;
	leftImageDisplayer(this);
});

$('#triple-star').click( function() {
	singleStarImg = 0;
	doubleStarImg = 0;
	tripleStarImg = 1;
	fppSummary = 0;
	leftImageDisplayer(this);
});

$('#FPP-tab').click( function() {
	singleStarImg = 0;
	doubleStarImg = 0;
	tripleStarImg = 0;
	fppSummary = 1;
	leftImageDisplayer(this);
});

$('#FPP-img').dblclick( function() {
	alert(1);
});

$('#physical-triangle').click( function() {
	physical = 1;
	observed = 0;
	leftImageDisplayer(this);
});

$('#observed-triangle').click( function() {
	physical = 0;
	observed = 1;
	leftImageDisplayer(this);
});

// bottom right panel code
$('#Pl-tab').click(function () {
	$('#Pl-img').show();
	$('#EB-img, #EB2-img, #BEB-img, #BEB2-img, #HEB-img, #HEB2-img').hide();
	$('#Pl-tab').css({
		'background-color':'white',
		'color':'#054A91',
	});
	$('#EB-tab, #EB2-tab, #BEB-tab, #BEB2-tab, #HEB-tab, #HEB2-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

$('#EB-tab').click(function () {
	$('#EB-img').show();
	$('#Pl-img, #EB2-img, #BEB-img, #BEB2-img, #HEB-img, #HEB2-img').hide();
	$('#EB-tab').css({
		'background-color':'white',
		'color':'#054A91'
	});
	$('#Pl-tab, #EB2-tab, #BEB-tab, #BEB2-tab, #HEB-tab, #HEB2-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

$('#EB2-tab').click(function () {
	$('#EB2-img').show();
	$('#Pl-img, #EB-img, #BEB-img, #BEB2-img, #HEB-img, #HEB2-img').hide();
	$('#EB2-tab').css({
		'background-color':'white',
		'color':'#054A91'
	});
	$('#Pl-tab, #EB-tab, #BEB-tab, #BEB2-tab, #HEB-tab, #HEB2-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

$('#BEB-tab').click(function () {
	$('#BEB-img').show();
	$('#EB-img, #EB2-img, #Pl-img, #BEB2-img, #HEB-img, #HEB2-img').hide();
	$('#BEB-tab').css({
		'background-color':'white',
		'color':'#054A91'
	});
	$('#Pl-tab, #EB-tab, #EB2-tab, #BEB2-tab, #HEB-tab, #HEB2-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

$('#BEB2-tab').click(function () {
	$('#BEB2-img').show();
	$('#EB-img, #EB2-img, #Pl-img, #BEB-img, #HEB-img, #HEB2-img').hide();
	$('#BEB2-tab').css({
		'background-color':'white',
		'color':'#054A91'
	});
	$('#Pl-tab, #EB-tab, #EB2-tab, #BEB-tab, #HEB-tab, #HEB2-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

$('#HEB-tab').click(function () {
	$('#HEB-img').show();
	$('#EB-img, #EB2-img, #BEB-img, #BEB2-img, #Pl-img, #HEB2-img').hide();
	$('#HEB-tab').css({
		'background-color':'white',
		'color':'#054A91'
	});
	$('#Pl-tab, #EB-tab, #EB2-tab, #BEB-tab, #BEB2-tab, #HEB2-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

$('#HEB2-tab').click(function () {
	$('#HEB2-img').show();
	$('#EB-img, #EB2-img, #BEB-img, #BEB2-img, #Pl-img, #HEB-img').hide();
	$('#HEB2-tab').css({
		'background-color':'white',
		'color':'#054A91'
	});
	$('#Pl-tab, #EB-tab, #EB2-tab, #BEB-tab, #BEB2-tab, #HEB-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

$('#signal-tab').click(function () {
	$('#signal-img').show();
	$('#trap-corner-img').hide();
	$('#signal-tab').css({
		'background-color':'white',
		'color':'#054A91'
	});
	$('#trap-corner-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

$('#trap-corner-tab').click(function () {
	$('#trap-corner-img').show();
	$('#signal-img').hide();
	$('#trap-corner-tab').css({
		'background-color':'white',
		'color':'#054A91'
	});
	$('#signal-tab').css({
		'background-color':'#054A91',
		'color':'white'
	});
});

// form code
$('#submit').click(function(){
	$('#hiddenSubmit').trigger('click');
});

// independent function calls
function imageShow() {
	$('#FPP-tab').trigger('click');
	$('#Pl-tab').trigger('click');
	$('#signal-img').css('display' ,'inline');
};

// typeahead code
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

$.getJSON('/static/other/KOIs.json', function(KOIs) {
	$('#typeahead-wrapper #typeahead').typeahead(null,
	{
		name: 'KOIs',
		source: substringMatcher(KOIs)
	});
});

$('#typeahead').keyup(function(e){
    if(e.keyCode == 13)
    {
        $('#hiddenSubmit').trigger('click');
    }
});