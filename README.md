## 安装

```bash
npm install uniapp-image-manager
```

## 导入

```ts
import { ImageManager } from 'uniapp-image-manager'
```

## 下载图片

```ts
await imageManager.downloadUrlImage({
  url: 'http://xxx.png'
})
```

## base64 转图片路径

```ts
await imageManager.base64ToPath('base64')
```

## 图片路径转 base64

```ts
await imageManager.pathToBase64('http://xxx.png')
```
