#pragma glslify: noise = require(glsl-noise/simplex/2d)

uniform sampler2D u_texture1;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    gl_FragColor = texture2D(u_texture1, uv + noise(uv+(u_time*0.5)));
}
