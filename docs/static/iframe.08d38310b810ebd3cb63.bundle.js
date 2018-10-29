(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,n,t){"use strict";var o=t(4),i=t.n(o),a=t(5),r=t.n(a),s=t(9),c=t.n(s),l=t(27),d=t(26),h=function(){function e(){i()(this,e)}return r()(e,null,[{key:"equals",value:function(e,n){return e.q===n.q&&e.r===n.r&&e.s===n.s}},{key:"add",value:function(e,n){return new l.a(e.q+n.q,e.r+n.r,e.s+n.s)}},{key:"subtract",value:function(e,n){return new l.a(e.q-n.q,e.r-n.r,e.s-n.s)}},{key:"multiply",value:function(e,n){return new l.a(e.q*n,e.r*n,e.s*n)}},{key:"lengths",value:function(e){return parseInt((Math.abs(e.q)+Math.abs(e.r)+Math.abs(e.s))/2)}},{key:"distance",value:function(n,t){return e.lengths(e.subtract(n,t))}},{key:"direction",value:function(n){return e.DIRECTIONS[(6+n%6)%6]}},{key:"neighbour",value:function(n,t){return e.add(n,e.direction(t))}},{key:"neighbours",value:function(n){for(var t=[],o=0;o<e.DIRECTIONS.length;o+=1)t.push(e.neighbour(n,o));return t}},{key:"round",value:function(e){var n=Math.round(e.q),t=Math.round(e.r),o=Math.round(e.s),i=Math.abs(n-e.q),a=Math.abs(t-e.r),r=Math.abs(o-e.s);return i>a&&i>r?n=-t-o:a>r?t=-n-o:o=-n-t,new l.a(n,t,o)}},{key:"hexToPixel",value:function(e,n){var t=n.spacing,o=n.orientation,i=(o.f0*e.q+o.f1*e.r)*n.size.x,a=(o.f2*e.q+o.f3*e.r)*n.size.y;return i*=t,a*=t,new d.a(i+n.origin.x,a+n.origin.y)}},{key:"pixelToHex",value:function(n,t){var o=t.orientation,i=new d.a((n.x-t.origin.x)/t.size.x,(n.y-t.origin.y)/t.size.y),a=o.b0*i.x+o.b1*i.y,r=o.b2*i.x+o.b3*i.y,s=new l.a(a,r,-a-r);return e.round(s)}},{key:"lerp",value:function(e,n,t){return e+(n-e)*t}},{key:"hexLerp",value:function(n,t,o){return new l.a(e.lerp(n.q,t.q,o),e.lerp(n.r,t.r,o),e.lerp(n.s,t.s,o))}},{key:"getID",value:function(e){return e instanceof l.a?e.toString():"".concat(e.q,",").concat(e.r,",").concat(e.s)}}]),e}();c()(h,"DIRECTIONS",[new l.a(1,0),new l.a(1,-1),new l.a(0,-1),new l.a(-1,0),new l.a(-1,1),new l.a(0,1)]),n.a=h},240:function(e,n,t){"use strict";t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r});t(30);var o=t(0),i=t.n(o),a=i.a.createContext({layout:null,points:null,viewBox:null}),r=(a.Consumer,a.Provider)},26:function(e,n,t){"use strict";var o=t(4),i=t.n(o),a=t(5),r=t.n(a),s=function(){function e(n,t){i()(this,e),this.x=n,this.y=t}return r()(e,[{key:"toString",value:function(){var e=this.x,n=this.y;return"".concat(e,",").concat(n)}},{key:"toJSON",value:function(){return{x:this.x,y:this.y}}}],[{key:"fromJSON",value:function(n){return new e(n.x,n.y)}}]),e}();n.a=s},27:function(e,n,t){"use strict";var o=t(8),i=t.n(o),a=t(104),r=t.n(a),s=t(4),c=t.n(s),l=t(5),d=t.n(l),h=function(){function e(n,t,o){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};c()(this,e),this.q=n,this.r=t,void 0===o?(this.s=-n-t,this.meta={}):"number"==typeof o?(this.s=o,this.meta=i):"object"===r()(o)&&(this.s=-n-t,this.meta=o)}return d()(e,[{key:"setMeta",value:function(){return!(0<arguments.length&&void 0!==arguments[0])||arguments[0],this.meta=i()({},this.meta,this.updates),this}},{key:"toString",value:function(){var e=this.q,n=this.r,t=this.s;return"".concat(e,",").concat(n,",").concat(t)}},{key:"toJSON",value:function(){return{meta:this.meta,q:this.q,r:this.r,s:this.s}}}],[{key:"fromJSON",value:function(n){var t=n.meta;return new e(n.q,n.r,t)}}]),e}();n.a=h},31:function(e,n,t){"use strict";var o=t(30),i=t.n(o),a=t(9),r=t.n(a),s=t(40),c=t.n(s),l=t(0),d=t.n(l),h=t(3),u=t.n(h),g=t(144),x=t.n(g),f=t(27),m=t(145),p=t(26),b=function(e){var n=e.anchor,t=e.children,o=e.classes,i=e.x,a=e.y;return d.a.createElement("text",{className:o.text,textAnchor:n,x:i||0,y:a||"0.3em"},t)};b.propTypes={anchor:u.a.string,children:u.a.string,classes:u.a.objectOf(u.a.string),x:u.a.oneOfType([u.a.string,u.a.number]),y:u.a.oneOfType([u.a.string,u.a.number])},b.defaultProps={anchor:"middle",classes:{text:""}};var y=b;b.__docgenInfo={description:"",methods:[],displayName:"Text",props:{anchor:{defaultValue:{value:'"middle"',computed:!1},type:{name:"string"},required:!1,description:""},classes:{defaultValue:{value:'{ text: "" }',computed:!1},type:{name:"objectOf",value:{name:"string"}},required:!1,description:""},children:{type:{name:"string"},required:!1,description:""},x:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:""},y:{type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Text.js"]={name:"Text",docgenInfo:b.__docgenInfo,path:"src/Text.js"});var w=t(240);function v(e,n){n.orientation;var t=n.size,o=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:new p.a(0,0),3<arguments.length&&void 0!==arguments[3]?arguments[3]:new p.a(.75,.75)),i=2*Math.PI*(e+.5)/6;return new p.a(t.x*o.x*Math.cos(i),t.y*o.y*Math.sin(i))}t.d(n,"a",function(){return E});var H=function(e){var n,t,o,a,s=e.children,h=e.classes,u=e.highlighted,g=e.hoverable,b=e.onClick,H=e.onMouseEnter,E=e.onMouseLeave,q=e.onMouseOver,O=e.q,k=e.r,S=e.s,_=e.selectable,j=e.selected,T=e.showCoordinates,C=e.text,z=e.TextProps,R=Object(l.useContext)(w.a),P=R.layout,B=R.points,D=Object(l.useState)(new f.a(0,0)),N=c()(D,2),M=N[0],L=N[1],I=Object(l.useState)(!1),A=c()(I,2),K=A[0],V=A[1],G=Object(l.useState)(new p.a(0,0)),Y=c()(G,2),F=Y[0],J=Y[1];return Object(l.useEffect)(function(){return L(function(){return new f.a(O,k)})},[O,k]),Object(l.useMutationEffect)(function(){return J(function(){return m.a.hexToPixel(M,P)})},[M,B]),T&&(t=v(3,P,{x:0,y:1}),o=v(1,P,{x:-1,y:-1}),a=v(5,P,{x:-2,y:1})),d.a.createElement("g",{className:x()("hexagon-group",h.group),draggable:"true",onClick:function(e){return b?b(e,M):void 0},onMouseEnter:function(e){V(function(){return!0}),H&&H(e,M)},onMouseLeave:function(e){V(function(){return!1}),E&&E(e,M)},onMouseOver:function(e){q&&q(e,M)},transform:"translate(".concat(F.x,", ").concat(F.y,")")},d.a.createElement("g",{className:x()("hexagon",h.hexagon,(n={},r()(n,h.selected,_&&j),r()(n,h.highlighted,u),r()(n,h.hovered,g&&K),n))},d.a.createElement("polygon",{className:h.polygon,points:B}),s,C?d.a.createElement(y,i()({classes:{text:h.text}},z),C):null,T?d.a.createElement(d.a.Fragment,null,d.a.createElement("text",i()({},t,{className:h.q,fontSize:2,textAnchor:"middle"}),O),d.a.createElement("text",i()({},o,{className:h.r,fontSize:2,textAnchor:"middle"}),k),d.a.createElement("text",i()({},a,{className:h.s,fontSize:2,textAnchor:"middle"}),S)):null))};H.propTypes={children:u.a.node,classes:u.a.objectOf(u.a.any),data:u.a.object,hoverable:u.a.bool,highlighted:u.a.bool,onClick:u.a.func,onMouseEnter:u.a.func,onMouseLeave:u.a.func,onMouseOver:u.a.func,q:u.a.number.isRequired,r:u.a.number.isRequired,s:u.a.number.isRequired,selectable:u.a.bool,selected:u.a.bool,showCoordinates:u.a.bool,text:u.a.string,TextProps:u.a.objectOf(u.a.any)},H.defaultProps={classes:{group:"",hexagon:"",highlighted:"",hovered:"",polygon:"",q:"",r:"",s:"",selected:"",text:""},data:{},highlighted:!1,hoverable:!0,selectable:!0,selected:!1,showCoordinates:!1,text:"",TextProps:{}};var E=H;n.b=E;H.__docgenInfo={description:"",methods:[],displayName:"Hexagon",props:{classes:{defaultValue:{value:'{\n  group: "",\n  hexagon: "",\n  highlighted: "",\n  hovered: "",\n  polygon: "",\n  q: "",\n  r: "",\n  s: "",\n  selected: "",\n  text: ""\n}',computed:!1},type:{name:"objectOf",value:{name:"any"}},required:!1,description:""},data:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},highlighted:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Provides a means to highlight a tile without selecting it, styleable with the `highlighted` class"},hoverable:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},selectable:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Disable the `selected` prop, rather redundant"},selected:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},showCoordinates:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Show the `q`, `r`, `s` coordinates of the hexagon, styleable with the `q`, `r`, and `s` classes"},text:{defaultValue:{value:'""',computed:!1},type:{name:"string"},required:!1,description:"Show text in the hexagon, styleable with the `text` class"},TextProps:{defaultValue:{value:"{}",computed:!1},type:{name:"objectOf",value:{name:"any"}},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""},onClick:{type:{name:"func"},required:!1,description:""},onMouseEnter:{type:{name:"func"},required:!1,description:""},onMouseLeave:{type:{name:"func"},required:!1,description:""},onMouseOver:{type:{name:"func"},required:!1,description:""},q:{type:{name:"number"},required:!0,description:""},r:{type:{name:"number"},required:!0,description:""},s:{type:{name:"number"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hexagon.js"]={name:"Hexagon",docgenInfo:H.__docgenInfo,path:"src/Hexagon.js"})},59:function(e,n,t){"use strict";var o=t(40),i=t.n(o),a=t(103),r=t.n(a),s=t(0),c=t.n(s),l=t(3),d=t.n(l),h=t(144),u=t.n(h),g=t(240),x=t(26),f=t(4),m=t.n(f),p=t(9),b=t.n(p),y=function e(n,t,o,i,a,r,s,c,l){m()(this,e),this.f0=n,this.f1=t,this.f2=o,this.f3=i,this.b0=a,this.b1=r,this.b2=s,this.b3=c,this.startAngle=l};b()(y,"Flat",new y(1.5,0,Math.sqrt(3)/2,Math.sqrt(3),2/3,0,-1/3,Math.sqrt(3)/3,0)),b()(y,"Pointy",new y(Math.sqrt(3),Math.sqrt(3)/2,0,1.5,Math.sqrt(3)/3,-1/3,0,2/3,.5));var w=y;function v(e,n){var t=new x.a(0,0);return r()([,,,,,,].keys()).map(function(o,i){var a=function(e,n,t){var o=2*Math.PI*(e+n.startAngle)/6;return new x.a(t.x*Math.cos(o),t.y*Math.sin(o))}(i,e,n);return new x.a(t.x+a.x,t.y+a.y)})}var H=function(e){var n=e.children,t=e.classes,o=e.flat,a=e.height,r=e.origin,l=e.size,d=e.spacing,h=e.viewBox,x=e.width,f=o?w.Flat:w.Pointy,m=Object(s.useState)(v(f,l).map(function(e){return e.toString()}).join(" ")),p=i()(m,2),b=p[0],y=p[1];Object(s.useEffect)(function(){y(function(){return v(f,l).map(function(e){return e.toString()}).join(" ")})},[f,l]);var H={orientation:f,origin:r,size:l,spacing:d};return c.a.createElement("svg",{key:JSON.stringify(H),className:u()("grid",t.grid),height:a,version:"1.1",viewBox:"".concat(h.x," ").concat(h.y," ").concat(h.width," ").concat(h.height),width:x,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement(g.b,{value:{layout:H,points:b,viewBox:h}},c.a.createElement("g",{className:t.layout},n)))};H.propTypes={children:d.a.node.isRequired,classes:d.a.objectOf(d.a.string),flat:d.a.bool,height:d.a.oneOfType([d.a.string.isRequired,d.a.number.isRequired]),origin:d.a.oneOfType([d.a.instanceOf(x.a),d.a.shape({x:d.a.number.isRequired,y:d.a.number.isRequired})]),size:d.a.oneOfType([d.a.instanceOf(x.a),d.a.shape({x:d.a.number.isRequired,y:d.a.number.isRequired})]),spacing:d.a.number,width:d.a.oneOfType([d.a.string.isRequired,d.a.number.isRequired]),viewBox:d.a.shape({height:d.a.number.isRequired,width:d.a.number.isRequired,x:d.a.number.isRequired,y:d.a.number.isRequired})},H.defaultProps={classes:{grid:"",layout:""},flat:!0,height:480,origin:new x.a(0,0),size:new x.a(10,10),spacing:1,width:640,viewBox:{height:100,width:100,x:-50,y:-50}};var E=H;n.a=E;H.__docgenInfo={description:"",methods:[],displayName:"HexEngine",props:{classes:{defaultValue:{value:'{ grid: "", layout: "" }',computed:!1},type:{name:"objectOf",value:{name:"string"}},required:!1,description:""},flat:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Determines if the hexagons are oriented with a point or an edge facing up"},height:{defaultValue:{value:"480",computed:!1},type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"CSS string or number"},origin:{defaultValue:{value:"new Point(0, 0)",computed:!1},type:{name:"union",value:[{name:"instanceOf",value:"Point"},{name:"shape",value:{x:{name:"number",required:!0},y:{name:"number",required:!0}}}]},required:!1,description:"Origin of the grid"},size:{defaultValue:{value:"new Point(10, 10)",computed:!1},type:{name:"union",value:[{name:"instanceOf",value:"Point"},{name:"shape",value:{x:{name:"number",required:!0},y:{name:"number",required:!0}}}]},required:!1,description:"Size of the hexagons in each dimension"},spacing:{defaultValue:{value:"1.0",computed:!1},type:{name:"number"},required:!1,description:"Space between hexagons"},width:{defaultValue:{value:"640",computed:!1},type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1,description:"CSS string or number"},viewBox:{defaultValue:{value:"{\n  height: 100,\n  width: 100,\n  x: -50,\n  y: -50\n}",computed:!1},type:{name:"shape",value:{height:{name:"number",required:!0},width:{name:"number",required:!0},x:{name:"number",required:!0},y:{name:"number",required:!0}}},required:!1,description:"The viewBox {x,y,width,height} of the svg view area"},children:{type:{name:"node"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HexEngine.js"]={name:"HexEngine",docgenInfo:H.__docgenInfo,path:"src/HexEngine.js"})},604:function(e,n,t){"use strict";var o=t(4),i=t.n(o),a=t(5),r=t.n(a),s=t(27),c=t(145),l=function(){function e(){i()(this,e)}return r()(e,null,[{key:"getGenerator",value:function(n){return e.hasOwnProperty(n)?e[n]:null}},{key:"ring",value:function(e,n){for(var t=[],o=c.a.add(e,c.a.multiply(c.a.direction(4),n)),i=0;6>i;i++)for(var a=0;a<n;a++)t.push(o),o=c.a.neighbour(o,i);return t}},{key:"spiral",value:function(e,n){for(var t,o=[e],i=1;i<=n;i++)t=this.ring(e,i),o=o.concat(t);return o}},{key:"parallelogram",value:function(e,n,t,o){for(var i=[],a=e;a<=n;a++)for(var r=t;r<=o;r++)i.push(new s.a(a,r,-a-r));return i}},{key:"triangle",value:function(e){for(var n=[],t=0;t<=e;t++)for(var o=0;o<=e-t;o++)n.push(new s.a(t,o,-t-o));return n}},{key:"hexagon",value:function(e){for(var n=[],t=-e;t<=e;t++)for(var o=Math.max(-e,-t-e),i=Math.min(e,-t+e),a=o;a<=i;a++)n.push(new s.a(t,a,-t-a));return n}},{key:"rectangle",value:function(e,n){for(var t,o=[],i=0;i<n;i++)for(var a=-(t=Math.floor(i/2));a<e-t;a++)o.push(new s.a(a,i,-a-i));return o}},{key:"orientedRectangle",value:function(e,n){for(var t,o=[],i=0;i<e;i++)for(var a=-(t=Math.floor(i/2));a<n-t;a++)o.push(new s.a(i,a,-i-a));return o}}]),e}();n.a=l},605:function(e,n,t){t(241),t(606),e.exports=t(607)},607:function(e,n,t){"use strict";t.r(n),function(e){var n=t(154),o=t(603);Object(o.setOptions)({name:"react-hex-engine"}),n.configure(function(){t(621),t(657)},e)}.call(this,t(220)(e))},621:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"withStorySource",function(){return x}),t.d(n,"__STORY__",function(){return f}),t.d(n,"__ADDS_MAP__",function(){return m});var o=t(30),i=t.n(o),a=t(0),r=t.n(a),s=t(154),c=t(43),l=t(239),d=t(604),h=t(31),u=t(59),g=t(26),x=t(224).withStorySource,f="import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, boolean, number, object } from '@storybook/addon-knobs';\nimport { withInfo } from '@storybook/addon-info';\nimport GridGenerator from '../src/GridGenerator';\nimport Hexagon, { Hexagon_ } from '../src/Hexagon';\nimport HexEngine from '../src/HexEngine';\nimport Point from '../src/models/Point';\n\nHexagon.displayName = 'Hexagon';\nHexagon_.displayName = 'Hexagon';\nHexEngine.displayName = 'HexEngine';\n\nconst stories = storiesOf('HexEngine', module);\n\nstories.addDecorator(withKnobs);\n\nstories.addDecorator(\n  withInfo({\n    header: false,\n    inline: true,\n    maxPropStringLength: 512,\n    source: true,\n    propTablesExclude: [Hexagon_, Hexagon],\n  })\n);\n\nstories\n  .add(\n    'Kitchen Sink',\n    () => {\n      const flat = boolean('flat', true, 'HexEngine');\n      const size = object('size', { x: 10, y: 10 }, 'HexEngine');\n      const origin = object('origin', { x: 0, y: 0 }, 'HexEngine');\n      const spacing = number('spacing', 1.0, {}, 'HexEngine');\n      const width = number('width', 320, {}, 'HexEngine');\n      const height = number('height', 240, {}, 'HexEngine');\n      const viewBox = object('viewBox', { x: -30, y: -30, width: 60, height: 60 }, 'HexEngine');\n\n      return (\n        <HexEngine\n          width={width}\n          height={height}\n          viewBox={viewBox}\n          flat={flat}\n          size={size}\n          origin={origin}\n          spacing={spacing}\n        >\n          {GridGenerator.hexagon(1).map(hex => (\n            <Hexagon {...hex} key={hex.toString()} />\n          ))}\n        </HexEngine>\n      );\n    },\n    {\n      info: {\n        propTables: [HexEngine],\n      },\n    }\n  )\n  .add('non zero origin', () => (\n    <HexEngine origin={new Point(-5, -5)} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('pointy orientation', () => (\n    <HexEngine\n      flat={false}\n      width={320}\n      height={240}\n      viewBox={{\n        x: -25,\n        y: -25,\n        width: 50,\n        height: 50,\n      }}\n    >\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('bigger size', () => (\n    <HexEngine size={new Point(30, 30)} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('smaller size', () => (\n    <HexEngine size={new Point(3, 3)} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('irregular proportions', () => (\n    <HexEngine size={new Point(15, 5)} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('spacing', () => (\n    <HexEngine spacing={1.05} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={-1} r={0} s={1} />\n      <Hexagon q={0} r={0} s={0} />\n      <Hexagon q={1} r={0} s={-1} />\n    </HexEngine>\n  ));\n",m={"@spacing":{startLoc:{col:7,line:97},endLoc:{col:3,line:103}},"@irregular proportions":{startLoc:{col:7,line:92},endLoc:{col:3,line:96}},"@smaller size":{startLoc:{col:7,line:87},endLoc:{col:3,line:91}},"@bigger size":{startLoc:{col:7,line:82},endLoc:{col:3,line:86}},"@pointy orientation":{startLoc:{col:7,line:67},endLoc:{col:3,line:81}},"@non zero origin":{startLoc:{col:7,line:62},endLoc:{col:3,line:66}},"@Kitchen Sink":{startLoc:{col:4,line:30},endLoc:{col:5,line:60}}};h.b.displayName="Hexagon",h.a.displayName="Hexagon",u.a.displayName="HexEngine";var p=Object(s.storiesOf)("HexEngine",e).addDecorator(x("import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport { withKnobs, boolean, number, object } from '@storybook/addon-knobs';\nimport { withInfo } from '@storybook/addon-info';\nimport GridGenerator from '../src/GridGenerator';\nimport Hexagon, { Hexagon_ } from '../src/Hexagon';\nimport HexEngine from '../src/HexEngine';\nimport Point from '../src/models/Point';\n\nHexagon.displayName = 'Hexagon';\nHexagon_.displayName = 'Hexagon';\nHexEngine.displayName = 'HexEngine';\n\nconst stories = storiesOf('HexEngine', module);\n\nstories.addDecorator(withKnobs);\n\nstories.addDecorator(\n  withInfo({\n    header: false,\n    inline: true,\n    maxPropStringLength: 512,\n    source: true,\n    propTablesExclude: [Hexagon_, Hexagon],\n  })\n);\n\nstories\n  .add(\n    'Kitchen Sink',\n    () => {\n      const flat = boolean('flat', true, 'HexEngine');\n      const size = object('size', { x: 10, y: 10 }, 'HexEngine');\n      const origin = object('origin', { x: 0, y: 0 }, 'HexEngine');\n      const spacing = number('spacing', 1.0, {}, 'HexEngine');\n      const width = number('width', 320, {}, 'HexEngine');\n      const height = number('height', 240, {}, 'HexEngine');\n      const viewBox = object('viewBox', { x: -30, y: -30, width: 60, height: 60 }, 'HexEngine');\n\n      return (\n        <HexEngine\n          width={width}\n          height={height}\n          viewBox={viewBox}\n          flat={flat}\n          size={size}\n          origin={origin}\n          spacing={spacing}\n        >\n          {GridGenerator.hexagon(1).map(hex => (\n            <Hexagon {...hex} key={hex.toString()} />\n          ))}\n        </HexEngine>\n      );\n    },\n    {\n      info: {\n        propTables: [HexEngine],\n      },\n    }\n  )\n  .add('non zero origin', () => (\n    <HexEngine origin={new Point(-5, -5)} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('pointy orientation', () => (\n    <HexEngine\n      flat={false}\n      width={320}\n      height={240}\n      viewBox={{\n        x: -25,\n        y: -25,\n        width: 50,\n        height: 50,\n      }}\n    >\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('bigger size', () => (\n    <HexEngine size={new Point(30, 30)} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('smaller size', () => (\n    <HexEngine size={new Point(3, 3)} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('irregular proportions', () => (\n    <HexEngine size={new Point(15, 5)} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={0} r={0} s={0} />\n    </HexEngine>\n  ))\n  .add('spacing', () => (\n    <HexEngine spacing={1.05} width={320} height={240} viewBox={{ x: -30, y: -30, width: 60, height: 60 }}>\n      <Hexagon q={-1} r={0} s={1} />\n      <Hexagon q={0} r={0} s={0} />\n      <Hexagon q={1} r={0} s={-1} />\n    </HexEngine>\n  ));\n",m));p.addDecorator(c.withKnobs),p.addDecorator(Object(l.withInfo)({header:!1,inline:!0,maxPropStringLength:512,source:!0,propTablesExclude:[h.a,h.b]})),p.add("Kitchen Sink",function(){var e=Object(c.boolean)("flat",!0,"HexEngine"),n=Object(c.object)("size",{x:10,y:10},"HexEngine"),t=Object(c.object)("origin",{x:0,y:0},"HexEngine"),o=Object(c.number)("spacing",1,{},"HexEngine"),a=Object(c.number)("width",320,{},"HexEngine"),s=Object(c.number)("height",240,{},"HexEngine"),l=Object(c.object)("viewBox",{x:-30,y:-30,width:60,height:60},"HexEngine");return r.a.createElement(u.a,{width:a,height:s,viewBox:l,flat:e,size:n,origin:t,spacing:o},d.a.hexagon(1).map(function(e){return r.a.createElement(h.b,i()({},e,{key:e.toString()}))}))},{info:{propTables:[u.a]}}).add("non zero origin",function(){return r.a.createElement(u.a,{origin:new g.a(-5,-5),width:320,height:240,viewBox:{x:-30,y:-30,width:60,height:60}},r.a.createElement(h.b,{q:0,r:0,s:0}))}).add("pointy orientation",function(){return r.a.createElement(u.a,{flat:!1,width:320,height:240,viewBox:{x:-25,y:-25,width:50,height:50}},r.a.createElement(h.b,{q:0,r:0,s:0}))}).add("bigger size",function(){return r.a.createElement(u.a,{size:new g.a(30,30),width:320,height:240,viewBox:{x:-30,y:-30,width:60,height:60}},r.a.createElement(h.b,{q:0,r:0,s:0}))}).add("smaller size",function(){return r.a.createElement(u.a,{size:new g.a(3,3),width:320,height:240,viewBox:{x:-30,y:-30,width:60,height:60}},r.a.createElement(h.b,{q:0,r:0,s:0}))}).add("irregular proportions",function(){return r.a.createElement(u.a,{size:new g.a(15,5),width:320,height:240,viewBox:{x:-30,y:-30,width:60,height:60}},r.a.createElement(h.b,{q:0,r:0,s:0}))}).add("spacing",function(){return r.a.createElement(u.a,{spacing:1.05,width:320,height:240,viewBox:{x:-30,y:-30,width:60,height:60}},r.a.createElement(h.b,{q:-1,r:0,s:1}),r.a.createElement(h.b,{q:0,r:0,s:0}),r.a.createElement(h.b,{q:1,r:0,s:-1}))})}.call(this,t(220)(e))},627:function(e,n,t){var o={"./nestedObjectAssign":530,"./nestedObjectAssign.js":530};function i(e){var n=a(e);return t(n)}function a(e){var n=o[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=627},657:function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"withStorySource",function(){return m}),t.d(n,"__STORY__",function(){return p}),t.d(n,"__ADDS_MAP__",function(){return b});var o=t(0),i=t.n(o),a=t(154),r=t(53),s=t.n(r),c=t(80),l=t.n(c),d=t(43),h=t(239),u=t(31),g=t(59),x=t(26),f=t(524),m=(t(658),t(224).withStorySource),p="import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport addons from '@storybook/addons';\nimport Events from '@storybook/core-events';\nimport { withKnobs, text, boolean } from '@storybook/addon-knobs';\nimport { withInfo } from '@storybook/addon-info';\nimport Hexagon, { Hexagon_ } from '../src/Hexagon';\nimport HexEngine from '../src/HexEngine';\nimport Point from '../src/models/Point';\nimport { manager } from '@storybook/addon-knobs/dist/registerKnobs';\nimport './Hexagon.css';\n\nHexagon.displayName = 'Hexagon';\nHexagon_.displayName = 'Hexagon';\nHexEngine.displayName = 'HexEngine';\n\nconst stories = storiesOf('Hexagon', module);\n\nstories.addDecorator(withKnobs);\nstories.addDecorator(withInfo);\n\nstories.add(\n  'Kitchen Sink',\n  () => {\n    const selectable = boolean('selectable', true, 'Hexagon');\n    const selected = boolean('selected', false, 'Hexagon');\n    const highlighted = boolean('highlighted', false, 'Hexagon');\n    const hoverable = boolean('hoverable', true, 'Hexagon');\n    const showCoordinates = boolean('showCoordinates', false, 'Hexagon');\n    const innerText = text('text', '', 'Hexagon');\n\n    return (\n      <HexEngine\n        size={new Point(10, 10)}\n        width={320}\n        height={240}\n        viewBox={{\n          x: -25,\n          y: -25,\n          width: 50,\n          height: 50,\n        }}\n      >\n        <Hexagon\n          q={0}\n          r={0}\n          s={0}\n          selectable={selectable}\n          selected={selected}\n          highlighted={highlighted}\n          hoverable={hoverable}\n          text={innerText}\n          showCoordinates={showCoordinates}\n          classes={{\n            hexagon: 'showCoordinates text',\n            highlighted: 'highlighted',\n            hovered: 'hovered',\n            selected: 'selected',\n            q: 'axis',\n            r: 'axis',\n            s: 'axis',\n            text: 'text',\n          }}\n          onClick={() => {\n            const { knobStore } = manager;\n            const knobOptions = knobStore.get('selected');\n            knobOptions.value = !selected;\n            knobStore.markAllUnused();\n            addons.getChannel().emit(Events.FORCE_RE_RENDER);\n          }}\n        />\n      </HexEngine>\n    );\n  },\n  {\n    info: {\n      header: false,\n      inline: true,\n      maxPropStringLength: 512,\n      propTables: [Hexagon_], // should be able to fix this with useContext in react 16.7.x\n      propTablesExclude: [HexEngine, Hexagon],\n      source: false,\n      excludedPropTypes: ['data', 'layout', 'onDragEnd', 'onDragOver', 'onDragStart', 'onDragStop', 'onDrop', 'points'],\n    },\n  }\n);\n",b={"@Kitchen Sink":{startLoc:{col:2,line:23},endLoc:{col:3,line:85}}};u.b.displayName="Hexagon",u.a.displayName="Hexagon",g.a.displayName="HexEngine";var y=Object(a.storiesOf)("Hexagon",e).addDecorator(m("import React from 'react';\nimport { storiesOf } from '@storybook/react';\nimport addons from '@storybook/addons';\nimport Events from '@storybook/core-events';\nimport { withKnobs, text, boolean } from '@storybook/addon-knobs';\nimport { withInfo } from '@storybook/addon-info';\nimport Hexagon, { Hexagon_ } from '../src/Hexagon';\nimport HexEngine from '../src/HexEngine';\nimport Point from '../src/models/Point';\nimport { manager } from '@storybook/addon-knobs/dist/registerKnobs';\nimport './Hexagon.css';\n\nHexagon.displayName = 'Hexagon';\nHexagon_.displayName = 'Hexagon';\nHexEngine.displayName = 'HexEngine';\n\nconst stories = storiesOf('Hexagon', module);\n\nstories.addDecorator(withKnobs);\nstories.addDecorator(withInfo);\n\nstories.add(\n  'Kitchen Sink',\n  () => {\n    const selectable = boolean('selectable', true, 'Hexagon');\n    const selected = boolean('selected', false, 'Hexagon');\n    const highlighted = boolean('highlighted', false, 'Hexagon');\n    const hoverable = boolean('hoverable', true, 'Hexagon');\n    const showCoordinates = boolean('showCoordinates', false, 'Hexagon');\n    const innerText = text('text', '', 'Hexagon');\n\n    return (\n      <HexEngine\n        size={new Point(10, 10)}\n        width={320}\n        height={240}\n        viewBox={{\n          x: -25,\n          y: -25,\n          width: 50,\n          height: 50,\n        }}\n      >\n        <Hexagon\n          q={0}\n          r={0}\n          s={0}\n          selectable={selectable}\n          selected={selected}\n          highlighted={highlighted}\n          hoverable={hoverable}\n          text={innerText}\n          showCoordinates={showCoordinates}\n          classes={{\n            hexagon: 'showCoordinates text',\n            highlighted: 'highlighted',\n            hovered: 'hovered',\n            selected: 'selected',\n            q: 'axis',\n            r: 'axis',\n            s: 'axis',\n            text: 'text',\n          }}\n          onClick={() => {\n            const { knobStore } = manager;\n            const knobOptions = knobStore.get('selected');\n            knobOptions.value = !selected;\n            knobStore.markAllUnused();\n            addons.getChannel().emit(Events.FORCE_RE_RENDER);\n          }}\n        />\n      </HexEngine>\n    );\n  },\n  {\n    info: {\n      header: false,\n      inline: true,\n      maxPropStringLength: 512,\n      propTables: [Hexagon_], // should be able to fix this with useContext in react 16.7.x\n      propTablesExclude: [HexEngine, Hexagon],\n      source: false,\n      excludedPropTypes: ['data', 'layout', 'onDragEnd', 'onDragOver', 'onDragStart', 'onDragStop', 'onDrop', 'points'],\n    },\n  }\n);\n",b));y.addDecorator(d.withKnobs),y.addDecorator(h.withInfo),y.add("Kitchen Sink",function(){var e=Object(d.boolean)("selectable",!0,"Hexagon"),n=Object(d.boolean)("selected",!1,"Hexagon"),t=Object(d.boolean)("highlighted",!1,"Hexagon"),o=Object(d.boolean)("hoverable",!0,"Hexagon"),a=Object(d.boolean)("showCoordinates",!1,"Hexagon"),r=Object(d.text)("text","","Hexagon");return i.a.createElement(g.a,{size:new x.a(10,10),width:320,height:240,viewBox:{x:-25,y:-25,width:50,height:50}},i.a.createElement(u.b,{q:0,r:0,s:0,selectable:e,selected:n,highlighted:t,hoverable:o,text:r,showCoordinates:a,classes:{hexagon:"showCoordinates text",highlighted:"highlighted",hovered:"hovered",selected:"selected",q:"axis",r:"axis",s:"axis",text:"text"},onClick:function(){var e=f.manager.knobStore;e.get("selected").value=!n,e.markAllUnused(),s.a.getChannel().emit(l.a.FORCE_RE_RENDER)}}))},{info:{header:!1,inline:!0,maxPropStringLength:512,propTables:[u.a],propTablesExclude:[g.a,u.b],source:!1,excludedPropTypes:["data","layout","onDragEnd","onDragOver","onDragStart","onDragStop","onDrop","points"]}})}.call(this,t(220)(e))},658:function(e,n,t){var o=t(659);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(661)(o,i);o.locals&&(e.exports=o.locals)},659:function(e,n,t){(e.exports=t(660)(!1)).push([e.i,".hexagon {\n    fill: #00a;\n    transition: fill 0.2s;\n}\n\n.hexagon.hovered {\n    fill: #aa0;\n    transition: fill 0.2s;\n}\n\n.hexagon.hovered > polygon {\n    stroke: #a00;\n    stroke-width: 0.1;\n}\n\n.hexagon.selected {\n    fill: #ff0;\n    transition: fill 0.5s;\n}\n\n.hexagon.selected > polygon {\n    stroke: #a00;\n    stroke-width: 0.1;\n}\n\n.hexagon.selected.hovered {\n    fill: #fff;\n}\n\n.hexagon.selected.hovered > polygon {\n    stroke: #a00;\n    stroke-width: 0.1;\n}\n\n.hexagon.highlighted {\n    fill: blue;\n}\n\n.hexagon.showCoordinates > text.axis {\n    fill: #fff;\n    font-size: 2px;\n    font-family: sans-serif;\n}\n\n.hexagon.text > text.text {\n    fill: #fff;\n    font-size: 3px;\n    font-family: sans-serif;\n}\n",""])}},[[605,2,4]]]);
//# sourceMappingURL=iframe.08d38310b810ebd3cb63.bundle.js.map