function search($filter) {

	var $slides = getSlides_o_20161003();
	$slides = $slides.concat(getSlides_e_201606());

	var arrReturn = [];
	var bInclude;
	var bFound;
	var counts = {};
	var $total = 0;

	for ( var i = 0; i < $slides.length; i++) {

		bInclude = true;
		var item = $slides[i];
		var item_tags = item.tags;
		var arr_tags = item_tags.split(' ');

		if ($filter) {
			for ( var iFilter = 0; iFilter < $filter.length; iFilter++) {

				bFound = false;
				for ( var iTag = 0; iTag < arr_tags.length; iTag++) {

					if (arr_tags[iTag].substr(0, $filter[iFilter].length) === $filter[iFilter]) {
						bFound = true;
					}
				}

				if (bFound === false) {
					bInclude = false;
				}
			}
		}

		if (bInclude) {

			$total++;
			
			arrReturn.push({
				link : '<a href = "slides/' + item.file
						+ '" target = "_blank">' + item.name + '</a>',
				source : item.source
			});

			var objTags = {};
			for ( var iTag = 0; iTag < arr_tags.length; iTag++) {

				var arrSubTags = arr_tags[iTag].split('-');
				var sugTag = '';
				for ( var iSubTag = 0; iSubTag < arrSubTags.length; iSubTag++) {

					sugTag = sugTag + (iSubTag === 0 ? '' : '-');
					sugTag = sugTag + arrSubTags[iSubTag];
					objTags[sugTag] = "";

				}
			}

			for (subTag in objTags) {
				if (counts[subTag] !== undefined) {
					counts[subTag] = counts[subTag] + 1;
				} else {
					counts[subTag] = 1;
				}
			}

		}
	}

	show(arrReturn);

	$('#Qty').text($total);
	
	return {
		//search : arrReturn,
		counts : counts
	};
}

function show($data) {

	$("#sr").DataTable().rows().remove();

	for ( var i = 0; i < $data.length; i++) {
		$("#sr").DataTable().row.add([ $data[i]['link'], $data[i]['source'] ]);
	}
	$("#sr").DataTable().draw();
}

function main() {

	$("#sr").DataTable({
		searching : true,
		ordering : false,
		bLengthChange : false,
		pageLength : 15
	});

	var searchResults = search();
	// $("thead").hide();

	// Format Search Label
	var $n = $("label")[0].children[0];
	$n.className = "width-100";

	return searchResults['counts'];

}
