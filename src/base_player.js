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

    if (self.width) {
      self.__videoElement.width = self.width;
    }
    if (self.__height) {
      self.__videoElement.height = self.__height;
    }

    self.__dom.appendChild(self.__videoElement);
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