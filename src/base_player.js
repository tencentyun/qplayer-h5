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
      self.__videoElement.width = self.__width;
    }
    if (self.__height) {
      self.__videoElement.height = self.__height;
    }
    self.__videoElement.controls = true;

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
  }

  fullScreen() {
  }
}

export default BasePlayer


/*
 需要抛出的事件
 ready
 play
 pause
 ended
 */