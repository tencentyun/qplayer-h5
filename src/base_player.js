import QPlayerError from './qplayer_error'

class BasePlayer {
  constructor(options) {
    const self = this;

    self.__width = options.width
    self.__height = options.height;
    // 是否直播
    self.__isLive = options.isLive;
    // 是否自动播放
    self.__autoplay = options.autoplay;

    // 视频类型
    self.__vType = options.vType;
    // 视频地址
    self.__source = options.source;
    // 视频初始音量
    self.__volume = options.volume;
    // 视频封面
    self.__coverImg = options.coverImg;
  }

  init(options) {
    const self = this;

    // dom 需要传入一个 div 标签
    if (typeof options.dom === 'string') {
      self.__dom = document.querySelector(options.dom);
    } else {
      self.__dom = options.dom;
    }

    self.__videoElement = document.createElement("video");

    if (self.__width) {
      self.__videoElement.setAttribute('width', self.__width)
    }
    if (self.__height) {
      self.__videoElement.setAttribute('height', self.__height)
    }
    self.__videoElement.setAttribute('controls', 'controls')
    self.__videoElement.setAttribute('playsinline', ''); // 阻止 ios 自动全屏播放
    self.__videoElement.setAttribute('webkit-playsinline', ''); // 阻止 ios 自动全屏播放
    self.__videoElement.poster = self.__coverImg;
    self.__videoElement.autoplay = self.__autoplay;

    if (self.__volume) {
      self.setVolume(self.__volume);
    }
    self.__dom.appendChild(self.__videoElement);
  }

  play() {
    this.__videoElement.play()

    return this;
  }

  pause() {
    this.__videoElement.pause()

    return this;
  }

  mute(isMute) {
    if (isMute === void 0) {
      isMute = true;
    }
    this.__videoElement.muted = isMute

    return this;
  }

  seek() {
    throw new QPlayerError('not implement method')
  }

  setVolume(volume) {
    this.__videoElement.volume = volume
    return this;
  }

  getVolume() {
    return this.__videoElement.volume;
  }

  isPlaying() {
    return !this.__videoElement.paused
  }

  getDuration() {
    return this.__videoElement.duration;
  }

  getCurrentTime() {
    return this.__videoElement.currentTime;
  }

  fullScreen() {
    throw new QPlayerError('not implement method')
  }
}

export default BasePlayer
