# qplayer-h5

## 安装

### npm方式

`npm install qplayer-h5`

### 全局引入

在线CDN地址

* 普通版本 https://unpkg.com/qplayer-h5/dist/qplayer.js
* minify版本 https://unpkg.com/qplayer-h5/dist/qplayer.min.js

直接在 script 中引入时，会暴露出名为 `QPlayer` 的全局变量。

## 示例

### mp4 播放

```js
  var player = QPlayer.create({
    vType: 'mp4',
    dom: '.v1',
    source: 'https://online-1253125191.cossh.myqcloud.com/test_new_logo/dragons1.mp4.f40.mp4',
    width: '100%',
    coverImg: 'https://dn-cnode.qbox.me/Fv8fvViUeOJpBlOWYzBo1txRUhdN',
    autoplay: true,
  })
```

在线体验： https://raw.githack.com/tencentyun/qplayer-h5/master/test/mp4_player.test.html

### m3u8 播放

```js
  var player = QPlayer.create({
    vType: 'm3u8',
    dom: '.v1',
    source: 'https://online-1253125191.cossh.myqcloud.com/test_new_logo/dragons1.mp4.f40.m3u8',
    width: '100%',
    coverImg: 'https://dn-cnode.qbox.me/Fv8fvViUeOJpBlOWYzBo1txRUhdN',
    autoplay: true,
  })
```

在线体验： https://raw.githack.com/tencentyun/qplayer-h5/master/test/m3u8_vod_player.test.html

    
## 格式支持

* HTML5 模式
    * 视频格式： mp4、m3u8
    * 视频编码： H.264
    * 音频编码： AAC
    
## API文档

### QPlayer.create(options)


* `vType` String - `m3u8` 或 `mp4`，目前不支持 flv
* `dom` String || HTMLElement - 播放器外层元素。当传入 String 时，会通过 `document.querySelector` 查找元素。
* `source` String - 视频的源地址 url
* `width` String - 播放器宽度。`100px` 或者 `100%`
* `height` String - 播放器高度。`100px` 或者 `100%`
* `coverImg` String - 封面图片 url
* `autoplay` String - 是否自动播放
* `volume` Number - 音量大小，取值 0 到 1 之间。如：`0.3`

### player.play()

开始播放

### player.pause()

暂停播放

### player.mute(isMute) 

* `isMute` Boolean - 是否静音 

### player.setVolume(volume)

volume 取值 0 到 1 之间。如：`0.3`

### player.getVolume()

返回值取值 0 到 1 之间。如：`0.3`

### player.isPlaying()

返回是否正在播放

### player.getDuration()

获取视频的总时长。如 `35.083332`

### player.getCurrentTime()

获得视频目前的时间。如 `33.691783`
