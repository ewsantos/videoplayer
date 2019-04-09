

$(document).ready(function(){
  console.log("hello");

  var video = new Video("../videos/vid1.mp4", true);

  video.height = 280;
  video.width = 500;

    video.play();

/*  $("#player").mousedown(function(event) {
    switch (event.which) {
        case 1:
            alert('Left Mouse button pressed.');
            break;
        case 2:
            alert('Middle Mouse button pressed.');
            break;
        case 3:
            alert('Right Mouse button pressed.');
            break;
        default:
            alert('You have a strange Mouse!');
    }
});*/

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
