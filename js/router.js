define(
[
'backbone' ,
'views/page'
],

function( 
Backbone,
PageView 
) {


Router = Backbone.Router.extend({

    routes: {
        ""              : "home",
        "home"          : "homePage",
        "aboutUs"       : "showAboutUs",
        "services"      : "showServices",
        "services/item1": "showServices",
        "services/item2": "showServices",
        "services/item3": "showServices",
        "services/item4": "showServices",
        "services/item5": "showServices",
        "products"      : "showProducts",
        "contact"       : "showContact",
        "gallery"       : "showGallery",
        "flightDetails" : "showHome",
        "busDetails"    : "showHome",
        "trainDetails"  : "showHome"
    },

    initialize: function () {
      console.log("initialize router");
      this.app = new PageView();      
    },

    home: function () {
        this.app.showHome();
    },
    showServices:function(){
        console.log("router showService");
        this.app.showService();
    },
    showProducts:function(){
        this.app.showProducts();        
    },
    showContact:function(){
        this.app.showContact();
    },
    showGallery:function(){
        this.app.showGallery();
    },
    showAboutUs:function(){
        this.app.showAboutUs();
    },
    showHome:function(){
       this.app.showHomePage();
    }
});

return Router;

});

