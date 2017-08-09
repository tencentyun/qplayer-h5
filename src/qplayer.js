

function QPlayer(options) {
  var self = this;

  self.__width = null;
  self.__height = null;
  // 是否直播
  self.__live = null;
  // 是否自动播放
  self.__autoplay = null;

  // 视频类型
  self.__vType = null;
  //
  self.__source = null;

  self.__volume = null;

  self.setOptions(options)
}

QPlayer.prototype.setOptions = function (options) {

}

QPlayer.prototype.play = function (options) {

}

QPlayer.prototype.pause = function (options) {

}

QPlayer.prototype.mute = function (options) {

}

QPlayer.prototype.setVolume = function (options) {

}

QPlayer.prototype.isPlaying = function (options) {

}

QPlayer.prototype.getDuration = function () {

}

QPlayer.prototype.getCurrentTime = function () {

}

QPlayer.prototype.fullScreen = function () {

}

exports = module.exports = QPlayer;