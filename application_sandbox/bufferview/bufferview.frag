/* Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#version 450
#extension GL_ARB_separate_shader_objects : enable
#extension GL_ARB_shading_language_420pack : enable

layout(location = 0) out vec4 out_color;
layout(location = 1) in vec2 texcoord;

layout(set = 0, binding = 2) uniform samplerBuffer alphaData;

void main() {
    float a = texelFetch(alphaData, 0).r;
    float b = a;
    if (b > 1.0) {
      b = 2.0 - b;
    }
    out_color = vec4(texcoord, b, 1.0);
}
