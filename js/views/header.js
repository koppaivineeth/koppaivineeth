define([
'jquery',
'backbone',
'underscore',
'text!templates/header.html'
],
function(
$,
Backbone,
_,
headerTemplate){

	var headerView = Backbone.View.extend({
		el:"#headerContent",
		template:_.template( headerTemplate ),
		events: {
			'click #cssmenu ul li a': "changeBG"
		},

		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html( this.template );
			// set clicked header
			this.setHeaderBG();
		},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		},
		moveImage:function(){

		},
		setHeaderBG:function(){
			var loc = window.location.hash;
			$("#cssmenu ul li").removeClass("active");
			if(loc==='')
				$('#cssmenu ul li a[href=#]').parent().addClass('active');

			$('#cssmenu ul li a[href='+loc+']').parent().addClass('active');
			$("#cssmenu ul li ul li").removeClass("active");
		},
		changeBG:function(e){
			$("#cssmenu ul li").removeClass("active");
			$(e.target).parent().addClass("active");
		}
	});
	return headerView;
});