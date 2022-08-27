(()=>{"use strict";var e,t={51548:function(e,t,r){var a=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(o,n){function i(e){try{c(a.next(e))}catch(e){n(e)}}function l(e){try{c(a.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))},o=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r},n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=n(r(67294)),c=i(r(73935)),s=r(65770),d=r(30398),u=r(96297),f=d.makeStyles((e=>({root:{width:300,backgroundColor:"#f3f3f3"},grid:{paddingLeft:20,paddingRight:20,paddingTop:20},logo:{width:40},center:{textAlign:"center"},width100:{width:"100%"},logoFont:{fontFamily:"'Pacifico', cursive",marginTop:"-4px"},paper:{padding:e.spacing(2)}}))),m=d.makeStyles({root:e=>({color:e.color,height:8,width:"95%"})});function h(e){let t="";switch(e){case 33.333:t="#fc7d1a";break;case 66.666:t="#ffc30b";break;case 99.999:t="#97bc62";break;default:t="red"}return t}const g=d.withStyles({root:{color:"#97bc62",height:8},thumb:{height:20,width:20,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-6,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})((e=>{var{classes:t}=e,r=o(e,["classes"]);const a={color:h(r.value)},n=m(a);return l.default.createElement(s.Slider,Object.assign({classes:Object.assign(Object.assign({},t),{root:n.root})},r))})),p=d.withStyles((e=>({root:{width:42,height:26,padding:2,margin:e.spacing(1)},switchBase:{padding:2,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#97bc62",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#97bc62",border:"6px solid #fff"}},thumb:{width:23,height:23},track:{borderRadius:13,border:`1px solid ${e.palette.grey[400]}`,backgroundColor:e.palette.grey[200],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}})))((e=>{var{classes:t}=e,r=o(e,["classes"]);return l.default.createElement(s.Switch,Object.assign({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},r))})),b=d.createMuiTheme({typography:{fontSize:13,fontFamily:"'IBM Plex Sans', sans-serif"}});c.default.render(l.default.createElement(l.default.StrictMode,null,l.default.createElement((()=>{const e=f(),[t,r]=l.useState(66.666),[o,n]=l.useState({text:!0,images:!0,videos:!0}),i=e=>{n(Object.assign(Object.assign({},o),{[e.target.name]:e.target.checked})),u.setConfig({[e.target.name]:e.target.checked})};return l.useEffect((()=>{a(void 0,void 0,void 0,(function*(){const e=yield u.getConfig(),{text:t,images:a,videos:o,level:i}=e;n({text:t,images:a,videos:o}),r(i)}))}),[]),l.default.createElement(d.ThemeProvider,{theme:b},l.default.createElement("div",{className:e.root},l.default.createElement(s.Grid,{container:!0,direction:"column",justify:"center",alignItems:"stretch",spacing:1,className:e.grid},l.default.createElement(s.Grid,{item:!0,xs:12},l.default.createElement(s.Grid,{container:!0,spacing:1,alignItems:"center"},l.default.createElement(s.Grid,{item:!0},l.default.createElement("img",{src:"/icon.png",alt:"",className:e.logo})),l.default.createElement(s.Grid,{item:!0},l.default.createElement(s.Typography,{variant:"h5",className:e.logoFont},"Blurrer")))),l.default.createElement(s.Grid,{item:!0,xs:12}),l.default.createElement(s.Grid,{item:!0,xs:12},l.default.createElement(s.Typography,{gutterBottom:!0},"Choose how you want your content filtered."),l.default.createElement(s.Grid,{container:!0,justify:"center",alignItems:"center"},l.default.createElement(g,{value:t,onChange:(e,a)=>{t!==a&&u.setConfig({level:a}),r(a)},step:33.333,max:99.999,"aria-labelledby":"continuous-slider"})),l.default.createElement(s.Paper,{className:e.paper,elevation:3,style:{border:`2px solid ${h(t)}`}},l.default.createElement(s.Typography,null,"This level represents ",function(e){let t="";switch(e){case 33.333:t="low";break;case 66.666:t="moderate";break;case 99.999:t="high";break;default:t="off"}return t}(t),"."))),l.default.createElement(s.Grid,{item:!0,xs:12,style:{margin:3}},l.default.createElement(s.Divider,null)),l.default.createElement(s.Grid,{item:!0,xs:12},l.default.createElement(s.Typography,{gutterBottom:!0},"What kind of content do you want to filter?"),l.default.createElement(s.FormControl,{component:"fieldset",className:e.width100},l.default.createElement(s.FormGroup,null,l.default.createElement(s.FormControlLabel,{control:l.default.createElement(p,{checked:o.text,onChange:i,name:"text"}),label:"Text"}),l.default.createElement(s.FormControlLabel,{control:l.default.createElement(p,{checked:o.images,onChange:i,name:"images"}),label:"Images"})))))))}),null)),document.getElementById("root"))},96297:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getConfig=function(){return new Promise((e=>{chrome.storage.sync.get(["userid","level","text","videos","images"],(t=>{e(t)}))}))},t.setConfig=function(e){return new Promise((t=>{chrome.storage.sync.set(e,(()=>{t(!0)}))}))}}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,a.amdD=function(){throw new Error("define cannot be used indirect")},a.amdO={},e=[],a.O=(t,r,o,n)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,o,n]=e[s],l=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(l=!1,n<i&&(i=n));l&&(e.splice(s--,1),t=o())}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,o,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=42,(()=>{var e={42:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[i,l,c]=r,s=0;for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(c)var d=c(a);for(t&&t(r);s<i.length;s++)n=i[s],a.o(e,n)&&e[n]&&e[n][0](),e[i[s]]=0;return a.O(d)},r=self.webpackChunkchrome_extension_typescript_starter=self.webpackChunkchrome_extension_typescript_starter||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=a.O(void 0,[736],(()=>a(51548)));o=a.O(o)})();