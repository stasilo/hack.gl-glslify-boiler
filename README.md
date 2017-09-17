
[`hack.gl`](https://github.com/stasilo/hack.gl) + [`glslify`](https://github.com/glslify/glslify) `build boiler plate`

`useful for "pixel toys" (as on shadertoy.com), raymarchers, etc.`

`mostly for personal use, but do enjoy :)`

`app.js:`
```javascript
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
```

`fragment.glsl:`
```glsl
#pragma glslify: noise = require(glsl-noise/simplex/2d)

uniform sampler2D u_texture1;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    gl_FragColor = texture2D(u_texture1, uv + noise(uv+(u_time*0.5)));
}
```

[`live demo`](https://labb.stasilo.se/hackgl/boiler/)

`jakob stasilowicz`

[`stasilo.se`](https://stasilo.se)
