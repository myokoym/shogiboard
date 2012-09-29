$(document).ready ->
  $("td.cell").click ->
    if $("#flag").text() is "false"
      $("#coordinate").html $(this).attr("id")
      if $(this).html().match("img")
        $("#before").text $(this).html()
        $("#flag").text "true"
        $(this).css "background-color", "red"
    else
      $before = $("#" + $("#coordinate").text())
      $before.html $(this).html()
      $before.css "background-color", ""
      $(this).html $("#before").text()
      $("#flag").text "false"

  $("#sakasa").click ->
    if $("#flag").text() is "true"
      $target = $("#" + $("#coordinate").text())
      if $target.html().match("img")
        $src = $target.find("img").attr("src")
        if $target.html().match("_invert")
          $src = $src.replace("_invert", "")
        else
          $src = $src.replace(".gif", "_invert.gif")
        $target.find("img").attr "src", $src
        $("#before").text $target.html()

  $("#naru").click ->
    if $("#flag").text() is "true"
      $target = $("#" + $("#coordinate").text())
      if $target.html().match("img")
        if $target.html().match("fu|kyo|kei|gin|kaku|hi")
          $src = $target.find("img").attr("src")
          if $target.html().match("nari_")
            $src = $src.replace("nari_", "")
          else
            $src = $src.replace("img/", "img/nari_")
          $target.find("img").attr "src", $src
          $("#before").text $target.html()

  $("#bottom_marker").addClass "hidden"

