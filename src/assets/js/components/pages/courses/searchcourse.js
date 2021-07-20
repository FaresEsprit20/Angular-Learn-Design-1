
   
$(document).ready(function(){
   $("#searchInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#lessonList .col-12").filter(function() {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });
});

$(document).ready(function(){
   $("#searchInputtwo").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#lessonList .col-12").filter(function() {
         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
   });
});

