$(function(){
  $("h1").css("color","red");
  $("#bottom").css("color","blue");
  var $before;
  var $after;
  $("td").mousedown(function(){
    $before = $(this);
  });
  $("td").mouseup(function(){
    $after = $(this);
    $(this).replaceWith($before);
    $before.replaceWith($after);
  });
});

