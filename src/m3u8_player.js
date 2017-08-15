import BasePlayer from './base_player'
import Hls from 'hls.js'
import bowser from 'bowser'

class M3u8Player extends BasePlayer {
  constructor(options) {
    super(options);

    const self = this;

    // hls.js 的实例
    self.__hls = null;

    self.init(options);
  }

  init(options) {
    const self = this;

    super.init(options);

    if (bowser.mobile || bowser.tablet) {
      self.__videoElement.src = self.__source
    } else if (Hls.isSupported()) {
      self.__hls = new Hls();
      self.__hls.loadSource(self.__source);
      self.__hls.attachMedia(self.__videoElement);
    } else {
      // 默认情况
      self.__videoElement.src = self.__source
    }
  }
}

export default M3u8Player;