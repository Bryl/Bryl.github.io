function getTagsJSON(counts) {

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

		var b = counts[value.tag] ? counts[value.tag] : 0;

		sData = sData + '{"name":"' + value.tag_name + '","tag":"' + value.tag
				+ '' + '","count":' + b;

		iLevel = value.level;
		prevValue = value;

	});
	for ( var i = iLevel; i > 0; i--) {
		sData = sData + '}]';
	}
	sData = '{"name": "root", "children":[' + sData + '}';

	return JSON.parse(sData);

}
function SBMain(counts_initial) {

	var counts;
	var $tags = getTagsJSON(counts_initial);
	//console.log($tags);

	var width = 700, height = width, radius = Math.min(width, height) / 2;
	var scale_radians = d3.scale.linear().range([ 0, 2 * Math.PI ]);
	var scale_radius = d3.scale.linear().range([ 0, radius ]);
	scale_radius = d3.scale.pow().exponent(1.6).domain([ 0, 1 ]).range(
			[ 0, radius ]);

	var color = d3.scale.category20c();

	var svg = d3.select(".graph").append("svg").attr("width", width).attr(
			"height",
			height).append("g").attr(
			"transform",
			"translate(" + width / 2 + "," + (height / 2 + 10) + ")");

	var partition = d3.layout.partition().sort(null).value(function(d) {
		/*
		if (d.count === 0) {return 0;}
		else if (d.count < 10) {return 1;}
		else {return 2;}
		*/
		return d.count === 0 ? 0 : 1; // hide no questions search
		//return d.count === 0 ? 0 : d.count/10; // hide no questions search
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
	var path = g.append("path").attr("d", arc).style('stroke', 'grey').style(
			"fill",
			function(d) {
				return color((d.children ? d : d.parent).name);
			}).on("click", click).each(stash).attr('id', function(d) {
		return d.tag;
	});

	/* TEXT */
	function getAngle(x, dx) {
		var angle = scale_radians(x + dx / 2) - Math.PI / 2;
		return angle / Math.PI * 180;
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
		if (d.depth === 0)
			return '';
		var count = '' + d.depth > 1 ? ' (' + d.count + ')' : '';
		return d.name + count;
	}).attr("opacity", function(d) {
		return d.depth > 1 && d.count === 0 ? 0 : 1;
	}).on("click", click);

	/* END OF TEXT */

	function click(d) {

		if (d.depth < 2) {
			return;
		}

		/*
		var stroke = d3.selectAll('#' + d.tag).style('stroke');
		d3.selectAll('#' + d.tag).style(
				'stroke',
				stroke === 'rgb(128, 128, 128)' ? 'blue' : 'grey');
		d3.selectAll('#' + d.tag).style(
				'stroke-width',
				stroke === 'rgb(128, 128, 128)' ? 4 : 1);
				*/
		
		var color_selected = 'rgb(224, 224, 224)';
		var fill = d3.selectAll('#' + d.tag).style('fill');
		d3.selectAll('#' + d.tag).style(
				'fill',
				fill === color_selected ? color((d.children ? d : d.parent).name) : color_selected);
		
		//console.log($('#'+d.tag).style());

		$('#tags').toggleClass(d.tag);
		var tags = $('#tags')[0].className;
		tags = tags.split(' ');
		tags.shift(); //delete hidden class

		var searchResults = search(tags);
		counts = searchResults.counts;

		var value = function(d) {
			//return counts[d.tag] ? counts[d.tag] : 0;
			//console.log(d);
			return counts[d.tag] > 0 ? 1 : 0;
		};
		text.transition().attr("opacity", 0)
		//.style('visibility', 'hidden')
		;
		path.data(partition.value(value).nodes).transition().duration(1000)
				.attrTween("d", arcTweenData).each(
						"end",
						function(e, i) {
							e.count = counts[e.tag] ? counts[e.tag] : 0;
							var arcText = d3.select(this.parentNode).select(
									"text");
							arcText.transition().duration(500).attr(
									"transform",
									function() {
										var angle = e.angle
												+ (e.flip ? 180 : 0);
										return "rotate(" + angle + ")";
									}).attr("opacity", function() {
								if (e.depth === 1 && e.value !== 0) {
									return 1;
								}
								var n = counts[e.tag] > 0 ? 1 : 0;
								return n;
							})
							//.style('visibility')
							.attr("x", function() {
								var iPos = scale_radius(e.y);
								return e.flip ? -iPos : iPos;
							}).attr("text-anchor", function(d) {
								return e.flip ? "end" : "start";
							}).attr("dx", function(d) {
								return e.flip ? "-6" : "6";
							}).text(
									function() {
										if (e.depth === 0)
											return '';
										var count = '' + e.depth > 1 ? ' ('
												+ e.count + ')' : '';
										return e.name + count;
									});

						})

		;

	}
	function clickZoom(d) {
		node = d;
		text.transition().attr("opacity", 0).style('visibility', 'hidden');
		path
				.transition()
				.duration(750)
				.attrTween("d", arcTweenZoom(d))
				.each(
						"end",
						function(e, i) {

							// check if the animated element's data e lies within the visible angle span given in d
							if (e.x >= d.x && e.x < (d.x + d.dx)) {
								// get a selection of the associated text element
								var arcText = d3.select(this.parentNode)
										.select("text");
								// fade in the text element and recalculate positions
								arcText
										.transition()
										.duration(750)
										.attr("opacity", 1)
										.attr("transform", function() {
											var angle = getAngle(e.x, e.dx);
											if (bFlipText(e.x, e.dx)) {
												angle = angle + 180;
											}
											return "rotate(" + angle + ")";
										})
										.attr(
												"x",
												function(d) {
													var iPos = scale_radius(e.y);
													return bFlipText(e.x, e.dx) ? -iPos
															: iPos;
												})
										.attr(
												"text-anchor",
												function(d) {
													return bFlipText(e.x, e.dx) ? "end"
															: "start";
												})
										.attr(
												"dx",
												function(d) {
													return bFlipText(e.x, e.dx) ? "-6"
															: "6";
												})
										.attr(
												"opacity",
												function(d) {
													return d.depth > 1
															&& d.count === 0 ? 0
															: 1;
												}).style('visibility');
							}
						});

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

	//d3.select(self.frameElement).style("height", height + "px");

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
			a.angle = getAngle(b.x, b.dx);
			a.flip = bFlipText(b.x, b.dx);
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
	var counts = main();
	SBMain(counts);

});