function getTagsJSON() {

	var $tags = getTags();
	var sData = '';
	var iLevel = 0;
	var prevValue;

	$.each($tags, function(index, value) {

		function getTag(value) {
			return '"' + value.tag + '"';
		}

		if (iLevel != 0 && iLevel === value.level) {
			sData = sData + '},';
		}

		if (iLevel != 0 && value.level > iLevel) {
			sData = sData + ',"children": [';
		}
		if (iLevel != 0 && value.level < iLevel) {
			for ( var i = iLevel; i > value.level; i--) {
				sData = sData + '}]';
			}
			sData = sData + '},';
		}

		sData = sData + '{"name":"' + value.tag_name + '|' + value.tag
				+ '","count":1';

		iLevel = value.level;
		prevValue = value;

	});
	for ( var i = iLevel; i > 0; i--) {
		sData = sData + '}]';
	}
	sData = '{"name": "root", "children":[' + sData + '}';

	return JSON.parse(sData);

}
function SBZoom() {

	var $tags = getTagsJSON();
	
	var width = 960, height = 700, radius = Math.min(width, height) / 2;
	var scale_radians = d3.scale.linear().range([ 0, 2 * Math.PI ]);
	var scale_radius = d3.scale.linear().range([ 0, radius ]);
	//var scale_radius = d3.scale.pow().exponent(1.3).domain([ 0, 1 ]).range([ 0, radius ])

	var scale_angle = d3.scale.linear().range([ -90, 270 ]);
	var color = d3.scale.category20c();

	var svg = d3.select(".graph").append("svg").attr("width", width).attr(
			"height",
			height).append("g").attr(
			"transform",
			"translate(" + width / 2 + "," + (height / 2 + 10) + ")");

	var partition = d3.layout.partition().sort(null).value(function(d) {
		return 1;
	});

	var arc = d3.svg.arc().startAngle(function(d) {
		return Math.max(0, Math.min(2 * Math.PI, scale_radians(d.x)));
	}).endAngle(function(d) {
		return Math.max(0, Math.min(2 * Math.PI, scale_radians(d.x + d.dx)));
	}).innerRadius(function(d) {
		return Math.max(0, scale_radius(d.y));
	}).outerRadius(function(d) {
		return Math.max(0, scale_radius(d.y + d.dy));
	});

	// Keep track of the node that is currently being displayed as the root.
	var node;
	node = $tags;

	var g = svg.datum($tags).selectAll("g").data(partition.nodes($tags))
			.enter().append("g");
	var path = g.append("path").attr("d", arc).style("fill", function(d) {
		return color((d.children ? d : d.parent).name);
	}).on("click", click).each(stash);

	/* TEXT */
	function getAngle(x, dx) {
		var angle = scale_radians(x + dx / 2) - Math.PI / 2;
		return angle / Math.PI * 180;
		//return scale_angle(x + dx / 2);
	}

	function bFlipText(x, dx) {
		var angle = getAngle(x, dx);
		if (angle > 90 && angle < 270) {
			return true;
		}
		return false;
	}

	var iCentralNodeRadius = 50;
	var iNodeRadius = radius / 3.6;

	var text = g.append("svg:text").attr("transform", function(d) {
		var angle = getAngle(d.x, d.dx);
		if (bFlipText(d.x, d.dx)) {
			angle = angle + 180;
		}
		return "rotate(" + angle + ")";
	}).attr("x", function(d) {
		var iPos = scale_radius(d.y);
		return bFlipText(d.x, d.dx) ? -iPos : iPos;
		//var iPos = d.y * radius;
		//return bFlipText(d.x, d.dx) ? -iPos : iPos;
	}).attr("dx", function(d) {
		return bFlipText(d.x, d.dx) ? "-6" : "6";
	}) // margin
	.attr("text-anchor", function(d) {
		return bFlipText(d.x, d.dx) ? "end" : "start";
	}).attr("dy", ".35em") // vertical-align
	.text(function(d) {
		return d.name;
	});

	/* END OF TEXT */

	d3.selectAll("input").on(
			"change",
			function change() {
				var value = this.value === "count" ? function() {
					return 1;
				} : function(d) {
					return d.size;
				};
				path.data(partition.value(value).nodes).transition().duration(
						1000).attrTween("d", arcTweenData);
			});

	function click(d) {
		node = d;
		text.transition().attr("opacity", 0);
		path.transition().duration(750).attrTween("d", arcTweenZoom(d))
				.each(
						"end",
						function(e, i) {

							// check if the animated element's data e lies within the visible angle span given in d
							if (e.x >= d.x && e.x < (d.x + d.dx)) {
								// get a selection of the associated text element
								var arcText = d3.select(this.parentNode)
										.select("text");
								// fade in the text element and recalculate positions
								arcText.transition().duration(750).attr(
										"opacity",
										1).attr("transform", function() {
									var angle = getAngle(e.x, e.dx);
									if (bFlipText(e.x, e.dx)) {
										angle = angle + 180;
									}
									return "rotate(" + angle + ")";
								}).attr("x", function(d) {
									var iPos = scale_radius(e.y);
									return bFlipText(e.x, e.dx) ? -iPos : iPos;
								}).attr(
										"text-anchor",
										function(d) {
											return bFlipText(e.x, e.dx) ? "end"
													: "start";
										}).attr("dx", function(d) {
									return bFlipText(e.x, e.dx) ? "-6" : "6";
								});

							}
						})

		;

		/*
		text.transition().duration(1000)
		.attrTween("x", function(d){
			return function () {
				//console.log(d.y);
				var iPos = d.y * radius;
				//console.log(bFlipText(d.x, d.dx) ? -iPos : iPos);
				return bFlipText(d.x, d.dx) ? -iPos : iPos;
				};
			
		});
		*/

	}

	d3.select(self.frameElement).style("height", height + "px");

	// Setup for switching data: stash the old values for transition.
	function stash(d) {
		d.x0 = d.x;
		d.dx0 = d.dx;
	}

	// When switching data: interpolate the arcs in data space.
	function arcTweenData(a, i) {
		var oi = d3.interpolate({
			x : a.x0,
			dx : a.dx0
		}, a);
		function tween(t) {
			var b = oi(t);
			a.x0 = b.x;
			a.dx0 = b.dx;
			return arc(b);
		}
		if (i == 0) {
			// If we are on the first arc, adjust the x domain to match the root node
			// at the current zoom level. (We only need to do this once.)
			var xd = d3.interpolate(scale_radians.domain(), [ node.x,
					node.x + node.dx ]);
			return function(t) {
				scale_radians.domain(xd(t));
				return tween(t);
			};
		} else {
			return tween;
		}
	}

	// When zooming: interpolate the scales.
	function arcTweenZoom(d) {
		var xd = d3.interpolate(scale_radians.domain(), [ d.x, d.x + d.dx ]), yd = d3
				.interpolate(scale_radius.domain(), [ d.y, 1 ]), yr = d3
				.interpolate(scale_radius.range(), [ d.y ? 20 : 0, radius ]);
		return function(d, i) {
			return i ? function(t) {
				return arc(d);
			} : function(t) {
				scale_radians.domain(xd(t));
				scale_radius.domain(yd(t)).range(yr(t));
				return arc(d);
			};
		};
	}

}

$(document).ready(function() {
	main();
	SBZoom();
});