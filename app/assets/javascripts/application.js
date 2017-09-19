// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery.validate
//= require popper
//= require bootstrap-sprockets
//= require rails-ujs
//= require turbolinks
//= require_tree .
$(document).on('turbolinks:load', function() {
  
	$("#users_signup_form").validate({
       rules: {
            
            "user[email]": {
                required: true,
                email: true
            },  
          "user[password]": {
                required: true,
                minlength: 8
            },
			"user[password_confirmation]": {
            	required: true,
            	minlength: 8,
            	equalTo: "#user_password"

            }

        },
               messages: {
               	
               	
                   "user[password]": {
                       required: "Please provide a password",
                       minlength: "Please Enter minlength 8",
                      },
            
                      "user[email]": "Please enter a valid email address",
                       "user[password_confirmation]": {
                       	required: "Please provide a password",
                       	minlength: "Please Enter minlength 8",
                       	equalTo: "Please enter the same password"

                       }
                      },
                        submitHandler: function(form) {
			      form.submit();
			    }
                   
              });   





        $("#new_user").validate({
       rules: {
            
            "user[email]": {
                required: true,
                email: true
            },  
          "user[password]": {
                required: true,
                minlength: 8
            }
        },
               messages: {
               	
               	
                   "user[password]": {
                       required: "Please provide a password",
                       minlength: "Please Enter minlength 8",
                      },
            
                      "user[email]": "Please enter a valid email address",
                       
                      },
                        submitHandler: function(form) {
			      form.submit();
			    }
                   
              });   

});