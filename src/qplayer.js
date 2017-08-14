import M3u8Player from './m3u8_player'
import Mp4Player from './mp4_player'
import QPlayerError from './qplayer_error'

const QPlayer = {};

QPlayer.create = function (options) {
  if (options.vType == 'mp4') {
    return new Mp4Player(options)
  } else if (options.vType == 'm3u8') {
    return new M3u8Player(options);
  } else {
    throw new QPlayerError('unsupport vType.')
  }
}

export default QPlayer
