
window.onload = function ()
{
  var audio1 = document.querySelector('.audio1');
  var video1 = document.querySelector('.video1');
  var body = document.querySelector('body');

  video1.addEventListener('click', function() {

    if (video1.paused)
    {
      audio1.play();
      video1.classList.add('active');
      body.classList.add('active');

      if (audio1.duration > 0 && !audio1.paused) {
        video1.play();
      }
    } else {
      audio1.pause();
      video1.pause();
      video1.classList.remove('active');
      body.classList.remove('active');
    }

  });
}
