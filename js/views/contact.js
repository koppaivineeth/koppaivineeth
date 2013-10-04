define([
'jquery',
'underscore',
'backbone',
'text!templates/contact.html'
],
function(
$,
_,
Backbone,
contactTemplate){

	var contactView = Backbone.View.extend({
		el:"#contactsMainDiv",
		template:_.template(contactTemplate),
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
	return contactView;
});