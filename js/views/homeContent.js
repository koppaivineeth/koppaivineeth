define([
'jquery',
'underscore',
'backbone',
'bootstrap',
'text!templates/homeContent.html'
],function(
$,
_,
Backbone,
Bootstrap,
homeContentTemplate){

	var homeContentView = Backbone.View.extend({
		el:"#homeBody",
		template:_.template(homeContentTemplate),
		events: {
			'click #aboutUsDetail p button':'showAboutUs'
		},

		initialize:function(){
			this.render();
		},
		render:function(){
			console.log("render HOME");
			this.$el.html(this.template);
			// $('.carousel').carousel({  
			//   interval: 2000 // in milliseconds  
			// });
			console.log("window");
			console.log($(window));

			$(window).scroll(function(){
			  $("#communitySiteLinks").stop().animate({"marginTop": ($(window).scrollTop()+200) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, 800 );
			});
			this.animate();
      	},
      	animate:function(){
      		console.log("animate function");
      		// for(var i=0;i<=2;i++){
      			
      		// }
      		var ind = $(".indicators p a");
      		
      		setTimeout(function(){

      		},2000);
      	},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		},
		showAboutUs:function(){
			this.goTo("#aboutUs");
		}
	});
	return homeContentView;
});