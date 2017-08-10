import M3u8Player from './m3u8_player'
import Mp4Player from './mp4_player'
import QPlayerError from './qplayer_error'


class QPlayer {
  constructor(options) {
    const self = this;

    self.__player = null;

    if (options.vType == 'mp4') {
      self.__player = new Mp4Player(options)
    } else if (options.vType == 'm3u8') {
      self.__player = new M3u8Player(options);
    } else {
      throw new QPlayerError('unsupport vType')
    }
  };

  play() {
    this.__player.play()
  }

  pause() {
    this.__player.pause()
  }

  mute() {
    this.__player.mute()
  }

  seek() {
    this.__player.seek()
  }

  setVolume() {
    this.__player.setVolume()
  }

  getVolume() {
    this.__player.getVolume()
  }

  isPlaying() {
    this.__player.isPlaying()
  }

  getDuration() {
    this.__player.getDuration()
  }

  getCurrentTime() {
    this.__player.getCurrentTime()
  }

  fullScreen() {
    this.__player.fullScreen()
  }
}

/*
需要抛出的事件
 ready
 play
 pause
 ended
 */


export default QPlayer
