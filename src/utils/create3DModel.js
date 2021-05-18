import * as Three from 'three'
import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

let addFbxModel = function (param, callback) {
  let texture = new Three.Texture()
  // 加载图片
  let imgLoader = new Three.ImageLoader()
  // imgLoader.setCrossOrigin('anonymous')
  if (param.texture !== '') {
    imgLoader.load(param.texture, function (
      img
    ) {
      // 将图片值赋于纹理
      texture.image = img
      texture.needsUpdate = true
    })
  }

  var fbxLoader = new FBXLoader()
  fbxLoader.setCrossOrigin('anonymous')
  fbxLoader.load(
    `${param.modelObj}`,
    function (object) {
      // 加载路径fbx文件
      object.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
          if (param.hasTexture) {
            child.material.map = texture
          }
          child.material.needsUpdate = true
        }
      })
      let bBox = new Three.Box3().setFromObject(object)
      let height = bBox.max.y - bBox.min.y
      object.scale.set(20 / height, 20 / height, 20 / height)
      callback(object)
    }
  )
}

let addMtlModel = function (param, callback) {
  let mtlLoader = new MTLLoader()

  // 设置遮阳板
  // 加载纹理
  let texture = new Three.Texture()
  // 加载图片
  let imgLoader = new Three.ImageLoader()
  // imgLoader.setCrossOrigin('anonymous')
  imgLoader.load(param.texture, function (
    img
  ) {
    // 将图片值赋于纹理
    texture.image = img
    texture.needsUpdate = true
  })
  mtlLoader.setCrossOrigin('anonymous')
  mtlLoader.load(`${param.modelMtl}`, function (materials) {
    materials.preload()

    let objLoader = new OBJLoader()
    // objLoader.setMaterials(materials)
    objLoader.transparent = true
    console.log(param.modelObj)
    objLoader.load(
      `${param.modelObj}`,
      function (object) {
        // 设置透明贴图
        object.traverse(function (child) {
          if (child instanceof Three.Mesh) {
            // 将贴图赋于材质
            child.material.map = texture
            child.material.needsUpdate = true
            // 重点，没有该句会导致PNG无法正确显示透明效果
            child.material.transparent = true
            child.material.shading = Three.SmoothShading
          }
        })
        object.position.y = 0
        object.rotation.y = 0.5
        object.scale.set(0.8, 0.8, 0.8)
        object.transparent = true
        callback(object)
      }
    )
  })
}

export { addFbxModel, addMtlModel }
