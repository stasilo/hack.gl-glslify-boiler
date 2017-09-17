import hackgl from 'hack.gl';
const glslify = require('glslify');

function app() {
    let canvas = document.getElementById('webgl');

    hackgl({
        canvas,
        resolution: {
            width: 800,
            height: 400
        },
        injectWebcamUniform: true,
        uniforms: {
            u_texture1: {
                type: 't',
                value: null,
                url: 'assets/slime.jpg'
            }
        },
        fragmentShader: glslify('../shaders/fragment.glsl')
    });
}

document.addEventListener('DOMContentLoaded', app);
