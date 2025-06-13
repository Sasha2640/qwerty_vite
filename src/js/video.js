// Імпорт  libs
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const video = document.querySelector('#vimeo-player');

const VIDEO_KEY = 'video-current-time';

const savedTimeVideo = localStorage.getItem(VIDEO_KEY);
// ініціалізуємо Video Player
const player = new Player(video);

const throttleTimeUpdate = throttle(seconds => {
  localStorage.setItem(VIDEO_KEY, seconds);
}, 1000);

player.on('timeupdate', function (data) {
  throttleTimeUpdate(data.seconds);
});

if (savedTimeVideo) {
  player.setCurrentTime(savedTimeVideo);
}
