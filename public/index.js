$(document).ready(function(){

    $(".info").hide()
    $("#b2").hide()

    $("#b1").click(function(){
      $(".info").show()
      $("#b2").show()
      $("#b1").hide()
    })
    $("#b2").click(function(){
      $(".info").hide()
      $("#b1").show()
      $(this).hide()
    })
    })