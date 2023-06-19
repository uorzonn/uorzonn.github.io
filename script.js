document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('background-video');
  
  const resizeVideo = () => {
    const aspectRatio = video.videoWidth / video.videoHeight;
    const windowAspectRatio = window.innerWidth / window.innerHeight;
    
    if (windowAspectRatio > aspectRatio) {
      video.style.width = '100%';
      video.style.height = 'auto';
    } else {
      video.style.width = 'auto';
      video.style.height = '100%';
    }
  };

  window.addEventListener('resize', resizeVideo);
  video.addEventListener('loadedmetadata', resizeVideo);
});