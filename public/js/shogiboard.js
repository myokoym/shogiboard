$(function(){
  $("td").click(function(){
    if($("#flag").text()=="false"){
      $("#coordinate").html($(this).attr("id"));
      $("#before").text($(this).html());
      $("#flag").text("true");
    }else{
      $("#"+$("#coordinate").text()).html($(this).html())
      $(this).html($("#before").text());
      $("#flag").text("false");
    }
  });
  $("#bottom_marker").css("color","blue");
});

