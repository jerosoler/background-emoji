<template>
  <div id="app">
    
     <el-container>
      <el-header><h1>🔥 Background Emoji 🎉</h1></el-header>
      <el-main>
        <canvas id="canvas"></canvas>
        <div id="demo">
          
          <svg v-if="typeback === 'Linear'" xmlns="http://www.w3.org/2000/svg" :viewbox="'0 0 '+ (input.length/2)*(size_x+(size_x*space_x)) +' '+ (size_y+(size_y*space_y))" :width="(input.length/2)*(size_x+(size_x*space_x))" :height="(size_y+(size_y*space_y))" >
            <text v-for="(item, index) in input.length/2" :x="((index+(index*space_x))*1.25) +'em'" y="1em" :font-size="size" :key="index" :transform="'rotate('+rotate+' '+ ((((index+(index*space_x))*1.25)*size) + (size_x/2)) +' '+ (size_y/2) +')'">{{input.slice(index*2, (index+1)*2)}}</text>
          </svg>
          <svg v-else-if="typeback === 'Steps'" xmlns="http://www.w3.org/2000/svg" :viewbox="'0 0 '+ (input.length/2)*(size_x+(size_x*space_x)) +' '+  ((size_y*2)+((size_y*2)*space_y))" :width="(input.length/2)*(size_x+(size_x*space_x))" :height=" ((size_y*2)+((size_y*2)*space_y))">
            <text v-for="(item, index) in input.length/2" :x="((index+(index*space_x))*1.25) +'em'" :y="(index)%2 == 0 ? '1em' : (2+space_y) +'em'" :font-size="size" :key="index" :transform=" (index)%2 == 0 ?  'rotate('+rotate+' '+ ((((index+(index*space_x))*1.25)*size) + (size_x/2)) +' '+ (size_y/2) +')' :  'rotate('+rotate+' '+ ((((index+(index*space_x))*1.25)*size) + (size_x/2)) +' '+ ((((1+space_y))*size)+(size_y/2)) +')'">{{input.slice(index*2, (index+1)*2)}}</text>
          </svg>
         
        </div>
        <el-row type="flex" justify="center">
          <el-col  :xs="24" :md="6" >
            
            <el-card class="box-card controls">
              <el-row>
                <el-col :span="16" >
                  <el-input
                    placeholder="Please Pick emoji"
                    v-model="input"
                    :disabled="true" 
                    style="font-size: 27px;">
                  </el-input>
                </el-col>
                <el-col :span="8">
                  
                  <el-button  @click="showDialogEmoji = !showDialogEmoji" style="font-size: 27px; padding: 5px;">😃</el-button>
                  <el-button  @click="removeLastCharacter" style="font-size: 27px; padding: 5px;">❌</el-button>
                  
                </el-col>
                <el-col :span="24" class="emojibox"><Emoji v-show="showDialogEmoji" @select="onSelectEmoji"/></el-col>
                <el-col :span="24" >
                  <div class="el-form-item"> 
                    <el-radio-group v-model="typeback" @change="reload">
                      <el-radio-button label="Linear"></el-radio-button>
                      <el-radio-button label="Steps"></el-radio-button>
                    </el-radio-group>
                  </div>
                </el-col>

                <el-col :span="24">
                  <div class="el-form-item"> 
                    <span class="label">Opacity</span>
                    <el-slider class="content"
                      v-model="opacity"
                      :min="0.1"
                      :max="1"
                      :step="0.1"
                      @input="reload">
                    </el-slider>
                  </div>
                  <div class="el-form-item"> 
                    <span class="label">Grayscale</span>
                    <el-slider class="content"
                      v-model="grayscale"
                      :min="0"
                      :max="1"
                      :step="0.1"
                      @input="reload">
                    </el-slider>
                  </div>
                  <div class="el-form-item"> 
                    <span class="label">Size</span>
                    <el-slider class="content"
                      v-model="size"
                      :min="15"
                      :max="230"
                      :step="1"
                      @input="reload">
                    </el-slider>
                  </div>

                  <div class="el-form-item"> 
                    <span class="label">Space X</span>
                    <el-slider class="content"
                      v-model="space_x"
                      :min="0"
                      :max="2"
                      :step="0.1"
                      @input="reload">
                    </el-slider>
                  </div>

                  <div class="el-form-item"> 
                    <span class="label">Space Y</span>
                    <el-slider class="content"
                      v-model="space_y"
                      :min="0"
                      :max="3"
                      :step="0.1"
                      @input="reload">
                    </el-slider>
                  </div>

                  <div class="el-form-item"> 
                    <span class="label">Rotate</span>
                    <el-slider class="content"
                      v-model="rotate"
                      :min="0"
                      :max="360"
                      :step="1"
                      @input="reload">
                    </el-slider>
                  </div>


                  <el-button type="primary" @click="exportback">Export & Download</el-button>

                </el-col>
              </el-row>
              

            </el-card>


          </el-col>
        </el-row>

        <el-dialog
          title="Export"
          :visible.sync="dialogVisible"
          width="30%"
          >
          
          <p>SVG</p>
          <!--<pre><code id="codesvg" class="language-svg"></code></pre>-->
          <prism language="svg">{{ codeSvg }}</prism>
          <el-button type="primary" style="width: 100%; margin-top: 10px" v-clipboard:copy="codeSvg" v-clipboard:success="copied">Copy!!</el-button>

          <p>CSS</p>
          <!--<pre><code id="code" class="language-css"></code></pre>-->
          <prism language="css">{{ codeCss }}</prism>
          <el-button type="primary" style="width: 100%; margin-top: 10px" v-clipboard:copy="codeCss" v-clipboard:success="copied">Copy!!</el-button>

          <p>PNG</p>
          <el-button type="primary" style="width: 100%; margin-top: 10px" @click="download();" :loading="loadingDownload">Download</el-button>

        </el-dialog>

        <h1 class="titlebody">EXAMPLES</h1>

        <div  v-for="(o, index) in 7" :key="o" :class="'examples example'+index" >
          <el-card :body-style="{ padding: '0px' }"  v-for="(o, index) in 3" :key="o" :class="index > 0 ? 'hidden' : ''">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>Emoji!!!</span>
              <div class="bottom clearfix">
                <time class="time"></time>
                <el-button type="text" class="button">Buy!</el-button>
              </div>
            </div>
          </el-card>
        </div>

      </el-main>
      <el-footer>Made by <a href="https://github.com/jerosoler">Jero Soler</a> with ❤️</el-footer>
    </el-container>
    <a href="https://github.com/jerosoler/background-emoji/" class="github-corner" aria-label="View source on GitHub"><svg width="60" height="60" viewBox="0 0 250 250" style="fill:#151513; color:rgb(89, 88, 88); position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
    
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VEmojiPicker from 'v-emoji-picker';
import VueClipboard from 'vue-clipboard2'

