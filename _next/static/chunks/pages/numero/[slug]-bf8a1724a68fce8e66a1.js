(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{4763:function(e,n,s){"use strict";var r=s(5893),i=(s(7294),s(1664));n.Z=function(e){var n=e.children,s=e.num,t=e.hover,a=e.size,c={backgroundImage:"url(/img/numeros/"+s+".jpg)"},o=(null!==a&&void 0!==a?a:"").length>0?" "+a:"",l=t?"imagen-numero"+o+" hover":"imagen-numero"+o,d=(0,r.jsx)("div",{className:l,style:c,children:n});return!1===t?(0,r.jsxs)(r.Fragment,{children:[d," "]}):(0,r.jsx)(i.default,{href:"/numero/".concat(encodeURIComponent(s)),children:(0,r.jsx)("a",{"aria-label":s,children:d})})}},8833:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return d},default:function(){return u}});var r=s(5893),i=s(7294),t=s(9008),a=s(3253),c=s.n(a),o=s(4763);c().setAppElement("#__next");var l=function(e){var n=e.contents,s=(0,i.useState)(!1),t=s[0],a=s[1],l=function(){a(!t)},d=(0,i.useState)(null),u=d[0],h=d[1],m=function(){h(!u)},x=JSON.parse(n),j=function(e,n,s){var i=""===e?e:'"'+e+'" - ';return(0,r.jsxs)("div",{children:[i,(0,r.jsx)("em",{children:n||s})]})},f=x.articulos.map((function(e){return(0,r.jsxs)("div",{className:"container-articulo",children:[(0,r.jsx)("div",{className:"container-texto pagina",children:e.pagina}),(0,r.jsxs)("div",{className:"container-texto articulo",children:[j(e.articulo,e.pelicula,e.especial),(0,r.jsx)("b",{children:e.autor})]})]})}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"container-general",children:[(0,r.jsxs)("div",{className:"container-izquierda",children:[(0,r.jsxs)("p",{children:["N\xdaMERO ",x.numero]}),(0,r.jsxs)("div",{className:"container-contenido",children:[(0,r.jsx)(o.Z,{num:x.numero,hover:!1}),(0,r.jsxs)("div",{className:"container-botones",children:[(0,r.jsx)("button",{type:"button",className:"boton",onClick:function(){return window.open(x.dropbox_pdf+"?dl=1","_blank")},children:"Descargar"}),(0,r.jsx)("button",{type:"button",className:"boton",id:"boton-modal",onClick:l,children:"Ver online"})]})]})]}),(0,r.jsxs)("div",{className:"container-derecha",children:[(0,r.jsx)("p",{children:"ART\xcdCULOS"}),(0,r.jsx)("div",{className:"container-indice",children:f})]})]}),(0,r.jsxs)(c(),{isOpen:t,onRequestClose:function(){l(),m()},className:"Modal ",overlayClassName:"OverlayModal",children:[u?null:(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:"Cargando..."})}),(0,r.jsx)("iframe",{style:{display:u?"block":"none"},src:x.dropbox_pdf+"?raw=1",width:"640",height:"590",title:"N\xfamero "+x.numero,onLoad:function(){return m()}})]})]})},d=!0,u=function(e){var n=e.contents,s=JSON.parse(n);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(t.default,{children:[(0,r.jsxs)("title",{children:["Letra Celuloide - N\xfamero ",s.numero]}),(0,r.jsx)("meta",{name:"description",content:"Revista de cine y literatura"}),(0,r.jsx)("link",{rel:"icon",href:"/favlogo.ico"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/styles/main.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/styles/Numero.module.css"}),(0,r.jsx)("script",{src:"/newsform.js"})]}),(0,r.jsx)("div",{children:(0,r.jsx)(l,{contents:n})})]})}},8051:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/numero/[slug]",function(){return s(8833)}])}},function(e){e.O(0,[774,835,888,179],(function(){return n=8051,e(e.s=n);var n}));var n=e.O();_N_E=n}]);