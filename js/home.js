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
    
    da["entry.1425257204"] = "No"; //Contacted?
    da["entry.326955045"] = $('#box').val(); //Detailed Feedback
    i+=1;
    da["entry.485428648"] = "A.H."+i; //Name 
    da["entry.1696159737"] = "A.H. att. "+i; //Suggestions
    da["entry.879531967"] = "ah"+i+"@berea.edu"; //Email
    i-=1;
    da["pageHistory"] = "0";

    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdjKDqc_Z8eR2K4YJlI-cR8j7HE_yZGZn_2qM5WTqEE8Bku9g/formResponse",
      type: "post",
      data: da,
      success: function(data) {}
    });
  }

  $('#completeModal').modal('show');
}
