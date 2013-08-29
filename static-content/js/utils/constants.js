 //file to keep all URL and other constants
 define(
     [   'jquery',
         'underscore',
         'backbone'
     ],

     function (
         $,
         _,
         Backbone
     ) {


         var constants = {

             userId: $('#userid').val(),
             username: $('#user-disp').text(),
             userRole: $('#userrole').val(),

             profileList: 'list',

             //status for content
             draft: 'DRAFT',
             readyToReview: 'READY_FOR_REVIEW',
             

             availableTags: ["title:", "description:", "source-site:", "keywords:", "standard:"],

             // to add/delete user
            

             sourceSites: '/contentrepository/api/cms/metadata/source-site',

             //ERROR MESSAGES
             errorOnDelete: "Author can only delete DLAs created by him which is in draft mode",

             //
             eventbus: _.extend({}, Backbone.Events)



         }

         return constants;




     }); //file end