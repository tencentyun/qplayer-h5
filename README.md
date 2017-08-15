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
    width: 300,
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
    source: 'http://phonetx.qing.mgtv.com/nn_live/nn_x64/cz1hNTFjZWRiOThjYjVmMjNhYmZlYTFlZDE4YTc3ZjJlYSZjZG5leF9pZD10eF9wY19saXZlMiZpZD1DUERNUFAzNjAmdj0xJmU9NTAxNzcwMw,,/CPDMPP360.m3u8',
    width: 300,
    coverImg: 'https://dn-cnode.qbox.me/Fv8fvViUeOJpBlOWYzBo1txRUhdN',
    autoplay: true,
  })
```

在线体验： https://raw.githack.com/tencentyun/qplayer-h5/master/test/m3u8_vod_player.test.html

## TODO

* [ ] 写README文档
* [x] ios播放时不自动全屏
* [x] ios 可播放 m3u8
* [ ] 测试更多平台和浏览器
* [x] 播放前的图片显示 
* [ ] 直播时的进度条
* [ ] 各类事件监听
    需要抛出的事件
    ready
    play
    pause
    ended
    
