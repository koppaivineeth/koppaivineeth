define(
[
'jquery',
'underscore',
'backbone' ,
'views/header',
'views/homeContent',
'views/footer',
'views/services',
'views/products',
'views/contact',
'views/gallery',
'views/aboutUs'
],
function(
$,
_, 
Backbone,
header,
homeContent,
footer,
services,
products,
contacts,
gallery,
aboutUs){

	var pageView = Backbone.View.extend({
		el:"body",

		initialize:function(){
			console.log("initialize pageView");
			this.route   	   = window.location.hash;
			this.header   	   = new header();
			this.homeContent   = new homeContent();
			this.footer		   = new footer();
			this.service	   = new services();
			this.products	   = new products();
			this.contacts	   = new contacts();
			this.gallery	   = new gallery();
			this.aboutUs	   = new aboutUs();
		},
		showHeader:function(){
			this.header.show();
		},
		showHome:function(){
			this.hideOtherViews();
			this.homeContent.show();
		},
		showHomePage:function(){
			this.goTo("#services");
		},
		showFooter:function(){
			this.footer.show();
		},
		showService:function(){
			this.hideOtherViews();
			this.service.show();
		},
		showProducts:function(){
			this.hideOtherViews();
			this.products.show();
		},
		showContact:function(){
			this.hideOtherViews();
			this.contacts.show();
		},
		showGallery:function(){
			this.hideOtherViews();
			this.gallery.show();
		},
		showAboutUs:function(){
			this.hideOtherViews();
			this.aboutUs.show();
		},
		hideOtherViews:function(){
			if(this.homeContent)
				this.homeContent.hide();
			if(this.service)
				this.service.hide();
			if(this.products)
				this.products.hide();
			if(this.contacts)
				this.contacts.hide();
			if(this.gallery)
				this.gallery.hide();
			if(this.aboutUs)
				this.aboutUs.hide();
		}
	});
	return pageView;
});