
var vid_state = 0;

$(document).ready(function(){
  console.log("hello");

  var video = new Video("../videos/vid1.mp4", true);

  $("video").attr('id', 'video');

  //  video.play();

    $('#video').bind("contextmenu",function(e){
       video.play();
       return false;
    });

});

function Video(src, append) {
  var v = document.createElement("video");
  if (src != "") {
    v.src = src;
  }
  if (append == true) {
    $("#player").append(v);
  }
  return v;
}
