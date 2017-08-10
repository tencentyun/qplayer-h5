import Hls from 'hls.js'

class M3u8Player {
  constructor(options) {
    const self = this;

    // dom 需要传入一个 div 标签
    self.__dom = null;
    if (typeof options.dom === 'string') {
      self.__dom = document.querySelector(options.dom);
    } else {
      self.__dom = options.dom;
    }
    self.__videoElement = document.createElement("video");;
    self.__dom.appendChild(self.__videoElement);


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

    // hls.js 的实例
    self.__hls = null;

    self.init();
  }

  init() {
    const self = this;

    self.__hls = new Hls();
    self.__hls.loadSource(self.__source);
    self.__hls.attachMedia(self.__videoElement);

    self.__hls.on(Hls.Events.MANIFEST_PARSED,function() {
      self.__videoElement.play();
    });
  }
}

export default M3u8Player;