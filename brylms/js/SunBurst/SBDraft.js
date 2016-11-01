function getTagsJSON() {

	var $tags = getTags();
	var sData = '';
	var iLevel = 0;
	var prevValue;

	$.each($tags, function(index, value) {

		/*
		tag_name : $tagName,
		tag : $tag,
		level : $level,
		newline : $newline
		*/
		function getTag(value) {
			return '"' + value.tag + '"';
		}

		if (iLevel != 0 && iLevel === value.level) {
			sData = sData + getTag(prevValue);
			sData = sData + ',';
		}

		if (iLevel != 0 && value.level > iLevel) {
			sData = sData + '{';
		}
		if (iLevel != 0 && value.level < iLevel) {
			for ( var i = iLevel; i > value.level; i--) {
				sData = sData + getTag(prevValue);
				sData = sData + '},';
			}
		}

		sData = sData + '"' + value.tag_name + '|' + value.tag + '":';

		iLevel = value.level;
		prevValue = value;

	});
	for ( var i = iLevel; i > 1; i--) {
		sData = sData + '1}';
	}
	sData = '{"root": {' + sData + '}}';

	return JSON.parse(sData);

}

function SBDraft() {

	function getAngle(x, dx) {
		return (x + dx / 2 - Math.PI / 2) / Math.PI * 180;
	}

	function bFlipText(x, dx) {
		var angle = (x + dx / 2 - Math.PI / 2) / Math.PI * 180;
		if (angle > 90 && angle < 270) {
			return true;
		}
		return false;
	}

	var $tags = getTagsJSON();

	var w = window.innerWidth / 2; // width 
	var h = w; // height
	var r = Math.min(w, h) / 2; //radius
	var iCentralNodeRadius = 50;
	var iNodeRadius = r / 3.6;

	var color = d3.scale.category20c();

	var svg = d3.select(".graph").append("svg:svg").attr("width", w).attr(
			"height",
			h).append("svg:g").attr(
			"transform",
			"translate(" + w / 2 + "," + h / 2 + ")");

	var partition = d3.layout.partition().sort(null).size(
			[ 2 * Math.PI, r * r ]).children(function(d) {
		var name = d.key;
		d.id = name.substring(name.indexOf('|') + 1);
		d.name = name.substring(0, name.indexOf('|'));
		d.count = 1;
		return typeof d.value === 'object' ? d3.entries(d.value) : null;
	}).value(function(d) {
		return d.count;
	});

	var arc = d3.svg.arc().startAngle(function(d) {
		return d.x;
	}).endAngle(function(d) {
		return d.x + d.dx;
	}).innerRadius(function(d) {
		return iCentralNodeRadius + (d.depth - 1) * iNodeRadius;
	}).outerRadius(function(d) {
		return iCentralNodeRadius + (d.depth - 1) * iNodeRadius + iNodeRadius;
	});

	var g = svg.data(d3.entries($tags)).selectAll("g").data(partition).enter()
			.append("svg:g").attr("display", function(d) {
				return d.depth ? null : "none";
			}); // hide inner ring

	var path = g.append("svg:path").attr("d", arc).attr("stroke", "#fff").attr(
			"fill",
			function(d) {
				//return color((d.children ? d : d.parent).key);
				return '#7bb60e';
			}).attr("fill-rule", "evenodd");

	g.append("svg:text").attr("transform", function(d) {
		var angle = getAngle(d.x, d.dx);
		if (bFlipText(d.x, d.dx)) {
			angle = angle + 180;
		}
		return "rotate(" + angle + ")";
	}).attr("x", function(d) {
		var iPos = iCentralNodeRadius + (d.depth - 1) * iNodeRadius;
		return bFlipText(d.x, d.dx) ? -iPos : iPos;
	}).attr("dx", function(d) {
		return bFlipText(d.x, d.dx) ? "-6" : "6";
	}) // margin
	.attr("text-anchor", function(d) {
		return bFlipText(d.x, d.dx) ? "end" : "start";
	}).attr("dy", ".35em") // vertical-align
	.text(function(d) {
		return d.name;
	});
}