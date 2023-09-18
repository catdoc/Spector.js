let gpuCanvas = document.createElement("canvas");
gpuCanvas.addEventListener('click', function(event) { 
  console.log("gpu capture : " + event);
}, true);

var context = gpuCanvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(0, 10, 100, 50)
context.fillStyle = "green";
context.fillText("GPU Capture", 10, 50);

// let img = new Image();
// img.onload = ImageLoaded;
// img.src = '/images/logo.png';
 
// const { GL } = GameGlobal.manager.gameInstance.Module;
let gl = GameGlobal.unityNamespace.canvas.getContext("webgl2");  //GL.currentContext.GLctx;
if (!gl) { gl = GameGlobal.unityNamespace.canvas.getContext("webgl1"); }
const pointPos = [ 
  -1, 1,
  -1, -1,
  1, -1,
  1, -1,
  1, 1,
  -1, 1,
];
const texCoordPos = [
  0, 0,
  0, 1,
  1, 1,
  1, 1,
  1, 0,
  0, 0
];
const vertexShader = `
    attribute vec4 a_position;
    attribute vec2 a_texCoord;
    varying vec2 v_texCoord;
    void main () {
        gl_Position = a_position;
        v_texCoord = a_texCoord;
    }  
`;
const fragmentShader = `
    precision mediump float;
    varying vec2 v_texCoord;
    uniform sampler2D u_texture;
    void main () {
        gl_FragColor = texture2D(u_texture, v_texCoord);
    }
`;

let textureObject;

function createShader(gl, type, source) {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
      return shader;
  }
  console.log(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  let success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
      return program;
  }
  console.log(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

function initWebGL(gl, vertexSource, fragmentSource) {
  let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  let program = createProgram(gl, vertexShader, fragmentShader);
  return program;
}

const program = initWebGL(gl, vertexShader, fragmentShader);

const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pointPos), gl.STATIC_DRAW);

const texCoordBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoordPos), gl.STATIC_DRAW);

const a_position = gl.getAttribLocation(program, "a_position");
const a_texCoord = gl.getAttribLocation(program, "a_texCoord");

console.log("SPECTOR :" + SPECTOR + ", window.SPECTOR:" + window.SPECTOR);
  if (!SPECTOR) {
    SPECTOR = window.SPECTOR;
  }
   var spector = new window.SPECTOR.Spector(); 
  spector.displayUI(true);
  
  spector.onCapture.add((capture) => {
    // Do something with capture.
    var captureString = JSON.stringify(capture);
    console.log("capture string:" + wx.env.USER_DATA_PATH);
    console.log(captureString);
  
    const fs = wx.getFileSystemManager()
    fs.writeFileSync(`${wx.env.USER_DATA_PATH}/spectorjs_capture.json`,  captureString, 'utf8');
    // fs.writeFileSync(`~/hello.txt`,  'hello, world', 'utf8')
  
    // var myEvent = new CustomEvent("SpectorOnCaptureEvent", { detail: { captureString: JSON.stringify(capture) } });
    // document.dispatchEvent(myEvent);
  });
  
  var spector_x = -1, spector_y = -1;
  var triggerGpuCapture = false;
  var attrs = gl.getContextAttributes();
  console.log("attrs : " + attrs);
  Object.keys(attrs).forEach(function(propName) {
      // propName 是对象的属性名
      // obj[propName] 是属性值 
      console.log("attrs key : " + propName);
      console.log("root value : " + propName + " -> " + attrs[propName]);
    });
    Object.keys(gl).forEach(function(propName) {
      // propName 是对象的属性名
      // obj[propName] 是属性值 
      console.log("gl key : " + propName);
      console.log("gl value : " + propName + " -> " + gl[propName]);
    });
  console.log("gl.WebGLQuery: " + gl.WebGLQuery);
  Object.keys(document).forEach(function(propName) {
    // propName 是对象的属性名
    // obj[propName] 是属性值 
    console.log("document key : " + propName);
    console.log("document value : " + propName + " -> " + gl[propName]);
  });
  
  wx.onTouchStart(function(e){
    spector_x = -1, spector_y = -1;
    if (e && e.touches && e.touches[0]) {
      // console.log("onTouchStart : " + e.touches[0]);
  
      var x = e.touches[0].clientX;
      var y = e.touches[0].clientY;
      let triggerGpuCapture = !!(0 < x && x < 100 && 0 < y && y < 100);
      console.log("triggerGpuCapture : " + triggerGpuCapture);
  
      if (triggerGpuCapture) {
        spector_x = x, spector_y = y;
        console.log("gpu capture start : " + x + "," + y + " -> " + GameGlobal.unityNamespace.canvas);
        spector.captureCanvas(GameGlobal.unityNamespace.canvas)
      }
    }
  });
  
  console.log("wx.env.USER_DATA_PATH: " + wx.env.USER_DATA_PATH);
  
  wx.onTouchEnd(function(e){
    // console.log("onTouchEnd");
    if (e && e.touches && e.touches[0]) {
      var x = e.touches[0].clientX;
      var y = e.touches[0].clientY;
      console.log("gpu capture on touch end : " + x + "," + y);
    }
  });
    
  let saveTexture2DBinding;
  let saveArrayBufferBinding;
  let saveProgramBinding;
  let saveFrameBufferBinding;
  let saveActiveTextureUnit;
  function saveGLState() {
    saveTexture2DBinding = gl.getParameter(gl.TEXTURE_BINDING_2D);	
    // saveArrayBufferBinding = gl.getParameter(gl.ARRAY_BUFFER_BINDING);
    // saveProgramBinding = gl.getParameter(gl.CURRENT_PROGRAM);
    // saveFrameBufferBinding = gl.getParameter(gl.FRAMEBUFFER_BINDING);
    saveActiveTextureUnit = gl.getParameter(gl.ACTIVE_TEXTURE);
}

  function restoreGLState() {
    if (saveTexture2DBinding) gl.bindTexture(gl.TEXTURE_2D, saveTexture2DBinding);
    // if (saveArrayBufferBinding) gl.bindBuffer(gl.ARRAY_BUFFER, saveArrayBufferBinding);
    // if (saveProgramBinding) gl.useProgram(saveProgramBinding);
    // if (saveFrameBufferBinding) gl.bindFramebuffer(gl.FRAMEBUFFER, saveFrameBufferBinding);
    if (saveActiveTextureUnit) gl.activeTexture(saveActiveTextureUnit);
}

    GameGlobal.unityNamespace.hookUnityRun = function() {
        // console.log("hookUnityRun");
        saveGLState(); 
        // gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
        gl.activeTexture(gl.TEXTURE0);
        if (!textureObject) {
            textureObject = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, textureObject);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, gpuCanvas);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            console.log("textureObject: " + textureObject);
        } 
        else {
            gl.bindTexture(gl.TEXTURE_2D, textureObject);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, gpuCanvas);
        }
        // GL.textures[textureId] = textureObject;
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 2, 0);
        gl.enableVertexAttribArray(a_position);
        gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
        gl.vertexAttribPointer( a_texCoord, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 2, 0);
        gl.enableVertexAttribArray(a_texCoord);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        restoreGLState();
    }