import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";


Vue.use(ElementUI);
Vue.use(VueClipboard);
Vue.component("prism", Prism);

export default {
  name: 'App',
   components: {
    'Emoji': VEmojiPicker
    /*  Emoji*/
  },
  data: function() {
    return { 
      input: '🐮🐼🐵🦁',
      showDialogEmoji: false,
      typeback: 'Steps',
      opacity: 0.5,
      grayscale: 0.5,
      size: 60,
      size_x: 75,
      size_y: 71,
      space_x: 0,
      space_y: 0,
      rotate: 0,
      dialogVisible: false,
      codeSvg: ' ',
      codeCss: ' ',
      loadingDownload: false,
    }
  },
  mounted() {
    this.reload();
  },
  methods: {
    onSelectEmoji(emoji) {
      this.input += emoji.data;
      this.reload();
    },
    removeLastCharacter() {
      this.input = this.input.slice(0, -2);
      this.reload();
    },
    exportback() {
      this.dialogVisible = !this.dialogVisible;
      const svgelement =  document.getElementById("demo");
      const svgcode = svgelement.innerHTML.replace((/ {2}|\r\n|\n|\r/gm),"");
      const svgwidth = document.getElementById("demo").children[0].getAttribute('width');
      const svgheight= document.getElementById("demo").children[0].getAttribute('height');
      this.codeSvg = svgcode;
      let csscode = '.div {\n';
      csscode += " background-size: "+ svgwidth+"px "+ svgheight + "px;\n";
      csscode += " background-image: url('data:image/svg+xml;utf8,"+svgcode+"');\n";
      csscode += "}\n";
      this.codeCss = csscode;

    },
    copied() {
      this.$message({
        message: '👏 Copied! 🎉',
        type: 'success'
      });
    },
    download() {
      
      this.loadingDownload = true;
      var svgString = new XMLSerializer().serializeToString(document.querySelector('svg'));

      var canvas = document.getElementById("canvas");
      const svgwidth = document.getElementById("demo").children[0].getAttribute('width');
      canvas.width = svgwidth;
      
      const svgheight= document.getElementById("demo").children[0].getAttribute('height');
      canvas.height = svgheight;

      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var DOMURL = self.URL || self.webkitURL || self;
      var img = new Image();
      var svg = new Blob([svgString], {type: "image/svg+xml;charset=utf-8"});
      var url = DOMURL.createObjectURL(svg);
      
      img.onload = function() {
          ctx.drawImage(img, 0, 0);
          var png = canvas.toDataURL("image/png");

          var link = document.createElement('a');
          link.download = 'emoji-background.png';
          link.href = document.getElementById('canvas').toDataURL()
          link.click();
          
          
          //document.write('<img src="'+png+'"/>');
          //document.querySelector('#png-container').innerHTML = '<img src="'+png+'"/>';
          DOMURL.revokeObjectURL(png);
      };
      img.src = url;
      var that = this;
      setTimeout(function(){ 
      that.loadingDownload = false;
      }, 1000);
    },
   
    reload() {
      const that = this;
      this.size_x = 1.25 * this.size;
      this.size_y = 1.20 * this.size;

    
      setTimeout(function(){ 
      const svgelement =  document.getElementById("demo");
      let svgelementStyle = 'opacity: '+that.opacity+'; ';
          svgelementStyle += 'filter:grayscale('+that.grayscale+'); ';
      
      document.getElementById("demo").children[0].style= svgelementStyle;
      
      const svgwidth = document.getElementById("demo").children[0].getAttribute('width');
      document.getElementById("demo").children[0].setAttribute('width', svgwidth);
      
      const svgheight= document.getElementById("demo").children[0].getAttribute('height');
      document.getElementById("demo").children[0].setAttribute('height', svgheight);
      const svgcode = svgelement.innerHTML.replace((/ {2}|\r\n|\n|\r/gm),"");
      
      svgelement.style.backgroundSize = svgwidth+'px '+ svgheight + 'px';
      svgelement.style.backgroundImage = "url('data:image/svg+xml;utf8,"+ svgcode +"')";
      },25);
    }
  }
}
</script>

