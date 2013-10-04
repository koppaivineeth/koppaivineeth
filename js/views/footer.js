define([
'jquery',
'underscore',
'backbone',
'text!templates/footer.html'
],
function(
$,
_,
Backbone,
footerTemplate){

	var footerView = Backbone.View.extend({
		el:"#footerContent",
		template:_.template(footerTemplate),
		events:{
			// 'click #scrollToTop':"scrollToTop"
		},

		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
			$("#scrollToTop").click(function(){
			   $("html, body").animate({ scrollTop: 0 }, 600);
			});
		},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return footerView;
});