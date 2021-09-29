$(document).ready(function(){
  $("#chuck").hide();
  $("#post").hide();
  $("#box").hide();
  $("#spam").hide();
  $("#sentence").hide();
  $("#joke").hide();  
})
function delay(ms) {
  var cur_d = new Date();
  var cur_ticks = cur_d.getTime();
  var ms_passed = 0;
  while (ms_passed < ms) {
    var d = new Date();
    var ticks = d.getTime();
    ms_passed = ticks - cur_ticks;
  }
}

function displayText(b) {
  $(".hideable").toggle();
  if (b.innerHTML == "Next"){
    b.innerHTML = "Back";
  } else {
    b.innerHTML = "Next";
  }
};

function bypassCaptcha() {
  document.getElementById('i11').classList.add("isCheckedNext");
  document.getElementById('i11').classList.add("isChecked");
}

function req(n) {
  var da = {};

  for (var i = 0; i < $('#sub').val(); i += 1) {

    da["entry.797566747"] = "Option 2";
    da["entry.169556469"] = "b";
    da["entry.1344162633"] = "69";
    da["entry.165252303"] = "v4xBG";
    i+=1;
    da["entry.910209338"] = $('#box').val()+"A.H. att. "+i;
    i-=1;
    da["pageHistory"] = "0,1,2";

    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdoiLgQamHtZ3mzaGOWllsW891_6X6crIdQy0L0FuQ1Vv9Ahg/formResponse",
      type: "post",
      data: da,
      success: function(data) {}
    });
  }

  $('#completeModal').modal('show');
}