<style>

:root {
  --background: #FFFFFF;
  --background-menu: #555555;
  --color: #000000;
}

html, body {
  position: relative;
  padding: 0px;
  margin: 0px;
  background: var(--background);
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  font-family: 'Roboto', sans-serif;
  
}

footer a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.el-container, .el-header, .el-main, .el-footer {
  padding: 0px;
}
.el-header, .el-footer {
  background: var(--background-menu);
  color: white;
  line-height: 60px;
  text-shadow: 0 0 3px #000000;
}

header h1 {
  margin: 0px;
}

.el-header, .el-footer, .el-main {
  text-align:center;
}

#demo  {
  height: 288px;
  display:block;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  margin-bottom: 25px;
  background: transparent;
  
}

#demo svg, #canvas {
  display: none; 
}

.controls {
  margin-bottom: 25px;
}

.emojibox {
  margin-top: 12px;
  margin-bottom:12px;
}

#EmojiPicker {
  margin-top: 12px;
  margin-bottom:12px;
}

.el-form-item .label { 
  float: left;
  width: 120px;
  text-align: left;
  font-size: 14px;
  line-height: 40px;
  padding: 0 12px 0 0;
}
.el-form-item .content { 
  margin-left: 120px;
}

.titlebody {
  color: white;
  line-height: 60px;
  text-shadow: 0 0 5px #000000;
}


