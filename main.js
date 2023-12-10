function playVideo(){
  var video = document.getElementById('video');
  video.play();
  setTimeout(() => {
    video.addEventListener('click',function(){
      window.location = 'https://web.facebook.com/';
  });
  }, 10000);
  
}
