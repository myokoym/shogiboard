$(document).ready(function(){
  $("td.cell").click(function(){
    if($("#have_flag").text()=="false"){
      $("#coordinate").html($(this).attr("id"));
      if($(this).html().match("img")){
        $("#before").text($(this).html());
        $("#have_flag").text("true");
        $(this).css("background-color", "red");
      }
    }else{
      var $before = $("#"+$("#coordinate").text());
      $before.html($(this).html());
      $before.css("background-color", "");
      $(this).html($("#before").text());
      $("#have_flag").text("false");
      /* kifu */
      if($("#kifu_flag").text() == "true"){
        if($(this).attr("id").substr(0, 1) == "b" &&
            $("#coordinate").text() != $(this).attr("id")){
          var $beforePlace = $("#coordinate").text().substr(1);
          if($beforePlace.length >= 3){
            $beforePlace = "-";
          }
          var $afterPlace = $(this).attr("id").substr(1);
          var $komaKind = $(this).find("img").attr("src").replace(/.*\//, "").replace(/(_invert)?\.gif/, "");
          $("#kifu").append($afterPlace + $komaKind + "(" + $beforePlace + ")" + "\n");
        }
      }
    }
  });
  $("#matta").click(function(){
    var $tmp_text = $("#kifu").text().replace(/\n.*\n$/, "\n");
    $("#kifu").text($tmp_text);
  });
  $("#kifu_flag_button").click(function(){
    if($("#kifu_flag").text() == "true"){
      $("#kifu_flag").text("false");
      $("#kifu_flag_button").text("採譜×");
    }else{
      $("#kifu_flag").text("true");
      $("#kifu_flag_button").text("採譜○");      
    }
  });  
  $("#sakasa").click(function(){
    if($("#flag").text()=="true"){
      var $target = $("#"+$("#coordinate").text());
      if($target.html().match("img")){
        var $src = $target.find("img").attr("src");
        if($target.html().match("_invert")){
          $src = $src.replace("_invert", "");
        }else{
          $src = $src.replace(".gif", "_invert.gif");
        }
        $target.find("img").attr("src", $src);
        $("#before").text($target.html());
      }
    }
  });
  $("#naru").click(function(){
    if($("#flag").text()=="true"){
      var $target = $("#"+$("#coordinate").text());
      if($target.html().match("img")){
        if($target.html().match("fu|kyo|kei|gin|kaku|hi")){
          var $src = $target.find("img").attr("src");
          if($target.html().match("nari_")){
            $src = $src.replace("nari_", "");
          }else{
            $src = $src.replace("img/", "img/nari_");
          }
          $target.find("img").attr("src", $src);
          $("#before").text($target.html());
        }
      }
    }
  });
  $("#bottom_marker").addClass("hidden");
});

