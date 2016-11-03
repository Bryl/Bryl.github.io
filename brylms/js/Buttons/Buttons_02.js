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

function drawButtons(counts_initial, tagsSelected) {

	var $tags = getTags();
	var $html = '';
	var $size = '';

	$html = '';

	var objContext = [];

	var objL1 = getLevel1($tags);
	for ( var iL1 = 0; iL1 < objL1.length; iL1++) {

		var objTagL1 = objL1[iL1];

		$html = $html
				+ '<td style = "width: 130px;border: 1px solid lightgrey !important;">';
		$html = $html + '<div style = "padding: 5px" class = "text-bold">'
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

				if (bSelected) {
					objContext.push(objTagL3);
				} else {
					for ( var iSelected = 0; iSelected < tagsSelected.length; iSelected++) {
						if (tagsSelected[iSelected] === objTagL3.tag) {
							objContext.push(objTagL3);
						}
					}
				}

			}

			var bold = bHasContext ? ' font-weight: 700;' : '';

			$html = $html + '<a style = "width: 120px;' + fontColor + bold
					+ '" id = "' + objTagL2.tag
					+ '" class="font-12px btn text-left ' + btn
					+ ' pos-relative ' + $size + '" href="#">'
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

	for ( var i = 0; i < objContext.length; i++) {

		var obj = objContext[i];
		var btn = 'btn-default';

		for ( var iSelected = 0; iSelected < tagsSelected.length; iSelected++) {
			if (tagsSelected[iSelected] === obj.tag) {
				btn = 'btn-primary';
			}
		}
		var fontColor = '';
		var $size = 'btn-xs mb5 ml5';
		var count = '';

		if (typeof counts_initial[obj.tag] !== 'undefined') {
			count = counts_initial[obj.tag];
		}
		fontColor = ' ' + (count === '' ? 'color:lightgrey;' : '');

		$html = $html + '<a style = "width: 120px;' + fontColor + '" id = "'
				+ obj.tag + '" class="font-12px btn text-left ' + btn
				+ ' pos-relative ' + $size + '" href="#">' + obj.tag_name
				+ '<div class="info">' + count + '</div>' + '</a><br>';

	}

	$html = $html + '</td>';

	//console.log(getLevel1($tags));

	$(".graph").html($html);
	$(".btn").click(function() {

		$('#tags').toggleClass(this.id);
		var tagsSelected = getSelectedTags();
		var searchResults = search(tagsSelected);
		counts = searchResults.counts;
		drawButtons(counts, tagsSelected);

	});

}

function drawButtons_prev(counts_initial, tagsSelected) {

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
		$html = $html + '<div style = "padding: 5px" class = "text-bold">'
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
					+ '" id = "' + objTagL2.tag
					+ '" class="font-12px btn text-left ' + btn
					+ ' pos-relative ' + $size + '" href="#">'
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
				+ obj.tag + '" class="font-12px btn text-left ' + btn
				+ ' pos-relative ' + $size + '" href="#">' + obj.tag_name
				+ '<div class="info">' + count + '</div>' + '</a><br>';

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

$(document).ready(function() {

	var counts = main();
	drawButtons(counts, []);

});
