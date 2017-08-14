import BasePlayer from './base_player'
import Hls from 'hls.js'

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

    if (Hls.isSupported()) {
      self.__hls = new Hls();
      self.__hls.loadSource(self.__source);
      self.__hls.attachMedia(self.__videoElement);
    } else {
      self.__videoElement.src = self.__source
    }
  }
}

export default M3u8Player;