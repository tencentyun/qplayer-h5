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
  }
}

export default Mp4Player;