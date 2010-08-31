$(function(){
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
      if($(this).attr("id")!=$("#coordinate").text()){
        if($(this).html().match("<img.*>")){
          if($("img",this).attr("class")=="me"){
            $("tr#top").append("<td id=\"cell\">"+$(this).html()+"</td>");
          }else{
            $("tr#bottom").append("<td id=\"cell\">"+$(this).html()+"</td>");
          }
        }
        $before.html("　");
        $(this).html($("#before").text());
      }
      $before.css("background-color", "");
      $("#flag").text("false");
    }
  });
  $("#bottom_marker").addClass("hidden");
});

