import{ar as f,as as v,at as m,au as d}from"./index-Drr7b6UI.js";var p=function(s,i,n,r){function o(e){return e instanceof n?e:new n(function(l){l(e)})}return new(n||(n=Promise))(function(e,l){function h(a){try{t(r.next(a))}catch(c){l(c)}}function u(a){try{t(r.throw(a))}catch(c){l(c)}}function t(a){a.done?e(a.value):o(a.value).then(h,u)}t((r=r.apply(s,i||[])).next())})},x=function(s,i){var n={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},r,o,e,l;return l={next:h(0),throw:h(1),return:h(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function h(t){return function(a){return u([t,a])}}function u(t){if(r)throw new TypeError("Generator is already executing.");for(;l&&(l=0,t[0]&&(n=0)),n;)try{if(r=1,o&&(e=t[0]&2?o.return:t[0]?o.throw||((e=o.return)&&e.call(o),0):o.next)&&!(e=e.call(o,t[1])).done)return e;switch(o=0,e&&(t=[t[0]&2,e.value]),t[0]){case 0:case 1:e=t;break;case 4:return n.label++,{value:t[1],done:!1};case 5:n.label++,o=t[1],t=[0];continue;case 7:t=n.ops.pop(),n.trys.pop();continue;default:if(e=n.trys,!(e=e.length>0&&e[e.length-1])&&(t[0]===6||t[0]===2)){n=0;continue}if(t[0]===3&&(!e||t[1]>e[0]&&t[1]<e[3])){n.label=t[1];break}if(t[0]===6&&n.label<e[1]){n.label=e[1],e=t;break}if(e&&n.label<e[2]){n.label=e[2],n.ops.push(t);break}e[2]&&n.ops.pop(),n.trys.pop();continue}t=i.call(s,n)}catch(a){t=[6,a],o=0}finally{r=e=0}if(t[0]&5)throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}},y=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}",g=function(){function s(i){var n=this;m(this,i),this.onPhoto=d(this,"onPhoto",7),this.noDeviceError=d(this,"noDeviceError",7),this.handlePhoto=function(r){return p(n,void 0,void 0,function(){return x(this,function(o){return this.onPhoto.emit(r),[2]})})},this.handleNoDeviceError=function(r){return p(n,void 0,void 0,function(){return x(this,function(o){return this.noDeviceError.emit(r),[2]})})},this.facingMode="user",this.hidePicker=!1,this.noDevicesText="No camera found",this.noDevicesButtonText="Choose image"}return s.prototype.handleBackdropClick=function(i){i.target!==this.el&&this.onPhoto.emit(null)},s.prototype.handleComponentClick=function(i){i.stopPropagation()},s.prototype.handleBackdropKeyUp=function(i){i.key==="Escape"&&this.onPhoto.emit(null)},s.prototype.render=function(){var i=this;return f("div",{class:"wrapper",onClick:function(n){return i.handleBackdropClick(n)}},f("div",{class:"content"},f("pwa-camera",{onClick:function(n){return i.handleComponentClick(n)},facingMode:this.facingMode,hidePicker:this.hidePicker,handlePhoto:this.handlePhoto,handleNoDeviceError:this.handleNoDeviceError,noDevicesButtonText:this.noDevicesButtonText,noDevicesText:this.noDevicesText})))},Object.defineProperty(s.prototype,"el",{get:function(){return v(this)},enumerable:!1,configurable:!0}),s}();g.style=y;export{g as pwa_camera_modal_instance};
