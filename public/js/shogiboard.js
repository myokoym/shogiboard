(function() {

  $(document).ready(function() {
    $("td.cell").click(function() {
      var $before;
      if ($("#flag").text() === "false") {
        $("#coordinate").html($(this).attr("id"));
        if ($(this).html().match("img")) {
          $("#before").text($(this).html());
          $("#flag").text("true");
          return $(this).css("background-color", "red");
        }
      } else {
        $before = $("#" + $("#coordinate").text());
        $before.html($(this).html());
        $before.css("background-color", "");
        $(this).html($("#before").text());
        return $("#flag").text("false");
      }
    });
    $("#sakasa").click(function() {
      var $src, $target;
      if ($("#flag").text() === "true") {
        $target = $("#" + $("#coordinate").text());
        if ($target.html().match("img")) {
          $src = $target.find("img").attr("src");
          if ($target.html().match("_invert")) {
            $src = $src.replace("_invert", "");
          } else {
            $src = $src.replace(".gif", "_invert.gif");
          }
          $target.find("img").attr("src", $src);
          return $("#before").text($target.html());
        }
      }
    });
    $("#naru").click(function() {
      var $src, $target;
      if ($("#flag").text() === "true") {
        $target = $("#" + $("#coordinate").text());
        if ($target.html().match("img")) {
          if ($target.html().match("fu|kyo|kei|gin|kaku|hi")) {
            $src = $target.find("img").attr("src");
            if ($target.html().match("nari_")) {
              $src = $src.replace("nari_", "");
            } else {
              $src = $src.replace("img/", "img/nari_");
            }
            $target.find("img").attr("src", $src);
            return $("#before").text($target.html());
          }
        }
      }
    });
    return $("#bottom_marker").addClass("hidden");
  });

}).call(this);
