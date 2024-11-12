import * as THREE from "three"
import { MapControls } from "three/addons/controls/MapControls"

const canvas = document.getElementById( "map" )
const scene =  new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2_000 )
camera.position.set( 100, 100, 100 )
camera.lookAt( 0, 0, 0 )
const controls = new MapControls( camera, canvas )
controls.enableDamping = true
const renderer = new THREE.WebGLRenderer( { canvas } )
renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setAnimationLoop( () => {
	controls.update()
	renderer.render( scene, camera )
} )

//

scene.add( new THREE.AxesHelper( 2_000 ) )
