import BasePlayer from './base_player'

class Mp4Player extends BasePlayer{
  constructor(options) {
    super(options);

    const self = this;

    self.init(options);
  }

  init(options) {
    const self = this;

    super.init(options);

    self.__videoElement.src = self.__source;

    // self.__hls = new Hls();
    // self.__hls.loadSource(self.__source);
    // self.__hls.attachMedia(self.__videoElement);
    //
    // self.__hls.on(Hls.Events.MANIFEST_PARSED,function() {
    //   self.__videoElement.play();
    // });
  }
}

export default Mp4Player;