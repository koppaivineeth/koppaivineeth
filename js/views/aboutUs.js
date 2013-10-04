define([
'jquery',
'underscore',
'backbone',
'text!templates/aboutUs.html'
],
function(
$,
_,
Backbone,
aboutUsTemplate){

	var aboutUsView = Backbone.View.extend({
		el:"#aboutusMainDiv",
		template:_.template(aboutUsTemplate),
		events:{},

		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
		},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return aboutUsView;
});