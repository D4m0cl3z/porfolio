$(document).ready(function(){

    $(".click").click(function(){

    window.location = $(this).find("h1:first a:first").attr("href");

   });

 });
