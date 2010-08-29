$(function(){
  $("td").click(function(){
    if($("#flag").text()=="false"){
      $("#coordinate").html($(this).attr("id"));
      //if($(this).html().match("<img.*>")){
      if(true){
        $("#before").text($(this).html());
        $("#flag").text("true");
        $(this).css("background-color", "red");
      }
    }else{
      $before = $("#"+$("#coordinate").text())
      $before.html($(this).html())
      $before.css("background-color", "");
      $(this).html($("#before").text());
      $("#flag").text("false");
    }
  });
  $("#bottom_marker").css("display","none");
});

