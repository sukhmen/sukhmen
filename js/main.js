(function(){
    // Vertical Timeline - by CodyHouse.co
	function VerticalTimeline( element ) {
		this.element = element;
		this.blocks = this.element.getElementsByClassName("js-cd-block");
		this.images = this.element.getElementsByClassName("js-cd-img");
		this.contents = this.element.getElementsByClassName("js-cd-content");
		this.offset = 0.8;
		this.hideBlocks();
	};

	VerticalTimeline.prototype.hideBlocks = function() {
		//hide timeline blocks which are outside the viewport
		if ( !"classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
					self.images[i].classList.add("cd-is-hidden"); 
					self.contents[i].classList.add("cd-is-hidden"); 
				}
			})(i);
		}
	};

	VerticalTimeline.prototype.showBlocks = function() {
		if ( ! "classList" in document.documentElement ) {
			return;
		}
		var self = this;
		for( var i = 0; i < this.blocks.length; i++) {
			(function(i){
				if( self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
					// add bounce-in animation
					self.images[i].classList.add("cd-timeline__img--bounce-in");
					self.contents[i].classList.add("cd-timeline__content--bounce-in");
					self.images[i].classList.remove("cd-is-hidden");
					self.contents[i].classList.remove("cd-is-hidden");
				}
			})(i);
		}
	};

	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
		verticalTimelinesArray = [],
		scrolling = false;
	if( verticalTimelines.length > 0 ) {
		for( var i = 0; i < verticalTimelines.length; i++) {
			(function(i){
				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
			})(i);
		}

		//show timeline blocks on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
			}
		});
	}

	function checkTimelineScroll() {
		verticalTimelinesArray.forEach(function(timeline){
			timeline.showBlocks();
		});
		scrolling = false;
	};
})();

$(document).ready(function(){
	$(".img-popup").on('click',function(){
	   var src = $(".img-popup").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup1").on('click',function(){
	   var src = $(".img-popup1").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup2").on('click',function(){
	   var src = $(".img-popup2").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup3").on('click',function(){
	   var src = $(".img-popup3").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup4").on('click',function(){
	   var src = $(".img-popup4").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup5").on('click',function(){
	   var src = $(".img-popup5").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup6").on('click',function(){
	   var src = $(".img-popup6").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup7").on('click',function(){
	   var src = $(".img-popup7").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup8").on('click',function(){
	   var src = $(".img-popup8").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup9").on('click',function(){
	   var src = $(".img-popup9").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup10").on('click',function(){
	   var src = $(".img-popup10").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup11").on('click',function(){
	   var src = $(".img-popup11").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup12").on('click',function(){
	   var src = $(".img-popup12").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup13").on('click',function(){
	   var src = $(".img-popup13").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup14").on('click',function(){
	   var src = $(".img-popup14").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup15").on('click',function(){
	   var src = $(".img-popup15").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup16").on('click',function(){
	   var src = $(".img-popup16").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup17").on('click',function(){
	   var src = $(".img-popup17").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});
$(document).ready(function(){
	$(".img-popup17").on('click',function(){
	   var src = $(".img-popup18").attr('src');
	   $("#modalImg").attr('src',src);
	   $(".caption").text('');
	});
});