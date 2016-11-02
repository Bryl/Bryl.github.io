function getSelectedTags() {
	var tags = $('#tags')[0].className;
	tags = tags.split(' ');
	tags.shift(); //delete hidden class
	return tags;
}

function getLevel1($tags) {

	var $return = [];
	for ( var i = 0; i < $tags.length; i++) {

		if ($tags[i].level === 1) {
			$return.push($tags[i]);
		}
	}
	return $return;

}

function getLevel($tags, sPrefix, level) {

	var $return = [];

	sPrefix = sPrefix + '-';

	for ( var i = 0; i < $tags.length; i++) {

		if ($tags[i].level === level
				&& $tags[i].tag.substr(0, sPrefix.length) === sPrefix) {
			$return.push($tags[i]);
		}
	}
	return $return;

}

function drawButtons2(counts_initial, tagsSelected) {

	var $tags = getTags();
	var $html = '';
	var $size = '';

	$html = '';

	var objContext1 = [];
	var objContext2 = [];

	var objL1 = getLevel1($tags);
	for ( var iL1 = 0; iL1 < objL1.length; iL1++) {

		var objTagL1 = objL1[iL1];

		$html = $html
				+ '<td style = "width: 130px;border: 1px solid lightgrey !important;">';
		$html = $html
				+ '<div style = "padding: 5px" class = "text-bold">'
				+ objTagL1.tag_name + '</div>';

		var objL2 = getLevel($tags, objTagL1.tag, 2);
		for ( var iL2 = 0; iL2 < objL2.length; iL2++) {

			var objTagL2 = objL2[iL2];
			var $size = 'btn-xs mb5 ml5';
			var count = '';
			var fontColor = '';

			if (typeof counts_initial[objTagL2.tag] !== 'undefined') {
				count = counts_initial[objTagL2.tag];
			}

			fontColor = ' ' + (count === '' ? 'color:lightgrey;' : '');

			var bSelected = false;
			for ( var iSelected = 0; iSelected < tagsSelected.length; iSelected++) {
				if (tagsSelected[iSelected] === objTagL2.tag) {
					bSelected = true;
				}
			}

			var btn = bSelected ? 'btn-primary' : 'btn-default';
			var bHasContext = false;

			var objL3 = getLevel($tags, objTagL2.tag, 3);
			for ( var iL3 = 0; iL3 < objL3.length; iL3++) {
				bHasContext = true;
				var objTagL3 = objL3[iL3];
				var bContext1 = false;
				for ( var iSelected = 0; iSelected < tagsSelected.length; iSelected++) {
					if (tagsSelected[iSelected] === objTagL3.tag) {
						objContext1.push(objTagL3);
						bContext1 = true;
					}
				}
				if (bSelected && !bContext1) {
					objContext2.push(objTagL3);
				}
			}
			
			var bold = bHasContext ? ' font-weight: 700;' : '';
			
			$html = $html + '<a style = "width: 120px;' + fontColor + bold
			+ '" id = "' + objTagL2.tag + '" class="font-12px btn text-left '
			+ btn + ' pos-relative ' + $size + '" href="#">'
			+ objTagL2.tag_name + '<div class="info">' + count
			+ '</div>' + '</a><br>';


			
		}

		$html = $html + '</td>';
	}

	$html = $html + '<td style = "width: 130px;;">';
	$html = $html + '</td>';

	$html = $html
			+ '<td style = "width: 130px;border: 1px solid lightgrey !important;">';
	$html = $html
			+ '<div style = "padding: 5px" class = "text-bold text-centered">'
			+ 'Контекст' + '</div>';

	// TO DO: Отсортировать Context2

	for ( var i = 0; i < objContext1.length + objContext2.length; i++) {

		var obj = {};
		var btn;
		if (i < objContext1.length) {
			obj = objContext1[i];
			btn = 'btn-primary';
		} else {
			obj = objContext2[i - objContext1.length];
			btn = 'btn-default';
		}

		var fontColor = '';
		var $size = 'btn-xs mb5 ml5';
		var count = '';

		if (typeof counts_initial[obj.tag] !== 'undefined') {
			count = counts_initial[obj.tag];
		}
		fontColor = ' ' + (count === '' ? 'color:lightgrey;' : '');
		
		$html = $html + '<a style = "width: 120px;' + fontColor + '" id = "'
				+ obj.tag + '" class="font-12px btn text-left ' + btn + ' pos-relative '
				+ $size + '" href="#">' + obj.tag_name + '<div class="info">'
				+ count + '</div>' + '</a><br>';

	}

	$html = $html + '</td>';

	//console.log(getLevel1($tags));

	$(".graph").html($html);
	$(".btn").click(function() {

		$('#tags').toggleClass(this.id);
		var tagsSelected = getSelectedTags();
		var searchResults = search(tagsSelected);
		counts = searchResults.counts;
		drawButtons2(counts, tagsSelected);

	});

}

function drawButtons(counts_initial, tagsSelected) {

	var $tags = getTags();
	var $html = '';
	var $size = '';

	$html = '';

	for ( var i = 0; i < $tags.length; i++) {

		if (i === 0 || $tags[i].newline) {
			if (i > 0) {
				$html = $html + '</td>';
			}
			$html = $html + '<td style = "width: 150px;">';
		}

		if ($tags[i].level === 2 && $tags[i - 1].level === 3) {
			$html = $html + '<div></div>';
		}

		if ($tags[i].level === 1) {
			$size = '';

			$html = $html + '<div style = "padding: 5px" class = "text-bold">'
					+ $tags[i].tag_name + '</div>';

		} else {
			if ($tags[i].level === 2) {
				$size = 'btn-xs mr5 mt5';
			} else {
				$size = 'btn-xs mr5 mt5';
			}

			var count = '';
			if (typeof counts_initial[$tags[i].tag] !== 'undefined') {
				count = counts_initial[$tags[i].tag];
			}

			var btn = 'btn-default';
			for ( var iSelected = 0; iSelected < tagsSelected.length; iSelected++) {
				if (tagsSelected[iSelected] === $tags[i].tag) {
					btn = 'btn-primary';
				}
			}

			$html = $html + '<a style = "width: 120px;" id = "' + $tags[i].tag
					+ '" class="font-12px btn ' + btn + ' pos-relative '
					+ $size + '" href="#">' + $tags[i].tag_name
					+ '<div class="info">' + count + '</div>' + '</a><br>';

		}

		if (i === $tags.length - 1) {
			$html = $html + '</td>';
		}

	}

	$(".graph").html($html);
	$(".btn").click(function() {

		$('#tags').toggleClass(this.id);
		var tagsSelected = getSelectedTags();
		var searchResults = search(tagsSelected);
		counts = searchResults.counts;
		drawButtons(counts, tagsSelected);

	});

}

$(document).ready(function() {

	var counts = main();
	drawButtons2(counts, []);

});
