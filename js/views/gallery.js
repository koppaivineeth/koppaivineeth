define([
'jquery',
'underscore',
'backbone',
'text!templates/gallery.html'
],
function(
$,
_,
Backbone,
galleryTemplate){

	var galleryView = Backbone.View.extend({
		el: "#galleryMainDiv",
		template:_.template(galleryTemplate),
		events:{},

		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
		},
		show:function(){
			this.$el.show();
			$("html, body").animate({ scrollTop: 0 }, 600);
		},
		hide:function(){
			this.$el.hide();
		}
	});	
	return galleryView;
});