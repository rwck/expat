// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs



//= require underscore-min
//= require backbone-min
//= require backbone_basic_auth

//= require_tree ./backbone_js/models
//= require_tree ./backbone_js/collections
//= require_tree ./backbone_js/routers
//= require_tree ./backbone_js/views

//= require init.js
//= require search.js

//= require_self

$(document).ready(function(){
  app.init();
})
