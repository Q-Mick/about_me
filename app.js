var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'RyQ_9HB9acQ' // ID of the video you want to play
 
  });
}