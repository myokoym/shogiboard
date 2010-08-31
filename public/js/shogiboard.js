$(document).ready(function(){
  $("td.cell").click(function(){
    if($("#flag").text()=="false"){
      $("#coordinate").html($(this).attr("id"));
      if($(this).html().match("<img.*>")){
        $("#before").text($(this).html());
        $("#flag").text("true");
        $(this).css("background-color", "red");
      }
    }else{
      $before = $("#"+$("#coordinate").text());
      $before.html($(this).html());
      $before.css("background-color", "");
      $(this).html($("#before").text());
      $("#flag").text("false");
    }
  });
  $("#bottom_marker").addClass("hidden");
});

