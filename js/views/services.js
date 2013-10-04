define([
'jquery',
'underscore',
'backbone',
'text!templates/services.html'
],
function(
$,
_,
Backbone,
servicesTemplate){

	var servicesView = Backbone.View.extend({
		el:"#servicesMainDiv",
		template:_.template(servicesTemplate),
		events:{},

		initialize:function(){
			console.log("initialize servicesView");
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
	return servicesView;
});