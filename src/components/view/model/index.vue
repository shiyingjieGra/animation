<template>
  <div id="container"></div>
</template>

<script>
import * as Three from 'three'
import { OBJLoader, MTLLoader } from 'three-obj-mtl-loader'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'

export default {
  name: 'model',
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      spotLight: null,
      light: null,
      light2: null,
      pMaterial: null,
      trackballControls: null,
      texture: null
    }
  },
  methods: {
    init: function() {
      let that = this
      let container = document.getElementById('container')

      // 构建相机对象
      this.camera = new Three.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
      )
      this.camera.position.z = 1

      // 场景构建
      this.scene = new Three.Scene()

      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true })
      // 设置窗口背景颜色为黑
      this.renderer.setClearColor(new Three.Color(0x000000))
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      // 激活阴影
      this.renderer.shadowMap.enabled = true
      this.renderer.sortObjects = true

      this.addLight()

      this.addtrackballControls()

      this.addModel()

      // 构建坐标轴
      let axes = new Three.AxesHelper(20)
      this.scene.add(axes)

      // 渲染视图视角
      this.camera.position.x = -30
      this.camera.position.y = 20
      this.camera.position.z = 30
      this.camera.lookAt(this.scene.position)

      container.appendChild(this.renderer.domElement)
      this.renderScene()
    },
    addLight() {
      // 添加材质灯光阴影
      this.spotLight = new Three.SpotLight(0xffffff)
      this.spotLight.position.set(-10, 20, 10)
      this.spotLight.castShadow = true
      // this.scene.add(this.spotLight)

      // 平行光
      this.light = new Three.DirectionalLight(0xffffff)
      this.light.position.set(50, 99, 50).normalize()
      this.light.castShadow = true
      this.scene.add(this.light)

      // 环境光
      this.light2 = new Three.AmbientLight(0x999999)
      this.light2.castShadow = true
      this.scene.add(this.light2)
    },
    addModel() {
      // 设置遮阳板
      // 加载纹理
      this.texture = new Three.Texture()
      // 加载图片
      let imgLoader = new Three.ImageLoader()
      // imgLoader.setCrossOrigin('anonymous')
      imgLoader.load('http://localhost:80/model/cat/texture/cat1.jpg', function(
        img
      ) {
        // 将图片值赋于纹理
        that.texture.image = img
        that.texture.needsUpdate = true
      })

      let mtlLoader = new MTLLoader()
      let that = this
      mtlLoader.setCrossOrigin('anonymous')
      mtlLoader.setPath('http://localhost:80/model/cat/')
      mtlLoader.load('cat.mtl', function(materials) {
        materials.preload()

        let objLoader = new OBJLoader()
        // objLoader.setMaterials(materials)
        objLoader.setPath('http://localhost:80/model/cat/')
        objLoader.transparent = true
        objLoader.load(
          'cat.obj',
          function(object) {
            // 设置透明贴图
            object.traverse(function(child) {
              if (child instanceof Three.Mesh) {
                // 将贴图赋于材质
                child.material.map = that.texture
                child.material.needsUpdate = true
                // 重点，没有该句会导致PNG无法正确显示透明效果
                child.material.transparent = true
                child.geometry.computeFaceNormals()
                child.geometry.computeVertexNormals()
                child.material.shading = Three.SmoothShading
              }
            })
            object.position.y = 0
            object.rotation.y = 0.5
            object.scale.set(0.8, 0.8, 0.8)
            object.transparent = true
            that.scene.add(object)
          },
          that.onProgress,
          that.onError
        )
      })
    },
    renderScene() {
      var clock = new Three.Clock()
      var delta = clock.getDelta()
      this.trackballControls.update(delta)
      requestAnimationFrame(this.renderScene)
      this.renderer.render(this.scene, this.camera)
    },
    addtrackballControls() {
      let container = document.getElementById('container')
      // 创建控件并绑定在相机上
      this.trackballControls = new TrackballControls(this.camera, container)
      this.trackballControls.rotateSpeed = 3.0
      this.trackballControls.zoomSpeed = 3.0
      this.trackballControls.panSpeed = 3.0
      this.trackballControls.noZoom = false
      this.trackballControls.noPan = false
      this.trackballControls.staticMoving = false
      this.trackballControls.dynamicDampingFactor = 0.2
    },
    onProgress(xhr) {
      // if (xhr.lengthComputable) {
      //   var percentComplete = (xhr.loaded / xhr.total) * 100
      //   var percent = document.getElementById('percent')
      //   percent.innerText = Math.round(percentComplete, 2) + '% 已经加载'
      // }
    },
    onError(xhr) {}
  },
  mounted() {
    this.init()
  }
}
</script>
<style scoped>
#container {
  height: 100%;
}
</style>
