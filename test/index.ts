import { ImageManager } from '../src/index'

const imageManager = new ImageManager()

// 下载图片
await imageManager.downloadUrlImage({
  url: 'http://xxx.png'
})

// base64转图片路径
await imageManager.base64ToPath('base64')

// 图片路径转base64
await imageManager.pathToBase64('http://xxx.png')
