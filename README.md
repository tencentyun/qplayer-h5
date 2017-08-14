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
    source: 'http://online-1253125191.cossh.myqcloud.com/test_new_logo/dragons1.mp4.f40.mp4',
    width: 500,
  })
```

在线体验： https://raw.githack.com/tencentyun/qplayer-h5/master/test/mp4_player.test.html

### m3u8 播放

```js
  var player = QPlayer.create({
    vType: 'm3u8',
    dom: '.v1',
    source: 'http://online-1253125191.cossh.myqcloud.com/test_new_logo/dragons1.mp4.f40.m3u8',
    width: 500,
  })
```

在线体验： https://raw.githack.com/tencentyun/qplayer-h5/master/test/m3u8_player.test.html