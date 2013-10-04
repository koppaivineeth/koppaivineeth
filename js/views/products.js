define([
'jquery',
'underscore',
'backbone',
'text!templates/products.html'
],
function(
$,
_,
Backbone,
productsTemplate){

	var productsView = Backbone.View.extend({
		el:"#productsMainDiv",
		template:_.template(productsTemplate),
		events: {},

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
	return productsView;
});