.examples {
  position: relative;
  padding: 50px;
  color: black;
  display: block;
  min-height: 80px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
}

@media (max-width:768px) {
  .el-card.hidden {
    display: none;
  }
  .el-dialog {
    width: 85% !important;
  }
}

.examples .el-card {
  margin-left: 25px;
  margin-right: 25px;
}

.example0 {
  background-size: 300px 142px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 300 144" width="300" height="144" style="opacity: 0.5; filter: grayscale(0.5);"><text x="0em" y="1em" font-size="60" transform="rotate(45 37.5 36)">🐮</text><text x="1.25em" y="2em" font-size="60" transform="rotate(45 112.5 96)">🐼</text><text x="2.5em" y="1em" font-size="60" transform="rotate(45 187.5 36)">🐵</text><text x="3.75em" y="2em" font-size="60" transform="rotate(45 262.5 96)">🦁</text></svg>');
}

.example1 {
 background-size: 600px 142px;
 background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 600 142" width="600" height="142" style="opacity: 1; filter: grayscale(0.9);"><text x="0em" y="1em" font-size="60">🚗</text><text x="1.25em" y="2em" font-size="60">🚕</text><text x="2.5em" y="1em" font-size="60">🚙</text><text x="3.75em" y="2em" font-size="60">🚌</text><text x="5em" y="1em" font-size="60">🚲</text><text x="6.25em" y="2em" font-size="60">🛴</text><text x="7.5em" y="1em" font-size="60">🏍</text><text x="8.75em" y="2em" font-size="60">🛵</text></svg>');
}

.example2 {
 background-size: 600px 71px;
 background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 600 71" width="600" height="71" style="opacity: 1; filter: grayscale(0);"><text x="0em" y="1em" font-size="60">😀</text><text x="1.25em" y="1em" font-size="60">😃</text><text x="2.5em" y="1em" font-size="60">😄</text><text x="3.75em" y="1em" font-size="60">😁</text><text x="5em" y="1em" font-size="60">😆</text><text x="6.25em" y="1em" font-size="60">😅</text><text x="7.5em" y="1em" font-size="60">😂</text><text x="8.75em" y="1em" font-size="60">🤣</text></svg>');
}

.example3 {
 background-size: 600px 142px;
 background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 600 142" width="600" height="142" style="opacity: 1; filter: grayscale(0);"><text x="0em" y="1em" font-size="60">🍎</text><text x="1.25em" y="2em" font-size="60">🍐</text><text x="2.5em" y="1em" font-size="60">🍊</text><text x="3.75em" y="2em" font-size="60">🍋</text><text x="5em" y="1em" font-size="60">🍈</text><text x="6.25em" y="2em" font-size="60">🍓</text><text x="7.5em" y="1em" font-size="60">🥝</text><text x="8.75em" y="2em" font-size="60">🍍</text></svg>');
}

.example4 {
 background-size: 300px 142px;
 background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 300 142" width="300" height="142" style="opacity: 0.1; filter: grayscale(1);"><text x="0em" y="1em" font-size="60">🏀</text><text x="1.25em" y="2em" font-size="60">⚽️</text><text x="2.5em" y="1em" font-size="60">🎱</text><text x="3.75em" y="2em" font-size="60">🏉</text></svg>');
}

.example5 {
 background-image: url('assets/imagetest.png');
}
.example6 {
 background-image: url('assets/imagetest2.png');
}


.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}

</style>
