import{g as p,o,b as n,e as r,F as a,h as d,p as u,i as g}from"./app.072e5e9e.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const h="d3-graph-controller",v="A TypeScript library for visualizing and simulating directed, interactive graphs.",f="1.16.1",y="MIT",b="github:DerYeger/d3-graph-controller",_="https://graph-controller.yeger.eu",j={url:"https://github.com/DerYeger/d3-graph-controller/issues"},k={name:"Jan M\xFCller",url:"https://github.com/DerYeger"},w=["d3","graph","controller"],x={prepare:"husky install",prebuild:"rimraf ./dist",build:"tsc --noEmit && vite build",dev:"vite build --watch","demo:dev":"vite --config demo/vite.config.ts","demo:build":"vite --config demo/vite.config.ts build","demo:preview":"yarn demo:build && vite --config demo/vite.config.ts preview","docs:dev":"vuepress dev docs","docs:build":"vuepress build docs",lint:"yarn lint:prettier && yarn lint:eslint","lint:commits":"yarn commitlint --from=HEAD~1","lint:eslint":'eslint "./**/*.{js,ts,vue}"',"lint:prettier":'prettier --check "./**/*.{js,json,html,scss,ts,vue,yml}"',fix:"yarn pretty && yarn lint:eslint --fix ",test:"vitest --ui","test:ci":'rimraf ./coverage && c8 --reporter=lcov --reporter=text --all --src "src" --include "src/*" vitest --run',"test:run":"vitest --run",pretty:'prettier --write "./**/*.{js,json,html,scss,ts,vue,yml}"',prepublishOnly:"yarn build"},$=["dist","default.css"],I="./dist/d3-graph-controller.umd.js",C="./dist/d3-graph-controller.es.js",D={".":{import:"./dist/d3-graph-controller.es.js",require:"./dist/d3-graph-controller.umd.js"},"./default.css":{import:"./default.css",require:"./default.css"}},S="dist/types/src/main.d.ts",M=!1,z={"@commitlint/cli":"16.0.1","@commitlint/config-conventional":"16.0.0","@types/d3-drag":"3.0.1","@types/d3-force":"3.0.3","@types/d3-selection":"3.0.2","@types/d3-zoom":"3.0.1","@types/node":"16.11.19","@types/resize-observer-browser":"0.1.6","@typescript-eslint/eslint-plugin":"5.9.0","@typescript-eslint/parser":"5.9.0","@vitejs/plugin-vue":"2.0.1","@vitest/ui":"0.0.139","@vuepress/plugin-register-components":"2.0.0-beta.32","@vuepress/plugin-search":"2.0.0-beta.32",c8:"7.11.0","d3-graph-controller":"link:.",eslint:"8.6.0","eslint-config-prettier":"8.3.0","eslint-plugin-import":"2.25.4","eslint-plugin-prettier":"4.0.0","eslint-plugin-tsdoc":"0.2.14","eslint-plugin-unused-imports":"2.0.0","eslint-plugin-vue":"8.2.0",husky:"7.0.4",jsdom:"19.0.0","lint-staged":"12.1.7",prettier:"2.5.1",rimraf:"3.0.2",typescript:"4.5.4",unocss:"0.20.2","unplugin-vue-components":"0.17.11",vite:"2.7.10","vite-plugin-dts":"0.9.7",vitest:"0.0.139",vue:"3.2.26","vue-eslint-parser":"8.0.1",vuepress:"2.0.0-beta.31"},E={"d3-drag":"3.0.0","d3-force":"3.0.0","d3-selection":"3.0.0","d3-zoom":"3.0.0","ts-deepmerge":"1.1.0",vecti:"2.0.0"},T={access:"public"};var c={name:h,description:v,version:f,license:y,repository:b,homepage:_,bugs:j,author:k,keywords:w,scripts:x,files:$,main:I,module:C,exports:D,types:S,sideEffects:M,devDependencies:z,dependencies:E,publishConfig:T,"lint-staged":{"*.{js,json,html,scss,ts,vue,yml}":"prettier --write","*.{js,json,ts,vue}":"eslint --fix"}};const B=s=>(u("data-v-60041ecc"),s=s(),g(),s),F={id:"status"},N=B(()=>r("h2",null,"Status",-1)),P={id:"badges"},Y=["href"],q=["alt","src"],A=p({setup(s){const t=c.name,e=c.repository.replace("github:",""),l=[{href:`https://github.com/${e}/actions/workflows/ci.yml`,alt:"CI",src:`https://img.shields.io/github/workflow/status/${e}/CI?label=ci&logo=github&color=#4DC71F`},{href:`https://www.npmjs.com/package/${t}`,alt:"NPM",src:`https://img.shields.io/npm/v/${t}?logo=npm`},{href:`https://codecov.io/gh/${e}`,alt:"Codecov",src:`https://codecov.io/gh/${e}/branch/master/graph/badge.svg?token=p35W6u2noe`},{href:`https://lgtm.com/projects/g/${e}`,alt:"LGTM Grade",src:`https://img.shields.io/lgtm/grade/javascript/github/${e}?logo=lgtm`},{href:"https://opensource.org/licenses/MIT",alt:"MIT",src:`https://img.shields.io/npm/l/${t}?color=%234DC71F`},{href:`https://bundlephobia.com/package/${t}`,alt:"NPM Bundle Size",src:`https://img.shields.io/bundlephobia/minzip/${t}`}];return(G,L)=>(o(),n("div",F,[N,r("div",P,[(o(),n(a,null,d(l,i=>r("a",{key:i.src,href:i.href},[r("img",{alt:i.alt,src:i.src},null,8,q)],8,Y)),64))])]))}});var O=m(A,[["__scopeId","data-v-60041ecc"]]);export{O as default};