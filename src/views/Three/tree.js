import React, { Component } from 'react'
import * as THREE from 'three'

export default class index extends Component {

    componentDidMount() {

        // 场景
        var scene = new THREE.Scene();
        // 相机
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // 渲染器
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight, false);

        document.querySelector('#three-index').appendChild(renderer.domElement);

        // 立方体
        var geometry = new THREE.BoxGeometry();
        // 材质
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // 网格
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // 渲染场景
        var animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.09;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }

    render() {
        return (
            <div id='three-index' style={{ display: "block" }}>

            </div>
        )
    }
}
